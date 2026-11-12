/* =========================================================
   TRAINING GIMNASIO — Catálogo de maquinaria
   ---------------------------------------------------------
   PARA CAMBIAR UN PRECIO: buscá el producto por su código y
   escribí el número en "precio" (sin puntos ni signo $).
   Si "precio" es null, la página muestra "Consultar precio".
   PARA AGREGAR UN PRODUCTO: copiá un bloque { ... } completo,
   cambiale el código y guardá sus fotos en la carpeta img/.
   ========================================================= */

const MONEDA = { simbolo: "$", locale: "es-AR" };

const PRODUCTOS = [
  {
    codigo: "TG-01",
    marca: "Randers",
    nombre: "Bicicleta de spinning ARG-845SP",
    categoria: "spinning",
    precio: 227000,
    condicion: "Al contado",
    etiqueta: "35% OFF · Super oferta",
    resumen: "Bicicleta de spinning con cuadro de acero rojo, volante de inercia protegido y monitor digital. Ideal para entrenar en casa.",
    descripcion: "La Randers ARG-845SP es una bicicleta de spinning con estructura de acero y un diseño en rojo y negro. El volante de inercia va protegido por una carcasa, la resistencia se ajusta con una perilla central y el manubrio deportivo tiene un monitor digital para seguir el entrenamiento y un soporte para el celular. El asiento acolchado y el manubrio se regulan para adaptarse a cada usuario.",
    specs: [
      "Marca Randers, modelo ARG-845SP",
      "Estructura de acero",
      "Monitor digital",
      "Perilla para regular la resistencia",
      "Asiento acolchado regulable en altura y distancia",
      "Manubrio deportivo regulable en altura",
      "Soporte para celular o tablet",
      "Pedales con correas de sujeción",
      "Patas con regatones antideslizantes",
    ],
    fotos: ["img/randers-845sp-1.jpg", "img/randers-845sp-2.jpg", "img/randers-845sp-promo.jpg"],
  },
  {
    codigo: "TG-02",
    marca: "Enerfit",
    nombre: "Bicicleta de spinning indoor",
    categoria: "spinning",
    precio: 420000,
    condicion: "De contado",
    etiqueta: "Apto para gym",
    resumen: "Bicicleta de spinning indoor apta para gimnasio, con transmisión cubierta y ruedas para trasladarla. En negro o blanco.",
    descripcion: "La Enerfit Spinning Indoor es una bicicleta apta para uso en gimnasio. Tiene una estructura robusta con la transmisión cubierta, volante de inercia expuesto con terminación cromada y una perilla de resistencia en el centro del cuadro. El asiento y el manubrio se regulan con perillas, y las ruedas delanteras permiten moverla con facilidad. Disponible en color negro y en color blanco.",
    specs: [
      "Marca Enerfit",
      "Apta para uso en gimnasio",
      "Colores: negro o blanco",
      "Transmisión cubierta",
      "Perilla para regular la resistencia",
      "Asiento regulable en altura y distancia",
      "Manubrio deportivo regulable",
      "Pedales con correas de sujeción",
      "Ruedas para trasladarla y patas niveladoras",
    ],
    fotos: ["img/enerfit-spinning-negra.jpg", "img/enerfit-spinning-blanca.jpg", "img/enerfit-spinning-promo.jpg"],
  },
  {
    codigo: "TG-03",
    marca: "Randers",
    nombre: "Simulador de remo",
    categoria: "remo",
    precio: 895750,
    condicion: null,
    etiqueta: "Solo 10 unidades",
    resumen: "Remo con resistencia magnética y 8 niveles de entrenamiento. Plegable y con ruedas para guardarlo fácil.",
    descripcion: "El simulador de remo Randers trabaja piernas, espalda, brazos y abdomen en un solo movimiento. Tiene estructura de acero, resistencia magnética silenciosa con 8 niveles de entrenamiento y un monitor que muestra tiempo, distancia, paladas por minuto, calorías y paladas totales. Es plegable y tiene ruedas, así que se guarda en poco espacio.",
    specs: [
      "Marca Randers",
      "8 niveles de entrenamiento",
      "Material: acero",
      "Mecanismo de resistencia magnético",
      "Monitor: tiempo, distancia, paladas por minuto, calorías y paladas totales",
      "Plegable",
      "Con ruedas",
      "Peso máximo del usuario: 120 kg",
      "Apto para usuarios de hasta 190 cm de altura",
    ],
    fotos: ["img/randers-remo-1.jpg", "img/randers-remo-2.jpg", "img/randers-remo-promo.jpg"],
  },
  {
    codigo: "TG-04",
    marca: "Assault",
    nombre: "Airbike Classic Pro",
    categoria: "airbike",
    precio: 3750000,
    condicion: null,
    etiqueta: "Stock disponible",
    resumen: "Bicicleta de aire con resistencia progresiva: cuanto más rápido pedaleás, más carga. Trabaja brazos y piernas a la vez.",
    descripcion: "La Assault Airbike Classic Pro usa un ventilador de palas como sistema de carga: la resistencia aumenta con la velocidad del ejercicio, así que cada usuario regula la intensidad con su propio esfuerzo. Los brazos móviles permiten entrenar miembros superiores, inferiores o ambos a la vez. Es un equipo clásico de entrenamiento funcional y de alta intensidad, con estructura de acero y transmisión a cadena.",
    specs: [
      "Sistema de transmisión: cadena",
      "Carga progresiva por resistencia al aire (a mayor velocidad, mayor carga)",
      "Entrenamiento de miembros superiores, inferiores o ambos a la vez",
      "Pantalla interactiva con funciones sencillas",
      "Asiento anatómico regulable en altura y distancia",
      "Capacidad máxima de uso: 130 kg",
      "Dimensiones: 120 x 66 x 128 cm (largo x ancho x alto)",
      "Peso: 50 kg",
      "Estructura de acero",
    ],
    fotos: ["img/airbike-assault-1.jpg", "img/airbike-assault-2.jpg", "img/airbike-assault-promo.jpg"],
  },
  {
    codigo: "TG-05",
    marca: "Randers",
    nombre: "Rack multifunción ARG 154",
    categoria: "fuerza",
    precio: 275000,
    condicion: null,
    etiqueta: "Stock disponible",
    resumen: "Espaldar de pared con barra de dominadas, estación de fondos, banco inclinable y banda elástica. Un gimnasio completo en poco espacio.",
    descripcion: "El rack Randers ARG 154 se amura a la pared y reúne varias estaciones en un solo equipo: barra de dominadas con agarres acolchados, estación de fondos y elevación de piernas con apoyabrazos y respaldo, escalera tipo espaldar y un banco inclinable reforzado con terminaciones en cuero ecológico. Incluye una banda elástica con manijas para sumar ejercicios.",
    specs: [
      "Medidas: 1,4 m de largo x 1 m de ancho x 2,2 m de alto",
      "Peso máximo del usuario: 120 kg",
      "Barra de dominadas con agarres acolchados",
      "Estación de fondos y elevación de piernas con respaldo",
      "Banco inclinable reforzado, terminaciones en cuero ecológico",
      "Banda elástica con manijas (114 cm)",
      "Incluye 2 llaves de ajuste y 12 tornillos de expansión",
      "Peso del producto: 37 kg",
      "Bulto: 1,24 x 0,46 x 0,18 m · 38 kg",
    ],
    fotos: ["img/rack-randers-154-1.jpg", "img/rack-randers-154-2.jpg", "img/rack-randers-154-promo.jpg"],
  },
];

