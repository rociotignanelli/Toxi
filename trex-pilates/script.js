/* ===== Trex Pilates — Tienda ===== */

// Número de WhatsApp para recibir pedidos (formato internacional, sin + ni espacios).
const WHATSAPP = "5491100000000";

const CATEGORIES = [
  { id: "todos", name: "Todos los productos" },
  { id: "reformer", name: "Reformer Pilates" },
  { id: "cadillac", name: "Cadillac y Torres" },
  { id: "sillas", name: "Sillas y Barrels" },
  { id: "packs", name: "Packs para Estudios" },
  { id: "accesorios", name: "Accesorios de Pilates" },
];

// Cada producto toma su foto de la carpeta img/. Si "img" falta, se muestra una ilustración.
const PRODUCTS = [
  { id: 1,  img: "img/01.webp", name: "Cama Pilates Reformer Profesional – Trex Reformer", cats: ["reformer"], price: 3150000, art: "reformer" },
  { id: 2,  img: "img/02.webp", name: "Reformer Pilates con Trapecio Completo", cats: ["reformer", "cadillac"], price: 5175000, art: "torre" },
  { id: 3,  img: "img/03.webp", name: "Reformer Clínico Completo", cats: ["reformer"], price: 3375000, art: "clinico" },
  { id: 4,  img: "img/04.webp", name: "Reformer con Medio Trapecio – Cama de Pilates Profesional", cats: ["reformer", "cadillac"], price: 4275000, art: "medio" },
  { id: 5,  img: "img/05.webp", name: "Cadillac Pilates Profesional – Trapecio de Pilates", cats: ["cadillac"], price: 3675000, art: "cadillac" },
  { id: 6,  img: "img/06.webp", name: "Unidad de Pared – Wall Unit – Estructura de Acero Inoxidable", cats: ["cadillac"], price: 1650000, art: "wall" },
  { id: 7,  img: "img/07.webp", name: "Tabla de Resortes", cats: ["cadillac"], price: 517500, art: "springboard" },
  { id: 8,  img: "img/08.webp", name: "Tabla de Resortes con Barra", cats: ["cadillac"], price: 742500, art: "springboardBar" },
  { id: 9,  img: "img/09.webp", name: "Barril (Ladder Barrel)", cats: ["sillas"], price: 1125000, art: "barrel" },
  { id: 10,  img: "img/10.webp",name: "Silla (Combo Chair)", cats: ["sillas"], price: 1425000, art: "chair" },
  { id: 11,  img: "img/11.webp",name: "Pack Studio – 4 Reformers + Cadillac + Silla + Ladder Barrel", cats: ["packs"], price: 17550000, art: "packFull" },
  { id: 12,  img: "img/12.webp",name: "Pack Starter – 3 Reformers", cats: ["packs"], price: 8925000, art: "pack", n: 3 },
  { id: 13,  img: "img/13.webp",name: "Pack Studio – 4 Reformers", cats: ["packs"], price: 11775000, art: "pack", n: 4 },
  { id: 14,  img: "img/14.webp",name: "Pack Advanced – 6 Reformers", cats: ["packs"], price: 17025000, art: "pack", n: 6 },
  { id: 15,  img: "img/15.webp",name: "Pack Studio Plus – 5 Reformers", cats: ["packs"], price: 14175000, art: "pack", n: 5 },
  { id: 16,  img: "img/16.webp",name: "Pack Elite – 8 Reformers", cats: ["packs"], price: 22680000, art: "pack", n: 8 },
  { id: 17,  img: "img/17.webp",name: "Kit de Accesorios para Cama de Pilates con Sogas y Manijas", cats: ["accesorios"], price: 96750, art: "kit" },
  { id: 18,  img: "img/18.webp",name: "Kit de 8 Ruedas Siliconadas para Cama de Pilates 76 × 24 mm", cats: ["accesorios"], price: 111750, art: "wheels" },
  { id: 19,  img: "img/19.webp",name: "Correas para Reformer con Doble Loop", cats: ["accesorios"], price: 36750, art: "straps" },
  { id: 20,  img: "img/20.webp",name: "Fuzzies de Piel de Cordero Natural para Cadillac", cats: ["accesorios"], price: 120000, art: "fuzzies" },
  { id: 21,  img: "img/21.webp",name: "Juego de Resortes para Cama Pilates Reformer", cats: ["accesorios"], price: 179250, art: "springs", n: 5 },
  { id: 22,  img: "img/22.webp",name: "Juego de 6 Resortes para Medio Trapecio", cats: ["accesorios"], price: 187500, art: "springs", n: 6 },
  { id: 23,  img: "img/23.webp",name: "Juego de 12 Resortes para Trapecio Cadillac", cats: ["accesorios"], price: 292500, art: "springs", n: 8 },
  { id: 24,  img: "img/24.webp",name: "Juego de Resortes para Silla de Pilates", cats: ["accesorios"], price: 150000, art: "springs", n: 4 },
  { id: 25,  img: "img/25.webp",name: "Box para Reformer", cats: ["accesorios"], price: 112500, art: "box" },
  { id: 26,  img: "img/26.webp",name: "Arco Pilates", cats: ["accesorios"], price: 142500, art: "arc" },
  { id: 27,  img: "img/27.webp",name: "Tabla de Salto para Pilates Reformer", cats: ["accesorios"], price: 127500, art: "jump" },
  { id: 28,  img: "img/28.webp",name: "Corrector de Columna", cats: ["accesorios"], price: 240000, art: "spine" },
  { id: 29,  img: "img/29.webp",name: "Extensor de Pie para Reformer", cats: ["accesorios"], price: 90000, art: "extender" },
  { id: 30,  img: "img/30.webp",name: "Plataforma para Ladder Barrel", cats: ["accesorios"], price: 120000, art: "platform" },
];

