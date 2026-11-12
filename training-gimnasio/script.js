/* =========================================================
   TRAINING GIMNASIO — Catálogo de maquinaria
   ---------------------------------------------------------
   PARA CARGAR O CAMBIAR UN PRECIO: buscá el equipo por su
   código y escribí el número en "precio" (sin puntos).
   Ejemplo:  precio: 1850000
   Si "precio" es null, la página muestra "Consultar precio".
   ========================================================= */

const MONEDA = { simbolo: "$", locale: "es-AR" };

const PRODUCTOS = [
  // ---------- CARDIO ----------
  { codigo: "TG-01", nombre: "Cinta de correr profesional", categoria: "cardio", icono: "cinta",
    descripcion: "Motor AC de uso continuo, ideal para gimnasios con alto tránsito.",
    specs: ["Motor 4 HP AC", "0–22 km/h", "Inclinación 15%", "Usuario 180 kg"], precio: null },
  { codigo: "TG-02", nombre: "Bicicleta de spinning", categoria: "cardio", icono: "spinning",
    descripcion: "Volante de inercia pesado y resistencia magnética regulable.",
    specs: ["Volante 20 kg", "Freno magnético", "Usuario 150 kg"], precio: null },
  { codigo: "TG-03", nombre: "Bicicleta fija vertical", categoria: "cardio", icono: "bici",
    descripcion: "Consola con programas de entrenamiento y medición de pulso.",
    specs: ["16 niveles", "Monitor LCD", "Usuario 150 kg"], precio: null },
  { codigo: "TG-04", nombre: "Elíptico profesional", categoria: "cardio", icono: "eliptico",
    descripcion: "Movimiento natural de bajo impacto con zancada amplia.",
    specs: ["Zancada 50 cm", "20 niveles", "Usuario 160 kg"], precio: null },
  { codigo: "TG-05", nombre: "Remo de aire", categoria: "cardio", icono: "remo",
    descripcion: "Resistencia por aire, trabajo de cuerpo completo.",
    specs: ["10 niveles", "Monitor de rendimiento", "Plegable"], precio: null },
  { codigo: "TG-06", nombre: "Escaladora", categoria: "cardio", icono: "escaladora",
    descripcion: "Escalera rotativa de alta intensidad para piernas y glúteos.",
    specs: ["Velocidad variable", "Pasamanos", "Usuario 160 kg"], precio: null },

  // ---------- MUSCULACIÓN ----------
  { codigo: "TG-07", nombre: "Prensa 45°", categoria: "musculacion", icono: "prensa",
    descripcion: "Estructura reforzada con carro sobre rodamientos lineales.",
    specs: ["Carga con discos", "Respaldo regulable", "Capacidad 500 kg"], precio: null },
  { codigo: "TG-08", nombre: "Máquina Smith", categoria: "musculacion", icono: "smith",
    descripcion: "Barra guiada con seguros, para sentadillas, press y más.",
    specs: ["Guías lineales", "Trabas de seguridad", "Barra contrapesada"], precio: null },
  { codigo: "TG-09", nombre: "Poleas cruzadas (crossover)", categoria: "musculacion", icono: "crossover",
    descripcion: "Dos torres de polea con altura regulable y barra de dominadas.",
    specs: ["2 x 90 kg de placas", "Poleas regulables", "Barra dominadas"], precio: null },
  { codigo: "TG-10", nombre: "Dorsalera / polea al pecho", categoria: "musculacion", icono: "dorsalera",
    descripcion: "Jalón al pecho y remo bajo en una sola estación.",
    specs: ["Pila 100 kg", "Asiento regulable", "Rodilleras"], precio: null },
  { codigo: "TG-11", nombre: "Sillón de cuádriceps", categoria: "musculacion", icono: "cuadriceps",
    descripcion: "Extensión de piernas con rango de movimiento ajustable.",
    specs: ["Pila 80 kg", "Respaldo regulable", "Tapizado reforzado"], precio: null },
  { codigo: "TG-12", nombre: "Camilla de femorales", categoria: "musculacion", icono: "femorales",
    descripcion: "Curl femoral acostado con apoyo ergonómico.",
    specs: ["Pila 80 kg", "Rodillo regulable", "Agarres laterales"], precio: null },
  { codigo: "TG-13", nombre: "Peck deck / pectoral", categoria: "musculacion", icono: "peck",
    descripcion: "Aperturas de pecho y deltoides posterior en la misma máquina.",
    specs: ["Pila 90 kg", "Doble función", "Brazos regulables"], precio: null },
  { codigo: "TG-14", nombre: "Hack squat", categoria: "musculacion", icono: "hack",
    descripcion: "Sentadilla guiada con hombreras acolchadas y plataforma amplia.",
    specs: ["Carga con discos", "Plataforma antideslizante", "Trabas de seguridad"], precio: null },
  { codigo: "TG-15", nombre: "Multiestación 4 puestos", categoria: "musculacion", icono: "multigym",
    descripcion: "Varias estaciones de trabajo en un solo equipo compacto.",
    specs: ["4 puestos", "2 pilas de 100 kg", "Uso simultáneo"], precio: null },
  { codigo: "TG-16", nombre: "Power rack / jaula", categoria: "musculacion", icono: "rack",
    descripcion: "Jaula de potencia con barras de seguridad y soportes J.",
    specs: ["Caño 75x75 mm", "Barra dominadas", "Capacidad 600 kg"], precio: null },

  // ---------- BANCOS ----------
  { codigo: "TG-17", nombre: "Banco press plano olímpico", categoria: "bancos", icono: "bancoPress",
    descripcion: "Banco con soportes para barra olímpica y estructura pesada.",
    specs: ["Soportes regulables", "Capacidad 350 kg"], precio: null },
  { codigo: "TG-18", nombre: "Banco regulable", categoria: "bancos", icono: "banco",
    descripcion: "Respaldo de 7 posiciones, de declinado a vertical.",
    specs: ["7 posiciones", "Ruedas de traslado", "Capacidad 300 kg"], precio: null },
  { codigo: "TG-19", nombre: "Banco Scott", categoria: "bancos", icono: "scott",
    descripcion: "Banco para curl de bíceps con apoyo de brazos inclinado.",
    specs: ["Asiento regulable", "Soporte de barra"], precio: null },

  // ---------- PESO LIBRE ----------
  { codigo: "TG-20", nombre: "Juego de mancuernas hexagonales", categoria: "peso-libre", icono: "mancuerna",
    descripcion: "Mancuernas engomadas de 2,5 a 30 kg, no ruedan.",
    specs: ["2,5 a 30 kg", "Engomadas", "Mango cromado"], precio: null },
  { codigo: "TG-21", nombre: "Rack para mancuernas", categoria: "peso-libre", icono: "rackMancuernas",
    descripcion: "Soporte de dos niveles para ordenar el juego completo.",
    specs: ["2 niveles", "10 pares"], precio: null },
  { codigo: "TG-22", nombre: "Barra olímpica 20 kg", categoria: "peso-libre", icono: "barra",
    descripcion: "Barra de 2,20 m con rodamientos y moleteado profesional.",
    specs: ["2,20 m", "Rodamientos", "Soporta 680 kg"], precio: null },
  { codigo: "TG-23", nombre: "Discos olímpicos bumper (kg)", categoria: "peso-libre", icono: "disco",
    descripcion: "Discos de goma de alta densidad, precio por kilo.",
    specs: ["5 a 25 kg", "Agujero 50 mm", "Goma maciza"], precio: null },
  { codigo: "TG-24", nombre: "Kettlebells", categoria: "peso-libre", icono: "kettlebell",
    descripcion: "Pesas rusas de fundición con recubrimiento vinílico.",
    specs: ["4 a 32 kg", "Base plana"], precio: null },

  // ---------- ACCESORIOS ----------
  { codigo: "TG-25", nombre: "Piso de caucho (m²)", categoria: "accesorios", icono: "piso",
    descripcion: "Baldosas de caucho de alto tránsito, precio por m².",
    specs: ["Espesor 20 mm", "Antideslizante", "Amortigua impactos"], precio: null },
  { codigo: "TG-26", nombre: "Kit funcional", categoria: "accesorios", icono: "funcional",
    descripcion: "Bandas, sogas de batalla, colchonetas y cajón pliométrico.",
    specs: ["Soga 15 m", "Cajón 3 alturas", "Bandas x5"], precio: null },
];

