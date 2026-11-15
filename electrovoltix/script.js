/* Electro Voltix — categorías, carruseles, búsqueda y carrito */
{
  const FEES = 6;
  const BRANDS = ["SAMSUNG", "WHIRLPOOL", "DREAN", "SMARTLIFE", "ENOVA", "NOBLEX", "MIDEA", "KANJI", "PHILCO", "BGH"];

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const money = (n) => "$" + Math.round(n).toLocaleString("es-AR");
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Catálogo único (los productos se repiten entre secciones)
  const CATALOG = new Map();
  DATA.sections.forEach((s) => s.products.forEach((p) => {
    p.id = p.img.replace(/\W/g, "");
    CATALOG.set(p.id, p);
  }));
  const find = (id) => CATALOG.get(id);

  /* Categorías, menú y pie */
  $("#cats").innerHTML = DATA.cats.map((c) => `
    <li><a href="#rails" class="cat" data-search="${esc(c.name)}">
      <img src="${c.img}" alt="" loading="lazy" /><span>${esc(c.name)}</span>
    </a></li>`).join("");
  $("#navLinks").innerHTML = DATA.cats.map((c) => `<a href="#rails" data-search="${esc(c.name)}">${esc(c.name)}</a>`).join("");
  $("#footerCats").innerHTML = ['<a href="#rails" data-search="">Todos los productos</a>']
    .concat(DATA.sections.map((s) => `<a href="#${s.id}">${esc(s.title)}</a>`)).join("");
  $("#brands").innerHTML = [...BRANDS, ...BRANDS].map((b) => `<span>${b}</span>`).join("");

  /* Tarjeta */
  const card = (p) => `
    <article class="card">
      <div class="card__media"><img src="${p.img}" alt="${esc(p.name)}" loading="lazy" /></div>
      <h3 class="card__title">${esc(p.name)}</h3>
      <span class="card__price">${money(p.price)}</span>
      <span class="card__fees">${FEES} cuotas de ${money(p.price / FEES)}</span>
      <button class="card__add" data-add="${p.id}">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 2h3.3l.9 2H21a1 1 0 0 1 .9 1.4l-3.6 7a2 2 0 0 1-1.8 1.1H8.1l-1 1.8V16h12v2H7a2 2 0 0 1-1.7-3l1.3-2.4L3.4 4H2V2Z"/></svg>
        Agregar
      </button>
    </article>`;

  /* Carruseles */
  $("#rails").innerHTML = DATA.sections.map((s) => `
    <section class="container rail-section" id="${s.id}" aria-labelledby="${s.id}-t">
      <div class="rail-head">
        <div>
          ${s.eyebrow ? `<p class="rail-eyebrow">${esc(s.eyebrow)}</p>` : ""}
          <h2 id="${s.id}-t">${esc(s.title)}</h2>
        </div>
        <button class="see-all" data-all="${s.id}">Ver todos ›</button>
      </div>
      <div class="rail">
        <button class="rail__btn rail__btn--prev" aria-label="Anteriores">‹</button>
        <div class="rail__track">${s.products.map(card).join("")}</div>
        <button class="rail__btn rail__btn--next" aria-label="Siguientes">›</button>
      </div>
    </section>`).join("");

  $$(".rail").forEach((rail) => {
    const track = $(".rail__track", rail);
    const prev = $(".rail__btn--prev", rail);
    const next = $(".rail__btn--next", rail);
    const update = () => {
      prev.disabled = track.scrollLeft < 5;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 5;
    };
    prev.addEventListener("click", () => track.scrollBy({ left: -track.clientWidth, behavior: "smooth" }));
    next.addEventListener("click", () => track.scrollBy({ left: track.clientWidth, behavior: "smooth" }));
    track.addEventListener("scroll", update, { passive: true });
    new ResizeObserver(update).observe(track);
  });

  /* Búsqueda y "Ver todos" */
  const normalize = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const CAT_WORDS = {
    "cocinas y hornos": ["cocina", "horno", "anafe"],
    "aires": ["aire"],
    "peq. electrodomesticos": ["batidora", "licuadora", "microondas", "pava", "cafetera", "freidora", "aspiradora", "notebook", "horno"],
    "lavado": ["lavarropas", "lavasecarropas", "secarropas", "lavado"],
    "refrigeracion": ["heladera", "freezer"],
    "termotanques": ["termotanque", "calefon"],
    "lavavajillas": ["lavavajilla"],
  };
  const results = $("#resultados");

  function showResults(title, list) {
    $("#resultsTitle").textContent = title;
    $("#resultsGrid").innerHTML = list.length ? list.map(card).join("")
      : `<p class="cart__empty" style="grid-column:1/-1">No encontramos productos. Probá con otra búsqueda.</p>`;
    results.hidden = false;
    $("#rails").hidden = true;
    results.scrollIntoView({ behavior: "smooth" });
  }
  function clearResults() {
    results.hidden = true;
    $("#rails").hidden = false;
    $("#searchInput").value = "";
  }
  function search(q) {
    const nq = normalize(q.trim());
    if (!nq) { clearResults(); $("#rails").scrollIntoView({ behavior: "smooth" }); return; }
    const words = CAT_WORDS[nq] || nq.split(/\s+/);
    const any = !!CAT_WORDS[nq];
    const list = [...CATALOG.values()].filter((p) => {
      const n = normalize(p.name);
      return any ? words.some((w) => n.includes(w)) : words.every((w) => n.includes(w));
    });
    showResults(`Resultados para “${q.trim()}”`, list);
  }

  $("#searchForm").addEventListener("submit", (e) => { e.preventDefault(); search($("#searchInput").value); });
  $("#clearSearch").addEventListener("click", clearResults);

  document.addEventListener("click", (e) => {
    const s = e.target.closest("[data-search]");
    if (s) { e.preventDefault(); $("#nav").classList.remove("is-open"); $("#searchInput").value = s.dataset.search; search(s.dataset.search); return; }
    const all = e.target.closest("[data-all]");
    if (all) { const sec = DATA.sections.find((x) => x.id === all.dataset.all); showResults(sec.title, sec.products); return; }
    const add = e.target.closest("[data-add]");
    if (add) addToCart(add.dataset.add);
  });

  /* Carrito */
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem("ev-cart2")) || []; } catch { cart = []; }
  cart = cart.filter((i) => find(i.id));
  const saveCart = () => { try { localStorage.setItem("ev-cart2", JSON.stringify(cart)); } catch {} };

  function addToCart(id) {
    const item = cart.find((i) => i.id === id);
    item ? item.qty++ : cart.push({ id, qty: 1 });
    saveCart();
    renderCart();
    const badge = $("#cartCount");
    badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump");
    toast(`Agregado al carrito: ${find(id).name}`);
  }

  function renderCart() {
    const count = cart.reduce((s, i) => s + i.qty, 0);
    const total = cart.reduce((s, i) => s + find(i.id).price * i.qty, 0);
    $("#cartCount").textContent = count;
    $("#cartTotal").textContent = money(total);
    $("#cartItems").innerHTML = cart.length ? cart.map((i, idx) => {
      const p = find(i.id);
      return `
      <div class="cart-item">
        <img src="${p.img}" alt="" />
        <div>
          <div class="cart-item__name">${esc(p.name)}</div>
          <div class="cart-item__price">${money(p.price * i.qty)}</div>
          <div class="qty">
            <button data-qty="-1" data-idx="${idx}" aria-label="Restar">−</button>
            <span>${i.qty}</span>
            <button data-qty="1" data-idx="${idx}" aria-label="Sumar">+</button>
          </div>
        </div>
        <button class="remove" data-remove="${idx}">Quitar</button>
      </div>`;
    }).join("") : `<p class="cart__empty">Tu carrito está vacío.</p>`;
  }

  $("#cartItems").addEventListener("click", (e) => {
    const q = e.target.closest("[data-qty]");
    const r = e.target.closest("[data-remove]");
    if (q) {
      const item = cart[q.dataset.idx];
      item.qty += Number(q.dataset.qty);
      if (item.qty <= 0) cart.splice(q.dataset.idx, 1);
    } else if (r) {
      cart.splice(r.dataset.remove, 1);
    } else return;
    saveCart();
    renderCart();
  });

  const openCart = () => { $("#cart").classList.add("is-open"); $("#overlay").classList.add("is-open"); };
  const closeCart = () => { $("#cart").classList.remove("is-open"); $("#overlay").classList.remove("is-open"); };
  $("#cartBtn").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  $("#overlay").addEventListener("click", closeCart);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCart(); });

  $("#checkoutBtn").addEventListener("click", () => {
    if (!cart.length) return toast("Agregá productos para iniciar la compra");
    toast("¡Gracias! Te esperamos en Jujuy 1845, Posadas");
    cart = []; saveCart(); renderCart(); closeCart();
  });

  $("#menuToggle").addEventListener("click", () => $("#nav").classList.toggle("is-open"));

  let toastTimer;
  function toast(text) {
    const t = $("#toast");
    t.textContent = text;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
  }

  $("#year").textContent = new Date().getFullYear();
  renderCart();
}