const CATEGORIAS = [
  { id: "todos", nombre: "Todos" },
  { id: "spinning", nombre: "Bicicletas de spinning" },
  { id: "remo", nombre: "Remo" },
  { id: "airbike", nombre: "Airbike" },
  { id: "fuerza", nombre: "Fuerza" },
];

/* ---------------- Utilidades ---------------- */
const $ = (sel) => document.querySelector(sel);
const nombreCategoria = (id) => (CATEGORIAS.find((c) => c.id === id) || {}).nombre || id;
const formatoPrecio = (n) => `${MONEDA.simbolo} ${Number(n).toLocaleString(MONEDA.locale)}`;
const tienePrecio = (p) => typeof p.precio === "number" && !Number.isNaN(p.precio);
const escapar = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const buscarProducto = (codigo) => PRODUCTOS.find((p) => p.codigo === codigo);

let filtroActivo = "todos";
let busqueda = "";

/* ---------------- Render ---------------- */
function renderFiltros() {
  const usadas = new Set(PRODUCTOS.map((p) => p.categoria));
  $("#filters").innerHTML = CATEGORIAS.filter((c) => c.id === "todos" || usadas.has(c.id)).map((c) =>
    `<button class="filter${c.id === filtroActivo ? " active" : ""}" data-cat="${c.id}" role="tab" aria-selected="${c.id === filtroActivo}">${c.nombre}</button>`
  ).join("");
}

