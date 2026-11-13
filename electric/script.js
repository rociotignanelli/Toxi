/* =========================================================
   TOXI Electric — Interacciones
   ========================================================= */

const PRODUCTS = [];

/* ---------- Moto Eléctrica Infantil Turbo Sport Duo 12V (Biemme) ---------- */
const TURBO_IMG = "img/turbo-sport-duo/";
const TURBO_VIEWS = [
  ["", "Vista completa"],
  ["-frente", "Frente y ópticas LED"],
  ["-rueda", "Rueda delantera con luz"],
  ["-asiento", "Asiento y manubrio"],
  ["-pedal", "Pedal y rueditas de apoyo"],
  ["-motor", "Detalle de motor"],
];

const turboSportDuo = (slug, colorName, colorAdj, hex, photoBg = "#fff") => ({
  id: `turbo-sport-duo-${slug}`,
  name: `Turbo Sport Duo ${colorAdj}`,
  fullName: `Moto Eléctrica Infantil Turbo Sport Duo 12V – Biemme ${colorAdj}`,
  type: "moto", label: "Moto eléctrica infantil", kids: true,
  price: 350000, originalPrice: 500000, badge: "30% OFF",
  color: hex,
  photoBg,
  images: [
    ...TURBO_VIEWS.map(([suffix, alt]) => ({ src: `${TURBO_IMG}${slug}${suffix}.jpg`, alt })),
    { src: `${TURBO_IMG}promo.jpg`, alt: "Promoción 30% de descuento" },
  ],
  quickSpecs: [["12 V", "batería"], ["30 kg", "peso máx."], ["Pedal", "acelerador"]],
  tagline: "¡La emoción de manejar una moto deportiva, ahora para los más chicos!",
  description: [
    "La Moto Eléctrica Turbo Sport Duo de Biemme combina potencia, diseño y diversión en un vehículo pensado para que los pequeños disfruten de sus primeras aventuras sobre ruedas.",
    `Inspirada en las motos deportivas de competición, se destaca por su imponente color ${colorName}, sus líneas aerodinámicas y sus detalles realistas que le aportan un estilo moderno y llamativo.`,
    "Equipada con una batería recargable de 12V, ofrece un andar dinámico y entretenido, ideal para disfrutar de paseos y momentos de diversión al aire libre.",
    "Su sistema de aceleración mediante pedal permite un manejo sencillo e intuitivo: solo hay que presionar el pedal para avanzar y soltarlo para detenerse.",
  ],
  features: [
    ["Motor de 12V", "proporciona la potencia necesaria para disfrutar de una experiencia de conducción divertida y dinámica."],
    ["Aceleración a pedal", "sistema práctico y fácil de utilizar, diseñado para que los chicos puedan controlar la moto cómodamente."],
    ["Diseño deportivo y realista", "estética inspirada en motos de alta cilindrada, con detalles de motor, escape y una carrocería de estilo aerodinámico."],
    ["Estructura estable", "diseñada para favorecer el equilibrio y brindar mayor seguridad durante el uso."],
    ["Materiales resistentes", "fabricada con plásticos de alta durabilidad, preparados para acompañar las aventuras y los juegos al aire libre."],
  ],
  techSpecs: [
    ["Marca", "Biemme"],
    ["Modelo", "Turbo Sport Duo"],
    ["Artículo", "2404"],
    ["Color", colorName[0].toUpperCase() + colorName.slice(1)],
    ["Batería", "Recargable de 12V"],
    ["Cargador", "Incluido"],
    ["Sistema de conducción", "Aceleración a pedal"],
    ["Diseño", "Deportivo / Estilo pista"],
    ["Peso máximo soportado", "30 kg"],
  ],
  closingTitle: "¡Diversión, estilo y aventura en una sola moto!",
  closing: "La Turbo Sport Duo es una excelente opción para regalar y sorprender a los pequeños amantes de las motos. Su diseño deportivo y su fácil manejo la convierten en una gran compañera para disfrutar de nuevas aventuras sobre ruedas.",
});

PRODUCTS.push(
  turboSportDuo("rosa", "rosa", "Rosa", "#ff3fa4"),
  turboSportDuo("azul", "azul", "Azul", "#3d6bff"),
  turboSportDuo("negra", "negro", "Negra", "#8a96a8", "#f6f6f6"),
);

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const money = (n) => "$" + Math.round(n).toLocaleString("es-AR");
const findProduct = (id) => PRODUCTS.find((p) => p.id === id);
const INSTALLMENTS = 12;

