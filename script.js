/* =========================================================
   TOXI Parfums — Interacciones
   ========================================================= */

const PRODUCTS = [
  {
    id: "noir-absolu", name: "Noir Absolu", family: "amaderado", label: "Amaderado",
    price: 145, badge: "Más vendido", c1: "#e9c9a1", c2: "#a8743d",
    desc: "Una oda a la noche. Maderas ahumadas y cuero suave envueltos en un halo de vainilla de Madagascar.",
    top: "Pimienta negra, bergamota", heart: "Cuero, iris", base: "Vetiver, vainilla, sándalo",
  },
  {
    id: "rose-eternelle", name: "Rose Éternelle", family: "floral", label: "Floral",
    price: 132, badge: "Nuevo", c1: "#f6dbe0", c2: "#b56576",
    desc: "La rosa en su máxima expresión: fresca al amanecer, aterciopelada al caer la tarde.",
    top: "Lichi, pomelo rosa", heart: "Rosa de Damasco, peonía", base: "Almizcle blanco, cedro",
  },
  {
    id: "ambre-sacre", name: "Ambre Sacré", family: "oriental", label: "Oriental",
    price: 158, c1: "#f0c27b", c2: "#8e4b23",
    desc: "Cálido y envolvente como un atardecer en el desierto. Ámbar, especias y resinas preciosas.",
    top: "Cardamomo, azafrán", heart: "Ámbar, canela", base: "Benjuí, tonka, pachulí",
  },
  {
    id: "brise-marine", name: "Brise Marine", family: "fresco", label: "Fresco",
    price: 118, c1: "#d8ebf0", c2: "#5f8fa3",
    desc: "La libertad de la costa mediterránea. Sal marina, cítricos y un fondo mineral luminoso.",
    top: "Limón de Amalfi, menta", heart: "Notas marinas, salvia", base: "Ambroxan, madera flotante",
  },
  {
    id: "jardin-secret", name: "Jardin Secret", family: "floral", label: "Floral",
    price: 128, c1: "#f8f1df", c2: "#c9a95c",
    desc: "Un paseo nocturno entre jazmines y nardos en flor. Sensual, cremoso, inolvidable.",
    top: "Neroli, mandarina", heart: "Jazmín sambac, nardo", base: "Almizcle, haba tonka",
  },
  {
    id: "cedre-velours", name: "Cèdre Velours", family: "amaderado", label: "Amaderado",
    price: 138, c1: "#dfe6d5", c2: "#5e6e4b",
    desc: "Elegancia silenciosa. Cedro del Atlas y musgo de roble sobre un fondo aterciopelado.",
    top: "Enebro, elemi", heart: "Cedro del Atlas, ciprés", base: "Musgo de roble, ámbar gris",
  },
  {
    id: "the-blanc", name: "Thé Blanc", family: "fresco", label: "Fresco",
    price: 112, c1: "#f4f4ee", c2: "#a7b39c",
    desc: "Serenidad embotellada. Té blanco, bambú y flor de higuera para cada día.",
    top: "Té blanco, yuzu", heart: "Bambú, flor de higuera", base: "Almizcle limpio",
  },
  {
    id: "oud-imperial", name: "Oud Imperial", family: "oriental", label: "Oriental",
    price: 240, badge: "Edición limitada", gold: true, c1: "#5a3b2e", c2: "#1e1310",
    desc: "Solo 500 frascos numerados. Oud de Laos, rosa de Taif y ámbar gris en una composición majestuosa.",
    top: "Azafrán, incienso", heart: "Rosa de Taif, oud", base: "Ámbar gris, cuero, mirra",
  },
];

const SIZES = [
  { ml: 50, factor: 1 },
  { ml: 100, factor: 1.6 },
];

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const money = (n) => "$" + n.toLocaleString("es-AR", { maximumFractionDigits: 0 });
const findProduct = (id) => PRODUCTS.find((p) => p.id === id);
const priceFor = (p, ml) => Math.round(p.price * SIZES.find((s) => s.ml === ml).factor);

const bottleHTML = (p, name = true) => `
  <div class="bottle" style="--c1:${p.c1};--c2:${p.c2};">
    <div class="bottle__cap"></div><div class="bottle__neck"></div>
    <div class="bottle__body"><span>TOXI</span>${name ? `<small>${p.name}</small>` : ""}</div>
  </div>`;

/* ---------- Productos ---------- */
const productsEl = $("#products");

function renderProducts(filter = "todos") {
  const list = filter === "todos" ? PRODUCTS : PRODUCTS.filter((p) => p.family === filter);
  productsEl.innerHTML = list
    .map(
      (p, i) => `
    <article class="product" style="animation-delay:${i * 70}ms">
      <div class="product__media" data-view="${p.id}">
        ${p.badge ? `<span class="badge ${p.gold ? "badge--gold" : ""}">${p.badge}</span>` : ""}
        ${bottleHTML(p)}
        <span class="quick-view">Vista rápida</span>
      </div>
      <div class="product__info">
        <p class="product__family">${p.label}</p>
        <h3 class="product__name">${p.name}</h3>
        <p class="product__notes">${p.top} · ${p.heart}</p>
        <div class="product__row">
          <span class="product__price">${money(p.price)}<small>50 ml</small></span>
          <button class="add-btn" data-add="${p.id}">Añadir</button>
        </div>
      </div>
    </article>`
    )
    .join("");
}