function precioHTML(p) {
  if (!tienePrecio(p)) return `<span class="price--pending">Consultar precio</span>`;
  return `<span class="price-box"><span class="price">${formatoPrecio(p.precio)}</span>${p.condicion ? `<small>${escapar(p.condicion)}</small>` : ""}</span>`;
}

function renderGrid() {
  const q = busqueda.trim().toLowerCase();
  const lista = PRODUCTOS.filter((p) =>
    (filtroActivo === "todos" || p.categoria === filtroActivo) &&
    (!q || `${p.codigo} ${p.marca} ${p.nombre} ${p.resumen}`.toLowerCase().includes(q))
  );

  $("#grid").innerHTML = lista.map((p, i) => `
    <article class="card" style="animation-delay:${Math.min(i, 12) * 60}ms">
      <button class="card__media" data-detalle="${p.codigo}" aria-label="Ver detalle de ${escapar(p.nombre)}">
        <span class="card__code">${p.codigo}</span>
        ${p.etiqueta ? `<span class="card__tag">${escapar(p.etiqueta)}</span>` : ""}
        <img src="${p.fotos[0]}" alt="${escapar(p.marca + " " + p.nombre)}" loading="lazy" />
      </button>
      <div class="card__body">
        <p class="card__brand">${escapar(p.marca)} · ${nombreCategoria(p.categoria)}</p>
        <h3 class="card__title">${escapar(p.nombre)}</h3>
        <p class="card__desc">${escapar(p.resumen)}</p>
        <div class="card__foot">
          ${precioHTML(p)}
        </div>
        <div class="card__actions">
          <button class="btn btn--red btn--sm" data-detalle="${p.codigo}">Ver detalle</button>
          <button class="card__btn" data-codigo="${p.codigo}">Consultar</button>
        </div>
      </div>
    </article>`).join("");

  $("#empty").hidden = lista.length > 0;
}

function renderTabla() {
  $("#priceTable").innerHTML = PRODUCTOS.map((p) => `
    <tr>
      <td>${p.codigo}</td>
      <td>${escapar(p.marca)} ${escapar(p.nombre)}</td>
      <td>${nombreCategoria(p.categoria)}</td>
      <td class="right">${tienePrecio(p) ? formatoPrecio(p.precio) + (p.condicion ? ` <small>${escapar(p.condicion.toLowerCase())}</small>` : "") : "Consultar"}</td>
    </tr>`).join("");
}