/* ---------- Ilustraciones SVG ---------- */
const wheel = (cx, cy, r) => `
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#0b0f14" stroke="#2a323d" stroke-width="4"/>
  <circle cx="${cx}" cy="${cy}" r="${r * 0.55}" fill="none" stroke="#3a4452" stroke-width="2"/>
  <circle cx="${cx}" cy="${cy}" r="${r * 0.22}" fill="var(--accent)"/>`;

const scooterSVG = (color) => `
  <svg class="vehicle" viewBox="0 0 220 140" style="--accent:${color}" aria-hidden="true">
    <ellipse cx="112" cy="134" rx="90" ry="4" fill="rgba(0,0,0,.35)"/>
    <path d="M22 108 A24 24 0 0 1 66 96" fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
    <rect x="44" y="98" width="122" height="11" rx="5.5" fill="${color}"/>
    <rect x="62" y="100" width="70" height="4" rx="2" fill="rgba(0,0,0,.25)"/>
    <path d="M160 104 L178 112" stroke="#2a323d" stroke-width="7" stroke-linecap="round"/>
    <path d="M166 106 L148 20" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
    <path d="M132 20 L162 20" stroke="#d6dde6" stroke-width="6" stroke-linecap="round"/>
    <circle cx="157" cy="58" r="4" fill="#fff8c4"/>
    ${wheel(44, 112, 20)}
    ${wheel(180, 112, 20)}
  </svg>`;

const motoSVG = (color) => `
  <svg class="vehicle" viewBox="0 0 220 140" style="--accent:${color}" aria-hidden="true">
    <ellipse cx="112" cy="134" rx="96" ry="4" fill="rgba(0,0,0,.35)"/>
    <path d="M44 106 L98 92" stroke="#2a323d" stroke-width="7" stroke-linecap="round"/>
    <path d="M178 106 L160 50" stroke="#9aa6b4" stroke-width="6" stroke-linecap="round"/>
    <path d="M52 92 Q58 66 88 62 L150 58 Q166 60 168 80 L160 98 L92 100 Z" fill="${color}"/>
    <rect x="96" y="72" width="50" height="22" rx="4" fill="#141a22"/>
    <path d="M104 83 h10 l-4 6 h8" stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M66 62 Q96 46 136 52 L134 60 L70 66 Z" fill="#141a22"/>
    <path d="M152 40 L170 34" stroke="#d6dde6" stroke-width="6" stroke-linecap="round"/>
    <path d="M160 40 L164 56" stroke="#9aa6b4" stroke-width="5" stroke-linecap="round"/>
    <circle cx="172" cy="56" r="6" fill="#fff8c4"/>
    <path d="M150 104 A30 30 0 0 1 204 96" fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
    ${wheel(44, 106, 26)}
    ${wheel(178, 106, 26)}
  </svg>`;

const vehicleSVG = (p) => (p.type === "moto" ? motoSVG(p.color) : scooterSVG(p.color));
/* Foto real si el producto la tiene; si no, la ilustración */
const vehicleVisual = (p, cls = "") =>
  p.images ? `<img class="photo ${cls}" style="--photo-bg:${p.photoBg || "#fff"}" src="${p.images[0].src}" alt="${p.fullName || p.name}" loading="lazy" />` : vehicleSVG(p);

const priceHTML = (p, long = false) => `
  <div class="card__price">
    ${p.originalPrice ? `<s class="price-old">${money(p.originalPrice)}</s>` : ""}
    <strong>${money(p.price)}</strong>
    ${p.originalPrice ? `<em class="price-save">Ahorrás ${money(p.originalPrice - p.price)}</em>` : ""}
    <span>${INSTALLMENTS} cuotas ${long ? "sin interés " : ""}de ${money(p.price / INSTALLMENTS)}</span>
  </div>`;

const quickSpecs = (p) =>
  p.quickSpecs || [[p.speed, "km/h"], [p.range, "km"], [p.power, "W"]];

const promoHTML = (p) =>
  p.originalPrice
    ? `<div class="promo">
        <span class="promo__tag">${Math.round((1 - p.price / p.originalPrice) * 100)}% DESCUENTO</span>
        <div class="promo__row">
          <div><small>Precio original</small><s>${money(p.originalPrice)}</s></div>
          <div><small>Ahorrás</small><b>${money(p.originalPrice - p.price)}</b></div>
          <div class="promo__final"><small>Precio final</small><strong>${money(p.price)}</strong></div>
        </div>
      </div>`
    : "";

