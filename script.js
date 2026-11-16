/* =========================================================
   CONSTRUIRTE — Interacciones
   ========================================================= */

const AJUSTE_PRECIO = 0.8;

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const money = (n) => "$" + n.toLocaleString("es-AR", { maximumFractionDigits: 0 });
const precio = (p) => Math.round(p.precio * AJUSTE_PRECIO);
const findProduct = (id) => PRODUCTS.find((p) => p.id === id);
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const media = (p) =>
  p.imagen
    ? `<img src="${esc(p.imagen)}" alt="${esc(p.nombre)}" loading="lazy" />`
    : `<div class="placeholder"><img src="logo.svg" alt="" /></div>`;

/* ---------- Catálogo ---------- */
let filtro = "Todos";
let busqueda = "";

function renderFilters() {
  const cats = ["Todos", ...new Set(PRODUCTS.map((p) => p.categoria).filter(Boolean))];
  $("#filters").innerHTML = cats
    .map((c) => {
      const n = c === "Todos" ? PRODUCTS.length : PRODUCTS.filter((p) => p.categoria === c).length;
      return `<li><button class="filter ${c === filtro ? "is-active" : ""}" data-cat="${esc(c)}">${esc(c)} <span>${n}</span></button></li>`;
    })
    .join("");
}

function renderProducts() {
  const q = busqueda.trim().toLowerCase();
  const list = PRODUCTS.filter(
    (p) =>
      (filtro === "Todos" || p.categoria === filtro) &&
      (!q || `${p.nombre} ${p.descripcion}`.toLowerCase().includes(q))
  );
  $("#results").textContent = PRODUCTS.length
    ? `${list.length} producto${list.length === 1 ? "" : "s"}`
    : "";
  if (!list.length) {
    $("#products").innerHTML = `<p class="empty">${PRODUCTS.length ? "No hay productos que coincidan con la búsqueda." : "Catálogo en preparación."}</p>`;
    return;
  }
  $("#products").innerHTML = list
    .map(
      (p) => `
    <article class="product">
      <button class="product__media" data-view="${esc(p.id)}" aria-label="Ver ${esc(p.nombre)}">${media(p)}</button>
      <div class="product__info">
        ${p.categoria ? `<p class="product__cat">${esc(p.categoria)}</p>` : ""}
        <h3 class="product__name">${esc(p.nombre)}</h3>
        ${p.presentacion ? `<p class="product__pres">${esc(p.presentacion)}</p>` : ""}
        <p class="product__desc">${esc(p.descripcion)}</p>
        <div class="product__row">
          <span class="product__price">${money(precio(p))}</span>
          <button class="btn btn--sm" data-add="${esc(p.id)}">Agregar</button>
        </div>
      </div>
    </article>`
    )
    .join("");
}

$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest("[data-cat]");
  if (!b) return;
  filtro = b.dataset.cat;
  renderFilters();
  renderProducts();
});
$("#search").addEventListener("input", (e) => {
  busqueda = e.target.value;
  renderProducts();
});

/* ---------- Detalle ---------- */
function openModal(id) {
  const p = findProduct(id);
  if (!p) return;
  $("#modalBody").innerHTML = `
    <button class="close" data-close aria-label="Cerrar">&times;</button>
    <div class="modal__media">${media(p)}</div>
    <div class="modal__info">
      ${p.categoria ? `<p class="product__cat">${esc(p.categoria)}</p>` : ""}
      <h2>${esc(p.nombre)}</h2>
      ${p.presentacion ? `<p class="product__pres">${esc(p.presentacion)}</p>` : ""}
      <p>${esc(p.descripcion)}</p>
      <p class="product__price product__price--lg">${money(precio(p))}</p>
      <button class="btn" data-add="${esc(p.id)}" data-close>Agregar al pedido</button>
    </div>`;
  $("#modal").hidden = false;
}
const closeModal = () => ($("#modal").hidden = true);

/* ---------- Carrito ---------- */
const KEY = "construirte-cart";
let cart = [];
try { cart = JSON.parse(localStorage.getItem(KEY) || "[]").filter((i) => findProduct(i.id)); } catch { cart = []; }
const saveCart = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch {} };

function addToCart(id) {
  const p = findProduct(id);
  if (!p) return;
  const it = cart.find((i) => i.id === id);
  it ? it.qty++ : cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  toast(`${p.nombre} agregado al pedido`);
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + precio(findProduct(i.id)) * i.qty, 0);
  $("#cartCount").textContent = count;
  $("#cartTotal").textContent = money(total);
  $("#checkoutBtn").disabled = !count;
  $("#cartItems").innerHTML = cart.length
    ? cart
        .map((i, idx) => {
          const p = findProduct(i.id);
          return `<div class="cart-item">
            <div><h4>${esc(p.nombre)}</h4><small>${money(precio(p))} c/u</small>
              <div class="qty"><button data-qty="-1" data-idx="${idx}" aria-label="Restar">−</button><span>${i.qty}</span><button data-qty="1" data-idx="${idx}" aria-label="Sumar">+</button></div>
            </div>
            <div class="cart-item__right"><strong>${money(precio(p) * i.qty)}</strong><button class="link" data-remove="${idx}">Quitar</button></div>
          </div>`;
        })
        .join("")
    : `<p class="empty">Tu pedido está vacío.</p>`;
}

const openCart = () => { $("#cart").classList.add("is-open"); $("#cart").setAttribute("aria-hidden", "false"); $("#overlay").hidden = false; };
const closeCart = () => { $("#cart").classList.remove("is-open"); $("#cart").setAttribute("aria-hidden", "true"); $("#overlay").hidden = true; };

$("#cartBtn").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);
$("#cartItems").addEventListener("click", (e) => {
  const q = e.target.closest("[data-qty]");
  const r = e.target.closest("[data-remove]");
  if (q) {
    const it = cart[+q.dataset.idx];
    it.qty += +q.dataset.qty;
    if (it.qty < 1) cart.splice(+q.dataset.idx, 1);
  } else if (r) cart.splice(+r.dataset.remove, 1);
  else return;
  saveCart();
  renderCart();
});
$("#checkoutBtn").addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
  closeCart();
  toast("¡Gracias! Recibimos tu pedido.");
});

/* ---------- Eventos globales ---------- */
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) addToCart(add.dataset.add);
  const view = e.target.closest("[data-view]");
  if (view) openModal(view.dataset.view);
  if (e.target.closest("[data-close]")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeModal(); closeCart(); }
});

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-visible"), 2200);
}

$("#year").textContent = new Date().getFullYear();
renderFilters();
renderProducts();
renderCart();