/* ---------------- Detalle (ventana) ---------------- */
function abrirDetalle(codigo) {
  const p = buscarProducto(codigo);
  if (!p) return;
  $("#modalBody").innerHTML = `
    <div class="detail__gallery">
      <div class="detail__main"><img id="detailMain" src="${p.fotos[0]}" alt="${escapar(p.marca + " " + p.nombre)}" /></div>
      <div class="detail__thumbs">
        ${p.fotos.map((f, i) => `<button class="detail__thumb${i === 0 ? " active" : ""}" data-foto="${f}"><img src="${f}" alt="Foto ${i + 1}" /></button>`).join("")}
      </div>
    </div>
    <div class="detail__info">
      <p class="card__brand">${p.codigo} · ${escapar(p.marca)} · ${nombreCategoria(p.categoria)}</p>
      <h2 id="modalTitle" class="detail__title">${escapar(p.nombre)}</h2>
      ${p.etiqueta ? `<span class="detail__tag">${escapar(p.etiqueta)}</span>` : ""}
      <div class="detail__price">${precioHTML(p)}</div>
      <p class="detail__desc">${escapar(p.descripcion)}</p>
      <h3 class="detail__sub">Características</h3>
      <ul class="detail__specs">${p.specs.map((s) => `<li>${escapar(s)}</li>`).join("")}</ul>
      <button class="btn btn--red" data-codigo="${p.codigo}">Consultar por este producto</button>
    </div>`;
  $("#modal").hidden = false;
  document.body.style.overflow = "hidden";
  $("#modalClose").focus();
}

function cerrarDetalle() {
  $("#modal").hidden = true;
  document.body.style.overflow = "";
}

$("#modal").addEventListener("click", (e) => {
  if (e.target.id === "modal" || e.target.closest("#modalClose")) return cerrarDetalle();
  const thumb = e.target.closest(".detail__thumb");
  if (thumb) {
    $("#detailMain").src = thumb.dataset.foto;
    document.querySelectorAll(".detail__thumb").forEach((t) => t.classList.toggle("active", t === thumb));
  }
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#modal").hidden) cerrarDetalle(); });

/* ---------------- Eventos ---------------- */
$("#filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  filtroActivo = btn.dataset.cat;
  renderFiltros();
  renderGrid();
});

$("#search").addEventListener("input", (e) => {
  busqueda = e.target.value;
  renderGrid();
});

// "Consultar" agrega el producto al formulario de contacto; "Ver detalle" abre la ventana
document.addEventListener("click", (e) => {
  const det = e.target.closest("[data-detalle]");
  if (det) return abrirDetalle(det.dataset.detalle);
  const btn = e.target.closest("[data-codigo]");
  if (!btn) return;
  const p = buscarProducto(btn.dataset.codigo);
  const linea = `${p.codigo} ${p.marca} ${p.nombre}`;
  const msg = $("#mensaje");
  if (!msg.value.includes(p.codigo)) msg.value = msg.value.trim() ? `${msg.value.trim()}\n${linea}` : linea;
  if (!$("#modal").hidden) cerrarDetalle();
  $("#contacto").scrollIntoView({ behavior: "smooth" });
});

$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const msg = $("#formMsg");
  let ok = true;
  [form.nombre, form.contacto].forEach((c) => {
    const vacio = !c.value.trim();
    c.classList.toggle("invalid", vacio);
    if (vacio) ok = false;
  });
  if (!ok) {
    msg.textContent = "Completá tu nombre y un teléfono o email.";
    msg.classList.add("error");
    return;
  }
  msg.textContent = `¡Gracias ${form.nombre.value.trim()}! Te contactamos a la brevedad.`;
  msg.classList.remove("error");
  form.reset();
});

$("#menuToggle").addEventListener("click", () => $("#nav").classList.toggle("open"));
$("#nav").addEventListener("click", (e) => { if (e.target.tagName === "A") $("#nav").classList.remove("open"); });
window.addEventListener("scroll", () => $("#header").classList.toggle("scrolled", window.scrollY > 10), { passive: true });

/* ---------------- Inicio ---------------- */
$("#year").textContent = new Date().getFullYear();
$("#statCount").textContent = PRODUCTOS.length;
renderFiltros();
renderGrid();
renderTabla();