/* ---------- Toast ---------- */
const toastEl = $("#toast");
let toastTimer;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 2600);
}

/* ---------- Catálogo ---------- */
const productsEl = $("#products");
let currentFilter = "todos";
let currentSort = "destacados";

function sortedList() {
  let list = currentFilter === "todos" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.type === currentFilter);
  const sorters = {
    "precio-asc": (a, b) => a.price - b.price,
    "precio-desc": (a, b) => b.price - a.price,
    autonomia: (a, b) => (b.range ?? -1) - (a.range ?? -1),
    velocidad: (a, b) => (b.speed ?? -1) - (a.speed ?? -1),
  };
  if (sorters[currentSort]) list.sort(sorters[currentSort]);
  return list;
}

function renderProducts() {
  productsEl.innerHTML = sortedList()
    .map(
      (p, i) => `
      <article class="card reveal is-visible" style="--accent:${p.color};--photo-bg:${p.photoBg || "#fff"};animation-delay:${i * 60}ms">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
        <button class="card__visual ${p.images ? "card__visual--photo" : ""}" data-view="${p.id}" aria-label="Ver detalles de ${p.name}">
          ${vehicleVisual(p)}
        </button>
        <div class="card__body">
          <p class="card__type">${p.label}</p>
          <h3>${p.name}</h3>
          <ul class="specs">
            ${quickSpecs(p).map(([v, u]) => `<li><strong>${v}</strong> ${u}</li>`).join("")}
          </ul>
          ${priceHTML(p)}
          <div class="card__actions">
            <button class="btn btn--primary btn--sm" data-add="${p.id}">Agregar</button>
            <button class="btn btn--ghost btn--sm" data-view="${p.id}">Ver más</button>
          </div>
        </div>
      </article>`
    )
    .join("");
}

function setFilter(filter) {
  currentFilter = filter;
  $$(".filter").forEach((b) => b.classList.toggle("is-active", b.dataset.filter === filter));
  renderProducts();
}

/* ---------- Modal ---------- */
const modal = $("#modal");
const modalContent = $("#modalContent");
const overlay = $("#overlay");

function openModal(html) {
  modalContent.innerHTML = html;
  modal.classList.add("is-open");
  document.body.classList.add("no-scroll");
  $("#modalClose").focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  if (!cart.classList.contains("is-open")) document.body.classList.remove("no-scroll");
}

function openListing(p) {
  openModal(`
    <article class="listing" style="--accent:${p.color};--photo-bg:${p.photoBg}">
      <div class="gallery">
        <div class="gallery__main"><img id="galleryMain" src="${p.images[0].src}" alt="${p.images[0].alt}" /></div>
        <div class="gallery__thumbs">
          ${p.images
            .map(
              (img, i) => `<button class="gallery__thumb ${i === 0 ? "is-active" : ""}" data-img="${img.src}" data-alt="${img.alt}" aria-label="${img.alt}">
                <img src="${img.src}" alt="" loading="lazy" /></button>`
            )
            .join("")}
        </div>
      </div>
      <div class="listing__info">
        <p class="card__type">${p.label}</p>
        <h3 id="modalTitle">${p.fullName}</h3>
        ${promoHTML(p)}
        <p class="listing__cuotas">${INSTALLMENTS} cuotas sin interés de ${money(p.price / INSTALLMENTS)} · Envío gratis</p>
        <div class="card__actions">
          <button class="btn btn--primary" data-add="${p.id}" data-close>Agregar al carrito</button>
        </div>
        <div class="listing__text">
          <p class="listing__tagline">${p.tagline}</p>
          ${p.description.map((t) => `<p>${t}</p>`).join("")}
          <h4>¿Qué hace especial a la Turbo Sport Duo?</h4>
          <ul class="listing__features">
            ${p.features.map(([t, d]) => `<li><strong>${t}:</strong> ${d}</li>`).join("")}
          </ul>
          <h4>Características técnicas</h4>
          <dl class="detail__specs">
            ${p.techSpecs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
          </dl>
          <h4>${p.closingTitle}</h4>
          <p>${p.closing}</p>
        </div>
      </div>
    </article>`);
}