/* ---------- Ilustraciones (línea neón) ---------- */
const coil = (x, y, len, turns = 6) => {
  const step = len / turns;
  let d = `M${x} ${y}`;
  for (let i = 0; i < turns; i++) d += ` q${step / 4} -6 ${step / 2} 0 q${step / 4} 6 ${step / 2} 0`;
  return `<path d="${d}"/>`;
};
const reformerBase = (ox = 0, oy = 0, s = 1) => `
  <g transform="translate(${ox} ${oy}) scale(${s})">
    <rect x="20" y="78" width="160" height="14" rx="4"/>
    <path d="M28 92v18M172 92v18M100 92v18"/>
    <rect x="70" y="66" width="52" height="12" rx="3" fill="rgba(0,229,255,.15)"/>
    <path d="M78 66v-10h8M114 66v-10"/>
    <path d="M30 78V52M30 52h-8"/>
    ${coil(34, 85, 34, 4)}
  </g>`;

const ART = {
  reformer: () => reformerBase(),
  clinico: () => reformerBase() + `<path d="M150 66h22M150 66v12M172 66v12"/><circle cx="160" cy="58" r="5"/>`,
  torre: () => reformerBase() + `<path d="M24 78V18h152v60M24 18l152 0M60 18v8M140 18v8M24 40h152"/>${coil(60, 30, 26, 3)}${coil(118, 30, 26, 3)}`,
  medio: () => reformerBase() + `<path d="M24 78V18h40v24M24 30h40"/>${coil(30, 46, 28, 3)}`,
  cadillac: () => `
    <rect x="22" y="76" width="156" height="14" rx="4" fill="rgba(0,229,255,.12)"/>
    <path d="M30 90v20M170 90v20M24 76V14h152v62M24 14h152M24 30h152"/>
    <path d="M70 30v22h60V30"/>${coil(36, 44, 28, 3)}${coil(140, 44, 28, 3)}`,
  wall: () => `
    <rect x="58" y="10" width="84" height="110" rx="4"/>
    <path d="M66 22h68M66 42h68"/>
    <circle cx="74" cy="60" r="3"/><circle cx="126" cy="60" r="3"/>
    <path d="M74 63v20M126 63v20"/>${coil(66, 92, 20, 2)}${coil(114, 92, 20, 2)}
    <path d="M40 120h120"/>`,
  springboard: () => `
    <rect x="60" y="10" width="80" height="112" rx="5"/>
    ${[26, 44, 62, 80, 98].map((y) => `<circle cx="74" cy="${y}" r="3"/><circle cx="126" cy="${y}" r="3"/>`).join("")}
    <path d="M74 44 50 92M126 44l24 48"/><circle cx="50" cy="96" r="4"/><circle cx="150" cy="96" r="4"/>`,
  springboardBar: () => ART.springboard() + `<path d="M66 30h68M100 30v24"/>`,
  barrel: () => `
    <path d="M30 116V20M64 116V20M30 30h34M30 46h34M30 62h34M30 78h34M30 94h34"/>
    <path d="M64 108h110M110 108V78a34 34 0 0 1 60 0v30"/>
    <path d="M80 108V78h30"/>`,
  chair: () => `
    <rect x="58" y="40" width="84" height="70" rx="6" fill="rgba(0,229,255,.1)"/>
    <rect x="54" y="30" width="92" height="12" rx="4"/>
    <path d="M58 104 30 116M30 116h40"/>
    <path d="M60 30V10M140 30V10M54 10h12M134 10h12"/>${coil(74, 92, 50, 5)}`,
  pack: (p) => {
    const n = p.n || 4;
    const rows = n <= 3 ? 1 : 2;
    const cols = Math.ceil(n / rows);
    const sc = Math.min(1.05 / cols, 0.62);
    const cellW = 200 / cols;
    const rowH = 140 / rows;
    let out = "";
    for (let k = 0; k < n; k++) {
      const r = Math.floor(k / cols), c = k % cols;
      const x = c * cellW + (cellW - 200 * sc) / 2;
      const y = r * rowH + (rowH - 140 * sc) / 2 - (rows === 1 ? 0 : 6 * sc);
      out += reformerBase(x, y, sc);
    }
    return out;
  },
  kit: () => `
    <path d="M40 30c30 40 90 40 120 0"/><path d="M40 30c-4 70 10 80 30 90M160 30c4 70-10 80-30 90"/>
    <rect x="60" y="110" width="22" height="14" rx="5"/><rect x="118" y="110" width="22" height="14" rx="5"/>
    <circle cx="40" cy="28" r="6"/><circle cx="160" cy="28" r="6"/>`,
  wheels: () =>
    [0, 1, 2, 3].map((i) => [0, 1].map((j) => `<circle cx="${40 + i * 40}" cy="${46 + j * 50}" r="16"/><circle cx="${40 + i * 40}" cy="${46 + j * 50}" r="5"/>`).join("")).join(""),
  straps: () => `
    <path d="M40 50c0-30 50-30 50 0s-50 30-50 0zM60 50c0-12 20-12 20 0"/>
    <path d="M110 50c0-30 50-30 50 0s-50 30-50 0zM130 50c0-12 20-12 20 0"/>
    <path d="M65 76v40M135 76v40"/><circle cx="65" cy="120" r="4"/><circle cx="135" cy="120" r="4"/>`,
  fuzzies: () => `
    <rect x="40" y="40" width="50" height="70" rx="20" fill="rgba(0,229,255,.12)"/>
    <rect x="110" y="40" width="50" height="70" rx="20" fill="rgba(0,229,255,.12)"/>
    <path d="M65 40V20M135 40V20M48 60h34M48 80h34M118 60h34M118 80h34"/>`,
  springs: (p) => {
    const n = p.n || 5;
    const gap = 140 / (n - 1 || 1);
    let out = "";
    for (let i = 0; i < n; i++) {
      const x = 30 + i * gap;
      out += `<g transform="rotate(90 ${x} 30)">${coil(x, 30, 80, 7)}</g><circle cx="${x}" cy="24" r="4"/><circle cx="${x}" cy="116" r="4"/>`;
    }
    return out;
  },
  box: () => `
    <path d="M30 58 100 36l70 22-70 22z" fill="rgba(0,229,255,.12)"/>
    <path d="M30 58v40l70 22 70-22V58M100 80v40"/>`,
  arc: () => `
    <path d="M24 112c0-56 36-82 76-82s76 26 76 82z" fill="rgba(0,229,255,.12)"/>
    <path d="M24 112h152M46 112c0-38 24-60 54-60s54 22 54 60"/>`,
  jump: () => `
    <rect x="40" y="16" width="120" height="96" rx="10" fill="rgba(0,229,255,.1)"/>
    <path d="M60 112v14M140 112v14M50 126h100"/>`,
  spine: () => `
    <path d="M20 112h150c0-50-20-80-60-80-30 0-40 30-40 50v30" fill="rgba(0,229,255,.12)"/>
    <path d="M20 112V90h50M40 90v22"/>`,
  extender: () => `
    <path d="M30 86 110 60h60l-80 26z" fill="rgba(0,229,255,.12)"/>
    <path d="M30 86v14h60v-14M170 60v14l-80 26"/>`,
  platform: () => `
    <path d="M30 50 110 30h60l-80 20z" fill="rgba(0,229,255,.12)"/>
    <path d="M30 50v12h60V50M170 30v12l-80 20M60 62v48M80 62v48"/>`,
};
ART.packFull = () =>
  reformerBase(0, -6, .48) + reformerBase(100, -6, .48) + reformerBase(0, 44, .48) + reformerBase(100, 44, .48) +
  `<g transform="translate(6 92) scale(.3)">${ART.cadillac()}</g>` +
  `<g transform="translate(72 92) scale(.3)">${ART.chair()}</g>` +
  `<g transform="translate(136 92) scale(.3)">${ART.barrel()}</g>`;