const CATEGORIAS = [
  { id: "todos", nombre: "Todos" },
  { id: "cardio", nombre: "Cardio" },
  { id: "musculacion", nombre: "Musculación" },
  { id: "bancos", nombre: "Bancos" },
  { id: "peso-libre", nombre: "Peso libre" },
  { id: "accesorios", nombre: "Accesorios" },
];

/* Ilustraciones simples de cada equipo (viewBox 120 x 90) */
const ICONOS = {
  cinta: `<path d="M14 70 L96 62"/><path d="M14 76 L100 68"/><path d="M96 62 L86 20 L100 16"/><rect class="accent" x="96" y="10" width="14" height="9" rx="2"/><circle cx="20" cy="74" r="4"/><circle cx="96" cy="66" r="4"/>`,
  spinning: `<circle cx="34" cy="62" r="16"/><circle class="fill" cx="34" cy="62" r="4"/><path d="M34 62 L58 60 L50 30"/><path d="M42 26 L58 26"/><path d="M58 60 L82 30 L94 26"/><path d="M20 82 L50 82"/><path d="M60 82 L90 82"/><path d="M58 60 L72 82"/>`,
  bici: `<path d="M30 82 L90 82"/><path d="M50 82 L46 30 L62 30"/><path d="M46 52 L82 46 L86 20 L96 18"/><circle class="accent" cx="62" cy="62" r="10"/><path d="M80 82 L82 46"/>`,
  eliptico: `<ellipse class="accent" cx="36" cy="64" rx="18" ry="12"/><path d="M18 82 L104 82"/><path d="M36 64 L90 70"/><path d="M84 82 L86 22"/><path d="M78 22 L94 22"/><path d="M60 50 L76 20"/>`,
  remo: `<path d="M10 74 L110 74"/><circle class="accent" cx="24" cy="56" r="14"/><path d="M38 56 L96 66"/><rect x="66" y="58" width="16" height="8" rx="2"/><path d="M24 74 L24 70 M100 74 L100 66"/>`,
  escaladora: `<path d="M30 84 L30 20 L90 20 L90 84"/><path class="accent" d="M42 76 L54 76 L54 66 L66 66 L66 56 L78 56 L78 46"/><path d="M30 34 L18 34 M90 34 L102 34"/>`,
  prensa: `<path d="M12 80 L108 80"/><path d="M20 80 L80 22"/><path d="M34 80 L94 22"/><rect x="60" y="34" width="20" height="16" rx="2" transform="rotate(-45 70 42)"/><circle class="accent" cx="56" cy="50" r="9"/><path d="M22 62 L40 62 L48 52"/>`,
  smith: `<path d="M24 84 L24 10 M96 84 L96 10 M24 10 L96 10"/><path class="accent" d="M10 44 L110 44"/><rect class="fill" x="12" y="36" width="6" height="16"/><rect class="fill" x="102" y="36" width="6" height="16"/><path d="M14 84 L34 84 M86 84 L106 84"/>`,
  crossover: `<rect x="10" y="10" width="20" height="74"/><rect x="90" y="10" width="20" height="74"/><path d="M30 12 L90 12"/><path class="accent" d="M30 30 L56 54 M90 30 L64 54"/><rect class="fill" x="14" y="56" width="12" height="20"/><rect class="fill" x="94" y="56" width="12" height="20"/>`,
  dorsalera: `<path d="M80 84 L80 10 L40 10"/><path class="accent" d="M22 18 L58 18"/><path d="M40 10 L40 18"/><rect x="84" y="40" width="14" height="40"/><path d="M40 84 L40 62 L62 62"/><path d="M34 52 L54 52"/><path d="M30 84 L90 84"/>`,
  cuadriceps: `<path d="M30 82 L30 50 L68 50"/><path d="M30 50 L30 22"/><path d="M68 50 L84 72"/><circle class="accent" cx="86" cy="74" r="6"/><rect x="92" y="30" width="14" height="46"/><path d="M20 82 L100 82"/>`,
  femorales: `<path d="M14 50 L84 44"/><path d="M84 44 L100 30"/><circle class="accent" cx="100" cy="28" r="6"/><path d="M30 82 L30 49 M74 82 L74 45"/><path d="M20 82 L84 82"/><path d="M14 50 L14 40"/>`,
  peck: `<path d="M60 84 L60 50"/><rect x="50" y="20" width="20" height="30" rx="3"/><path class="accent" d="M50 26 L22 34 L22 60 M70 26 L98 34 L98 60"/><rect x="50" y="52" width="20" height="8"/><path d="M40 84 L80 84"/>`,
  hack: `<path d="M16 82 L104 82"/><path d="M28 82 L76 14 M44 82 L92 14"/><rect class="accent" x="58" y="30" width="24" height="12" rx="2" transform="rotate(-55 70 36)"/><path d="M84 82 L84 60 L100 60"/>`,
  multigym: `<path d="M20 84 L20 12 L100 12 L100 84"/><rect class="fill" x="54" y="30" width="12" height="36"/><path d="M60 12 L60 30"/><path d="M20 44 L40 44 L40 84 M100 44 L80 44 L80 84"/><path class="accent" d="M8 24 L32 24 M88 24 L112 24"/>`,
  rack: `<path d="M22 84 L22 10 M48 84 L48 10 M72 84 L72 10 M98 84 L98 10"/><path d="M22 10 L98 10"/><path class="accent" d="M8 38 L112 38"/><circle class="fill" cx="12" cy="38" r="5"/><circle class="fill" cx="108" cy="38" r="5"/><path d="M22 60 L48 60 M72 60 L98 60"/>`,
  bancoPress: `<path d="M18 60 L84 60"/><path d="M28 60 L28 82 M76 60 L76 82"/><path d="M90 82 L90 28 M104 82 L104 28"/><path class="accent" d="M70 30 L118 30"/><path d="M84 82 L110 82"/>`,
  banco: `<path d="M16 62 L60 62 L94 26"/><path d="M28 62 L22 82 M54 62 L60 82"/><path d="M60 62 L84 82"/><circle class="accent" cx="22" cy="82" r="3"/><path d="M14 82 L90 82"/>`,
  scott: `<path class="accent" d="M50 30 L86 46"/><path d="M68 38 L68 84"/><path d="M30 60 L54 60 L54 84"/><path d="M24 84 L84 84"/><path d="M40 20 L100 20"/>`,
  mancuerna: `<rect class="fill" x="12" y="28" width="16" height="34" rx="2"/><rect class="fill" x="92" y="28" width="16" height="34" rx="2"/><path d="M28 45 L92 45"/><path d="M28 34 L28 56 M92 34 L92 56"/>`,
  rackMancuernas: `<path d="M18 84 L30 20 M102 84 L90 20"/><path d="M26 40 L94 40 M20 66 L100 66"/><g class="accent"><circle cx="38" cy="34" r="5"/><circle cx="54" cy="34" r="5"/><circle cx="70" cy="34" r="5"/><circle cx="86" cy="34" r="5"/><circle cx="34" cy="60" r="5"/><circle cx="52" cy="60" r="5"/><circle cx="70" cy="60" r="5"/><circle cx="88" cy="60" r="5"/></g>`,
  barra: `<path d="M6 45 L114 45"/><rect class="fill" x="18" y="22" width="8" height="46" rx="2"/><rect class="fill" x="94" y="22" width="8" height="46" rx="2"/><path d="M30 38 L30 52 M90 38 L90 52"/>`,
  disco: `<circle cx="60" cy="45" r="36"/><circle class="accent" cx="60" cy="45" r="26"/><circle cx="60" cy="45" r="6"/>`,
  kettlebell: `<path d="M44 38 C40 12 80 12 76 38"/><circle cx="60" cy="58" r="24"/><path class="accent" d="M48 82 L72 82"/>`,
  piso: `<path d="M10 60 L50 40 L110 50 L70 74 Z"/><path d="M30 50 L90 62 M30 67 L80 45"/><path class="accent" d="M10 60 L10 66 L70 80 L110 56 L110 50"/>`,
  funcional: `<rect x="62" y="44" width="40" height="38"/><path class="accent" d="M10 70 C22 40 34 90 46 60 S58 40 58 40"/><path d="M14 28 L52 28"/><circle cx="14" cy="28" r="4"/><circle cx="52" cy="28" r="4"/>`,
};