function openProduct(id) {
  const p = findProduct(id);
  if (!p) return;
  if (p.images) return openListing(p);
  openModal(`
    <div class="detail" style="--accent:${p.color}">
      <div class="detail__visual">${vehicleSVG(p)}</div>
      <div class="detail__info">
        <p class="card__type">${p.label}</p>
        <h3 id="modalTitle">${p.name}</h3>
        <p class="detail__desc">${p.desc}</p>
        <dl class="detail__specs">
          <div><dt>Velocidad máx.</dt><dd>${p.speed} km/h</dd></div>
          <div><dt>Autonomía</dt><dd>${p.range} km</dd></div>
          <div><dt>Potencia</dt><dd>${p.power} W</dd></div>
          <div><dt>Batería</dt><dd>${p.battery}</dd></div>
          <div><dt>Tiempo de carga</dt><dd>${p.charge} h</dd></div>
          <div><dt>Peso</dt><dd>${p.weight} kg</dd></div>
          <div><dt>Rodado</dt><dd>${p.wheel}</dd></div>
          <div><dt>Garantía</dt><dd>2 años</dd></div>
        </dl>
        ${priceHTML(p, true)}
        <div class="card__actions">
          <button class="btn btn--primary" data-add="${p.id}" data-close>Agregar al carrito</button>
          <a class="btn btn--ghost" href="#prueba" data-book="${p.id}">Probarlo gratis</a>
        </div>
      </div>
    </div>`);
}

$("#modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
  const thumb = e.target.closest("[data-img]");
  if (thumb) {
    const main = $("#galleryMain");
    main.src = thumb.dataset.img;
    main.alt = thumb.dataset.alt;
    $$(".gallery__thumb", modal).forEach((t) => t.classList.toggle("is-active", t === thumb));
  }
  const book = e.target.closest("[data-book]");
  if (book) {
    $("#bookingModel").value = book.dataset.book;
    closeModal();
  }
});

/* ---------- Carrito ---------- */
const cart = $("#cart");
const STORAGE_KEY = "toxi-electric-cart";

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved.filter((i) => findProduct(i.id) && i.qty > 0) : [];
  } catch {
    return [];
  }
}

let cartItems = loadCart();

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  } catch {
    /* almacenamiento no disponible: el carrito funciona igual en esta sesión */
  }
}

function renderCart() {
  const count = cartItems.reduce((s, i) => s + i.qty, 0);
  const total = cartItems.reduce((s, i) => s + findProduct(i.id).price * i.qty, 0);
  $("#cartCount").textContent = count;
  $("#cartCount").classList.toggle("is-visible", count > 0);
  $("#cartTotal").textContent = money(total);
  $("#cartInstallments").textContent = total
    ? `Envío gratis · ${INSTALLMENTS} cuotas sin interés de ${money(total / INSTALLMENTS)}`
    : "Envío gratis · Hasta 12 cuotas sin interés.";
  $("#checkoutBtn").disabled = count === 0;

  $("#cartItems").innerHTML = cartItems.length
    ? cartItems
        .map((i) => {
          const p = findProduct(i.id);
          return `
          <div class="cart-item" style="--accent:${p.color}">
            <div class="cart-item__visual">${vehicleVisual(p, "photo--thumb")}</div>
            <div class="cart-item__info">
              <strong>${p.name}</strong>
              <span>${p.label}</span>
              <div class="qty">
                <button data-qty="-1" data-id="${p.id}" aria-label="Quitar uno">−</button>
                <span>${i.qty}</span>
                <button data-qty="1" data-id="${p.id}" aria-label="Agregar uno">+</button>
              </div>
            </div>
            <div class="cart-item__side">
              <strong>${money(p.price * i.qty)}</strong>
              <button class="link" data-remove="${p.id}">Eliminar</button>
            </div>
          </div>`;
        })
        .join("")
    : `<div class="cart__empty"><p>Tu carrito está vacío.</p><a href="#catalogo" class="btn btn--ghost btn--sm" data-close-cart>Ver catálogo</a></div>`;
}

function addToCart(id) {
  const p = findProduct(id);
  if (!p) return;
  const item = cartItems.find((i) => i.id === id);
  item ? item.qty++ : cartItems.push({ id, qty: 1 });
  saveCart();
  renderCart();
  toast(`${p.name} agregado al carrito`);
}