const artSVG = (p) =>
  `<svg viewBox="0 0 200 140" fill="none" stroke="#00e5ff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ART[p.art](p)}</svg>`;

const media = (p) => (p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy" />` : artSVG(p));

/* ---------- Utilidades ---------- */
const fmt = (n) => "$" + Math.round(n).toLocaleString("es-AR");
const $ = (s) => document.querySelector(s);

const storage = {
  get(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* sin almacenamiento */ }
  },
};

/* ---------- Catálogo ---------- */
const state = { cat: "todos", q: "", sort: "default" };

function renderCategories() {
  $("#catList").innerHTML = CATEGORIES.map((c) => {
    const count = c.id === "todos" ? PRODUCTS.length : PRODUCTS.filter((p) => p.cats.includes(c.id)).length;
    return `<li><button data-cat="${c.id}" class="${state.cat === c.id ? "active" : ""}">${c.name}<span>${count}</span></button></li>`;
  }).join("");
}

function renderGrid() {
  const q = state.q.trim().toLowerCase();
  let list = PRODUCTS.filter((p) => (state.cat === "todos" || p.cats.includes(state.cat)) && p.name.toLowerCase().includes(q));
  if (state.sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
  if (state.sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
  if (state.sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name, "es"));

  $("#resultCount").textContent = `${list.length} producto${list.length === 1 ? "" : "s"}`;
  $("#grid").innerHTML = list.length
    ? list.map((p) => `
      <li class="card">
        <button class="card__media${p.img ? " card__media--photo" : ""}" data-open="${p.id}" aria-label="Ver ${p.name}">${media(p)}</button>
        <div class="card__body">
          <span class="card__cat">${CATEGORIES.find((c) => c.id === p.cats[0]).name}</span>
          <h3 class="card__title"><button class="card__link" data-open="${p.id}">${p.name}</button></h3>
          <p class="card__price">${fmt(p.price)}</p>
          <button class="btn btn--ghost" data-add="${p.id}">Agregar al carrito</button>
        </div>
      </li>`).join("")
    : `<li class="empty">No encontramos productos con esa búsqueda.</li>`;
}

function setCategory(cat) {
  state.cat = cat;
  renderCategories();
  renderGrid();
}

/* ---------- Ficha de producto ---------- */
const DESC = window.DESCRIPTIONS || {};
let lastFocus = null;

function openProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  lastFocus = document.activeElement;
  const cat = CATEGORIES.find((c) => c.id === p.cats[0]).name;
  $("#pmMedia").className = "pm__media" + (p.img ? " pm__media--photo" : "");
  $("#pmMedia").innerHTML = media(p);
  $("#pmCat").textContent = cat;
  $("#pmTitle").textContent = p.name;
  $("#pmPrice").textContent = fmt(p.price);
  $("#pmAdd").dataset.add = p.id;
  $("#pmDesc").innerHTML = DESC[p.id] || "<p>Consultanos por WhatsApp para más información sobre este producto.</p>";
  $("#pm").scrollTop = 0;
  $("#pmDesc").scrollTop = 0;
  $("#pmWrap").classList.add("open");
  document.body.classList.add("no-scroll");
  $("#pmClose").focus();
}