$("#filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  $$(".filter").forEach((b) => b.classList.toggle("is-active", b === btn));
  renderProducts(btn.dataset.filter);
});

/* ---------- Carrito ---------- */
let cart = [];
try { cart = JSON.parse(localStorage.getItem("toxi-cart") || "[]"); } catch { cart = []; }

const saveCart = () => { try { localStorage.setItem("toxi-cart", JSON.stringify(cart)); } catch {} };

function addToCart(id, ml = 50) {
  const p = findProduct(id);
  if (!p) return;
  const existing = cart.find((i) => i.id === id && i.ml === ml);
  existing ? existing.qty++ : cart.push({ id, ml, qty: 1 });
  saveCart();
  renderCart();
  const badge = $("#cartCount");
  badge.classList.add("bump");
  setTimeout(() => badge.classList.remove("bump"), 300);
  toast(`${p.name} ${ml} ml añadido al carrito`);
}

function renderCart() {
  const itemsEl = $("#cartItems");
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + priceFor(findProduct(i.id), i.ml) * i.qty, 0);
  $("#cartCount").textContent = count;
  $("#cartTotal").textContent = money(total);
  $("#checkoutBtn").disabled = count === 0;

  if (!cart.length) {
    itemsEl.innerHTML = `<div class="cart__empty"><p>Tu carrito está vacío.</p><br/><a href="#coleccion" class="btn btn--ghost" data-close-cart>Explorar colección</a></div>`;
    return;
  }

  itemsEl.innerHTML = cart
    .map((item, idx) => {
      const p = findProduct(item.id);
      return `
      <div class="cart-item">
        <div class="cart-item__thumb">${bottleHTML(p, false)}</div>
        <div>
          <h4>${p.name}</h4>
          <small>${item.ml} ml · ${p.label}</small><br/>
          <div class="qty">
            <button data-qty="-1" data-idx="${idx}" aria-label="Restar">−</button>
            <span>${item.qty}</span>
            <button data-qty="1" data-idx="${idx}" aria-label="Sumar">+</button>
          </div>
        </div>
        <div class="cart-item__right">
          <strong>${money(priceFor(p, item.ml) * item.qty)}</strong>
          <button class="remove" data-remove="${idx}">Eliminar</button>
        </div>
      </div>`;
    })
    .join("");
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
  } else if (e.target.closest("[data-close-cart]")) {
    closeCart();
    return;
  } else return;
  saveCart();
  renderCart();
});

const openCart = () => {
  $("#cart").classList.add("is-open");
  $("#overlay").classList.add("is-open");
  document.body.classList.add("no-scroll");
};
const closeCart = () => {
  $("#cart").classList.remove("is-open");
  $("#overlay").classList.remove("is-open");
  document.body.classList.remove("no-scroll");
};

$("#cartBtn").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);

$("#checkoutBtn").addEventListener("click", () => {
  if (!cart.length) return;
  cart = [];
  saveCart();
  renderCart();
  closeCart();
  toast("¡Gracias por tu compra! Recibirás un correo de confirmación.");
});

/* ---------- Modal de producto ---------- */
const modal = $("#modal");

function openModal(id) {
  const p = findProduct(id);
  if (!p) return;
  let selected = 50;
  $("#modalContent").innerHTML = `
    <div class="modal__media">${bottleHTML(p)}</div>
    <div class="modal__info">
      <p class="eyebrow">${p.label}</p>
      <h3 id="modalTitle">${p.name}</h3>
      <p>${p.desc}</p>
      <dl class="pyramid">
        <div><dt>Salida</dt><dd>${p.top}</dd></div>
        <div><dt>Corazón</dt><dd>${p.heart}</dd></div>
        <div><dt>Fondo</dt><dd>${p.base}</dd></div>
      </dl>
      <div class="sizes">
        ${SIZES.map((s) => `<button class="size ${s.ml === 50 ? "is-active" : ""}" data-ml="${s.ml}">${s.ml} ml</button>`).join("")}
      </div>
      <p class="modal__price" id="modalPrice">${money(p.price)}</p>
      <button class="btn btn--primary btn--block" id="modalAdd">Añadir al carrito</button>
    </div>`;

  $$(".size", modal).forEach((btn) =>
    btn.addEventListener("click", () => {
      selected = Number(btn.dataset.ml);
      $$(".size", modal).forEach((b) => b.classList.toggle("is-active", b === btn));
      $("#modalPrice").textContent = money(priceFor(p, selected));
    })
  );
  $("#modalAdd").addEventListener("click", () => {
    addToCart(p.id, selected);
    closeModal();
  });

  modal.classList.add("is-open");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  modal.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
}

