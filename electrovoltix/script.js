/* Electro Voltix — catálogo, filtros, búsqueda y carrito */

const CATEGORIES = [
  { id: "iluminacion", name: "Iluminación LED", icon: "💡" },
  { id: "cables", name: "Cables y conductores", icon: "🔌" },
  { id: "proteccion", name: "Térmicas y protección", icon: "🛡️" },
  { id: "herramientas", name: "Herramientas", icon: "🛠️" },
  { id: "electronica", name: "Electrónica", icon: "🔋" },
  { id: "tomas", name: "Tomas y llaves", icon: "🎛️" },
];

const PRODUCTS = [
  { id: 1, cat: "iluminacion", name: "Lámpara LED 12W E27 luz fría", price: 1880, icon: "💡" },
  { id: 2, cat: "iluminacion", name: "Panel LED embutir 18W cuadrado", price: 7480, icon: "⬜" },
  { id: 3, cat: "iluminacion", name: "Reflector LED 100W IP65 exterior", price: 21380, icon: "🔦" },
  { id: 4, cat: "iluminacion", name: "Tira LED 5 m 12V con fuente", price: 12280, icon: "✨" },
  { id: 5, cat: "cables", name: "Cable unipolar 2,5 mm² rollo 100 m", price: 44520, icon: "🧵" },
  { id: 6, cat: "cables", name: "Cable taller 2x1,5 mm² por metro", price: 940, icon: "🔌" },
  { id: 7, cat: "cables", name: "Zapatilla 5 tomas con llave 3 m", price: 9680, icon: "🔌" },
  { id: 8, cat: "proteccion", name: "Térmica bipolar 2x20A", price: 6370, icon: "🛡️" },
  { id: 9, cat: "proteccion", name: "Disyuntor diferencial 2x40A 30mA", price: 25940, icon: "⚡" },
  { id: 10, cat: "proteccion", name: "Tablero embutir 12 módulos", price: 10860, icon: "🗄️" },
  { id: 11, cat: "herramientas", name: "Multímetro digital profesional", price: 15920, icon: "📟" },
  { id: 12, cat: "herramientas", name: "Pinza universal aislada 1000V", price: 8320, icon: "🛠️" },
  { id: 13, cat: "herramientas", name: "Soldador tipo lápiz 60W", price: 6440, icon: "🔥" },
  { id: 14, cat: "electronica", name: "Fuente switching 12V 10A", price: 14240, icon: "🔋" },
  { id: 15, cat: "electronica", name: "Pack pilas AA alcalinas x4", price: 2990, icon: "🔋" },
  { id: 16, cat: "electronica", name: "Sensor de movimiento PIR 360°", price: 7280, icon: "📡" },
  { id: 17, cat: "tomas", name: "Módulo toma doble 10A blanco", price: 2080, icon: "🎛️" },
  { id: 18, cat: "tomas", name: "Llave de luz punto simple", price: 1690, icon: "🎚️" },
  { id: 19, cat: "tomas", name: "Toma USB doble 2,1A embutir", price: 8710, icon: "🔌" },
  { id: 20, cat: "tomas", name: "Bastidor 10x5 con tapa", price: 1240, icon: "⬛" },
];

const FEES = 6;

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const money = (n) => "$" + Math.round(n).toLocaleString("es-AR");
const catName = (id) => CATEGORIES.find((c) => c.id === id)?.name ?? "";
const findProduct = (id) => PRODUCTS.find((p) => p.id === id);

let currentFilter = "todos";
let query = "";

/* Categorías */
$("#cats").innerHTML = CATEGORIES.map((c) => `
  <a href="#productos" class="cat reveal" data-jump="${c.id}">
    <div class="cat__icon">${c.icon}</div>
    <strong>${c.name}</strong>
  </a>`).join("");

/* Filtros */
$("#filters").innerHTML = [{ id: "todos", name: "Todos" }, ...CATEGORIES]
  .map((c) => `<button class="filter${c.id === "todos" ? " is-active" : ""}" data-filter="${c.id}">${c.name}</button>`)
  .join("");

function setFilter(id) {
  currentFilter = id;
  $$(".filter").forEach((b) => b.classList.toggle("is-active", b.dataset.filter === id));
  renderProducts();
}

$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".filter");
  if (b) setFilter(b.dataset.filter);
});

document.addEventListener("click", (e) => {
  const j = e.target.closest("[data-jump]");
  if (j) { query = ""; $("#searchInput").value = ""; setFilter(j.dataset.jump); }
});

/* Búsqueda */
const normalize = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
$("#searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  query = normalize($("#searchInput").value.trim());
  setFilter("todos");
  $("#productos").scrollIntoView({ behavior: "smooth" });
});
$("#searchInput").addEventListener("input", (e) => {
  query = normalize(e.target.value.trim());
  renderProducts();
});

/* Productos */
function renderProducts() {
  const list = PRODUCTS.filter((p) =>
    (currentFilter === "todos" || p.cat === currentFilter) &&
    (!query || normalize(p.name + " " + catName(p.cat)).includes(query)));
  $("#emptyMsg").hidden = list.length > 0;
  $("#products").innerHTML = list.map((p) => {
    return `
    <article class="product">
      <div class="product__img">
        ${p.icon}
      </div>
      <div class="product__body">
        <span class="product__cat">${catName(p.cat)}</span>
        <h3 class="product__name">${p.name}</h3>
        <span class="product__price">${money(p.price)}</span>
        <span class="product__fees">${FEES} cuotas sin interés de ${money(p.price / FEES)}</span>
        <span class="spacer"></span>
        <button class="btn btn--primary" data-add="${p.id}">Agregar al carrito</button>
      </div>
    </article>`;
  }).join("");
}

/* Carrito */
let cart = [];
try { cart = JSON.parse(localStorage.getItem("ev-cart")) || []; } catch { cart = []; }
cart = cart.filter((i) => findProduct(i.id));
const saveCart = () => { try { localStorage.setItem("ev-cart", JSON.stringify(cart)); } catch {} };

function addToCart(id) {
  const item = cart.find((i) => i.id === id);
  item ? item.qty++ : cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  const badge = $("#cartCount");
  badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump");
  toast(`Agregado: ${findProduct(id).name}`);
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + findProduct(i.id).price * i.qty, 0);
  $("#cartCount").textContent = count;
  $("#cartTotal").textContent = money(total);
  $("#cartItems").innerHTML = cart.length ? cart.map((i, idx) => {
    const p = findProduct(i.id);
    return `
    <div class="cart-item">
      <div class="cart-item__img">${p.icon}</div>
      <div>
        <div class="cart-item__name">${p.name}</div>
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

document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-add]");
  if (a) addToCart(Number(a.dataset.add));
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

/* Menú móvil */
$("#menuToggle").addEventListener("click", () => $("#nav").classList.toggle("is-open"));
$$("#nav a").forEach((a) => a.addEventListener("click", () => $("#nav").classList.remove("is-open")));

/* Toast */
let toastTimer;
function toast(text) {
  const t = $("#toast");
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

/* Animaciones al hacer scroll */
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
}), { threshold: 0.12 });
$$(".reveal").forEach((el) => io.observe(el));

$("#year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