function closeProduct() {
  if (!$("#pmWrap").classList.contains("open")) return;
  $("#pmWrap").classList.remove("open");
  document.body.classList.remove("no-scroll");
  if (lastFocus) lastFocus.focus();
}

/* ---------- Carrito ---------- */
let cart = storage.get("trex-cart", []);
if (!Array.isArray(cart)) cart = [];
cart = cart.filter((i) => PRODUCTS.some((p) => p.id === i.id) && i.qty > 0);

const saveCart = () => { storage.set("trex-cart", cart); renderCart(); };

function addToCart(id) {
  const item = cart.find((i) => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  toast("Producto agregado al carrito");
}

function renderCart() {
  const rows = cart.map((i) => ({ ...i, p: PRODUCTS.find((p) => p.id === i.id) }));
  $("#cartCount").textContent = rows.reduce((s, r) => s + r.qty, 0);
  $("#cartTotal").textContent = fmt(rows.reduce((s, r) => s + r.qty * r.p.price, 0));
  $("#cartItems").innerHTML = rows.length
    ? rows.map((r) => `
      <li class="cart-item">
        <div class="cart-item__thumb">${media(r.p)}</div>
        <div>
          <h4>${r.p.name}</h4>
          <p class="cart-item__price">${fmt(r.p.price)}</p>
          <div class="qty">
            <button data-dec="${r.id}" aria-label="Restar">−</button><span>${r.qty}</span><button data-inc="${r.id}" aria-label="Sumar">+</button>
          </div>
        </div>
        <button class="icon-btn remove" data-remove="${r.id}">Quitar</button>
      </li>`).join("")
    : `<li class="empty">Tu carrito está vacío.</li>`;
}

function openCart(open) {
  $("#cart").classList.toggle("open", open);
  $("#overlay").classList.toggle("open", open);
}

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2000);
}