$("#modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => e.target === modal && closeModal());
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeModal(); closeCart(); closeMenu(); }
});

/* Delegación global: añadir y vista rápida */
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  const view = e.target.closest("[data-view]");
  if (add) addToCart(add.dataset.add);
  else if (view) openModal(view.dataset.view);
});

/* ---------- Quiz ---------- */
const QUIZ = [
  {
    q: "¿En qué momento lo llevarías?",
    options: [
      { icon: "☀️", text: "De día, en la oficina", tags: ["fresco", "floral"] },
      { icon: "🌙", text: "Noches y ocasiones especiales", tags: ["oriental", "amaderado"] },
      { icon: "🌿", text: "Fines de semana al aire libre", tags: ["fresco", "amaderado"] },
      { icon: "💫", text: "En cualquier momento", tags: ["floral", "amaderado"] },
    ],
  },
  {
    q: "¿Qué ambiente te inspira más?",
    options: [
      { icon: "🌊", text: "Una playa al amanecer", tags: ["fresco"] },
      { icon: "🌹", text: "Un jardín en primavera", tags: ["floral"] },
      { icon: "🔥", text: "Una chimenea encendida", tags: ["oriental", "amaderado"] },
      { icon: "🌲", text: "Un bosque tras la lluvia", tags: ["amaderado"] },
    ],
  },
  {
    q: "¿Cómo describirías tu estilo?",
    options: [
      { icon: "🤍", text: "Minimalista y natural", tags: ["fresco"] },
      { icon: "🌸", text: "Romántico y delicado", tags: ["floral"] },
      { icon: "🖤", text: "Audaz y misterioso", tags: ["oriental"] },
      { icon: "🎩", text: "Clásico y elegante", tags: ["amaderado"] },
    ],
  },
];

const PICK = { amaderado: "noir-absolu", floral: "rose-eternelle", oriental: "ambre-sacre", fresco: "brise-marine" };
let quizStep = 0;
let scores = {};

function renderQuiz() {
  const body = $("#quizBody");
  $("#quizBar").style.width = `${(quizStep / QUIZ.length) * 100}%`;

  if (quizStep < QUIZ.length) {
    const s = QUIZ[quizStep];
    body.innerHTML = `
      <p class="quiz__step">Pregunta ${quizStep + 1} de ${QUIZ.length}</p>
      <h3 class="quiz__q">${s.q}</h3>
      <div class="quiz__options">
        ${s.options.map((o, i) => `<button class="quiz__opt" data-opt="${i}"><b>${o.icon}</b>${o.text}</button>`).join("")}
      </div>`;
    return;
  }

  const family = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const p = findProduct(PICK[family]);
  body.innerHTML = `
    <div class="quiz__result">
      <p class="quiz__step">Tu fragancia ideal</p>
      <h3 class="quiz__q">${p.name}</h3>
      ${bottleHTML(p)}
      <p>${p.desc}</p>
      <div class="btns">
        <button class="btn btn--primary" data-add="${p.id}">Añadir — ${money(p.price)}</button>
        <button class="btn btn--ghost" id="quizRestart">Repetir test</button>
      </div>
    </div>`;
}

$("#quizBody").addEventListener("click", (e) => {
  const opt = e.target.closest("[data-opt]");
  if (opt) {
    QUIZ[quizStep].options[opt.dataset.opt].tags.forEach((t) => (scores[t] = (scores[t] || 0) + 1));
    quizStep++;
    renderQuiz();
  } else if (e.target.id === "quizRestart") {
    quizStep = 0;
    scores = {};
    renderQuiz();
  }
});

/* ---------- Newsletter ---------- */
$("#newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = $("#email").value.trim();
  const msg = $("#formMsg");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg.textContent = "Por favor, introduce un correo electrónico válido.";
    msg.className = "form-msg err";
    return;
  }
  msg.textContent = "¡Bienvenida/o al Círculo TOXI! Revisa tu correo para obtener tu 10% de descuento.";
  msg.className = "form-msg ok";
  e.target.reset();
});

/* ---------- Menú móvil ---------- */
const nav = $("#nav");
const menuToggle = $("#menuToggle");
function closeMenu() {
  nav.classList.remove("is-open");
  menuToggle.classList.remove("is-open");
}
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open");
});
$$("a", nav).forEach((a) => a.addEventListener("click", closeMenu));

/* ---------- Header con scroll ---------- */
const header = $("#header");
window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 10), { passive: true });

/* ---------- Animaciones al hacer scroll ---------- */
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      $$("[data-count]", entry.target).forEach(animateCount);
      io.unobserve(entry.target);
    }),
  { threshold: 0.15 }
);
$$(".reveal").forEach((el) => io.observe(el));

function animateCount(el) {
  const target = Number(el.dataset.count);
  const start = performance.now();
  const dur = 1600;
  const tick = (now) => {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- Toast ---------- */
let toastTimer;
function toast(text) {
  const t = $("#toast");
  t.textContent = text;
  t.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-visible"), 2600);
}

/* ---------- Inicio ---------- */
$("#year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
renderQuiz();