function changeQty(id, delta) {
  const item = cartItems.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cartItems = cartItems.filter((i) => i.id !== id);
  saveCart();
  renderCart();
}

function openCart() {
  cart.classList.add("is-open");
  overlay.classList.add("is-open");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  cart.classList.remove("is-open");
  overlay.classList.remove("is-open");
  if (!modal.classList.contains("is-open")) document.body.classList.remove("no-scroll");
}

$("#cartBtn").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

$("#cartItems").addEventListener("click", (e) => {
  const q = e.target.closest("[data-qty]");
  if (q) changeQty(q.dataset.id, Number(q.dataset.qty));
  const r = e.target.closest("[data-remove]");
  if (r) changeQty(r.dataset.remove, -Infinity);
  if (e.target.closest("[data-close-cart]")) closeCart();
});

$("#checkoutBtn").addEventListener("click", () => {
  if (!cartItems.length) return;
  cartItems = [];
  saveCart();
  renderCart();
  closeCart();
  toast("¡Gracias por tu compra! Te enviamos los detalles por correo.");
});

/* ---------- Clicks globales (agregar / ver / comparar) ---------- */
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) {
    addToCart(add.dataset.add);
    if (add.hasAttribute("data-close")) closeModal();
  }
  const view = e.target.closest("[data-view]");
  if (view) openProduct(view.dataset.view);
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (modal.classList.contains("is-open")) closeModal();
  else if (cart.classList.contains("is-open")) closeCart();
});

/* ---------- Turno para visitar el showroom ---------- */
const bookingForm = $("#bookingForm");
const bookingModel = $("#bookingModel");
const bookingDate = $("#bookingDate");

bookingModel.innerHTML =
  `<option value="">Elegí un color</option>` +
  PRODUCTS.map((p) => `<option value="${p.id}">${p.name}</option>`).join("");

const toISODate = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
bookingDate.min = toISODate(tomorrow);

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = $("#bookingMsg");
  const data = Object.fromEntries(new FormData(bookingForm));
  $$(".field input, .field select", bookingForm).forEach((el) => el.classList.remove("is-invalid"));

  const errors = [];
  const mark = (name) => bookingForm.elements[name].classList.add("is-invalid");
  if (data.name.trim().length < 3) { errors.push("tu nombre"); mark("name"); }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) { errors.push("un correo válido"); mark("email"); }
  if (data.phone.replace(/\D/g, "").length < 8) { errors.push("un teléfono válido"); mark("phone"); }
  if (!data.model) { errors.push("un color"); mark("model"); }
  if (!data.date || data.date < bookingDate.min) { errors.push("una fecha a partir de mañana"); mark("date"); }

  if (errors.length) {
    msg.className = "form-msg is-error";
    msg.textContent = `Revisá: ${errors.join(", ")}.`;
    return;
  }

  const p = findProduct(data.model);
  const date = new Date(data.date + "T12:00:00").toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" }).replace(",", "");
  msg.className = "form-msg is-ok";
  msg.textContent = `¡Listo, ${data.name.trim().split(" ")[0]}! Te esperamos el ${date} para mostrarte la ${p.name}. Te confirmamos el horario por correo.`;
  bookingForm.reset();
});

/* ---------- Newsletter ---------- */
$("#newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("#email");
  const msg = $("#formMsg");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim())) {
    msg.className = "form-msg is-error";
    msg.textContent = "Ingresá un correo electrónico válido.";
    return;
  }
  msg.className = "form-msg is-ok";
  msg.textContent = "¡Gracias! Revisá tu correo para obtener tu 5% off.";
  input.value = "";
});

/* ---------- Menú móvil y header ---------- */
const nav = $("#nav");
const menuToggle = $("#menuToggle");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

const header = $("#header");
window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 20), { passive: true });

/* ---------- Animaciones al hacer scroll ---------- */
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.12 }
);

/* ---------- Inicio ---------- */
$("#heroVisual").insertAdjacentHTML(
  "beforeend",
  PRODUCTS.map(
    (p, i) => `<button class="hero__photo hero__photo--${i + 1}" data-view="${p.id}" aria-label="Ver ${p.name}" style="--photo-bg:${p.photoBg}">
      <img src="${p.images[0].src}" alt="${p.fullName}" /></button>`
  ).join("") + `<span class="hero__badge">30% OFF</span>`
);
$("#year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
$$(".reveal").forEach((el) => observer.observe(el));