/* ---------------- Utilidades ---------------- */
const $ = (sel) => document.querySelector(sel);
const nombreCategoria = (id) => (CATEGORIAS.find((c) => c.id === id) || {}).nombre || id;
const formatoPrecio = (n) => `${MONEDA.simbolo} ${Number(n).toLocaleString(MONEDA.locale)}`;
const tienePrecio = (p) => typeof p.precio === "number" && !Number.isNaN(p.precio);
const escapar = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let filtroActivo = "todos";
let busqueda = "";

/* ---------------- Render ---------------- */
function renderFiltros() {
  $("#filters").innerHTML = CATEGORIAS.map((c) =>
    `<button class="filter${c.id === filtroActivo ? " active" : ""}" data-cat="${c.id}" role="tab" aria-selected="${c.id === filtroActivo}">${c.nombre}</button>`
  ).join("");
}

function precioHTML(p) {
  return tienePrecio(p)
    ? `<span class="price">${formatoPrecio(p.precio)}</span>`
    : `<span class="price--pending">Consultar precio</span>`;
}

function renderGrid() {
  const q = busqueda.trim().toLowerCase();
  const lista = PRODUCTOS.filter((p) =>
    (filtroActivo === "todos" || p.categoria === filtroActivo) &&
    (!q || `${p.codigo} ${p.nombre} ${p.descripcion}`.toLowerCase().includes(q))
  );

  $("#grid").innerHTML = lista.map((p, i) => `
    <article class="card" style="animation-delay:${Math.min(i, 12) * 40}ms">
      <div class="card__media">
        <span class="card__code">${p.codigo}</span>
        <span class="card__cat">${nombreCategoria(p.categoria)}</span>
        <svg viewBox="0 0 120 90" aria-hidden="true">${ICONOS[p.icono] || ""}</svg>
      </div>
      <div class="card__body">
        <h3 class="card__title">${escapar(p.nombre)}</h3>
        <p class="card__desc">${escapar(p.descripcion)}</p>
        <ul class="card__specs">${p.specs.map((s) => `<li>${escapar(s)}</li>`).join("")}</ul>
        <div class="card__foot">
          ${precioHTML(p)}
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
      <td>${escapar(p.nombre)}</td>
      <td>${nombreCategoria(p.categoria)}</td>
      <td class="right">${tienePrecio(p) ? formatoPrecio(p.precio) : "Consultar"}</td>
    </tr>`).join("");
}

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

// "Consultar" agrega el código del equipo al formulario de contacto
$("#grid").addEventListener("click", (e) => {
  const btn = e.target.closest(".card__btn");
  if (!btn) return;
  const msg = $("#mensaje");
  const codigos = msg.value.split(/[,\s]+/).filter(Boolean);
  if (!codigos.includes(btn.dataset.codigo)) {
    msg.value = msg.value.trim() ? `${msg.value.trim()}, ${btn.dataset.codigo}` : btn.dataset.codigo;
  }
  $("#contacto").scrollIntoView({ behavior: "smooth" });
});

$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const msg = $("#formMsg");
  const campos = [form.nombre, form.contacto];
  let ok = true;
  campos.forEach((c) => {
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