/* ---------- Eventos ---------- */
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-close]")) { closeProduct(); return; }
  const el = e.target.closest("button, a");
  if (!el) return;
  if (el.dataset.cat) setCategory(el.dataset.cat);
  if (el.dataset.nav) { setCategory(el.dataset.nav); $("#nav").classList.remove("open"); }
  if (el.dataset.add) addToCart(+el.dataset.add);
  if (el.dataset.inc) { cart.find((i) => i.id === +el.dataset.inc).qty++; saveCart(); }
  if (el.dataset.dec) {
    const item = cart.find((i) => i.id === +el.dataset.dec);
    item.qty--;
    if (item.qty <= 0) cart = cart.filter((i) => i !== item);
    saveCart();
  }
  if (el.dataset.open) openProduct(+el.dataset.open);
  if (el.dataset.remove) { cart = cart.filter((i) => i.id !== +el.dataset.remove); saveCart(); }
});

$("#search").addEventListener("input", (e) => { state.q = e.target.value; renderGrid(); });
$("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderGrid(); });
$("#cartBtn").addEventListener("click", () => openCart(true));
$("#cartClose").addEventListener("click", () => openCart(false));
$("#overlay").addEventListener("click", () => openCart(false));
$("#menuToggle").addEventListener("click", () => $("#nav").classList.toggle("open"));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeProduct(); openCart(false); } });

$("#checkout").addEventListener("click", () => {
  if (!cart.length) return toast("Tu carrito está vacío");
  const lines = cart.map((i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return `• ${i.qty} x ${p.name} — ${fmt(p.price * i.qty)}`;
  });
  const total = cart.reduce((s, i) => s + i.qty * PRODUCTS.find((p) => p.id === i.id).price, 0);
  const msg = `Hola Trex Pilates! Quiero hacer este pedido:\n${lines.join("\n")}\nTotal: ${fmt(total)}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
});

// Menú transparente sobre el video de portada; se vuelve sólido al bajar
const header = document.querySelector(".header");
const syncHeader = () => header.classList.toggle("header--clear", window.scrollY < 40 && !$("#nav").classList.contains("open"));
window.addEventListener("scroll", syncHeader, { passive: true });
$("#menuToggle").addEventListener("click", syncHeader);
syncHeader();

$("#year").textContent = new Date().getFullYear();

renderCategories();
renderGrid();
renderCart();
