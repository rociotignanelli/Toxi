/* Genera avisos (flyers) de los productos de la página Training Gimnasio.
   Uso: node generar.js <carpeta-salida> [TG-01 TG-42 ...]   (sin códigos = todos)
   Toma los datos de ../training-gimnasio (script.js + productos-nuevos.js). */
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const SITE = path.resolve(__dirname, "../training-gimnasio");
const OUT = path.resolve(process.argv[2] || path.join(__dirname, "salida"));
const PEDIDOS = process.argv.slice(3);
const WHATSAPP = "+54 9 3765 53-0096";
const WEB = "traininggimnacio.netlify.app";

// ---- cargar productos desde la página ----
global.window = {};
eval(fs.readFileSync(path.join(SITE, "productos-nuevos.js"), "utf8"));
const base = fs.readFileSync(path.join(SITE, "script.js"), "utf8").split("/* Productos del proveedor")[0];
const PRODUCTOS = eval(base.slice(base.indexOf("const PRODUCTOS = ") + "const PRODUCTOS = ".length).trim().replace(/;\s*$/, ""));
PRODUCTOS.push(...window.PRODUCTOS_NUEVOS);

// Foto del producto a usar en el aviso cuando la primera no sirve
const FOTO_AVISO = { "TG-05": "img/rack-randers-154-2.jpg" };

const esOferta = (p) => Boolean(p.precioAnterior) || /off/i.test(p.etiqueta || "");
const precio = (n) => "$" + Number(n).toLocaleString("es-AR");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const font = (f) => "file://" + path.join(__dirname, f);

function caracteristicas(p) {
  return p.specs
    .filter((s) => !/^(uso|tipo de bicicleta|tipo de cinta)\s*:/i.test(s) || p.specs.length <= 4)
    .map((s) => s.replace(/\s+/g, " ").trim())
    .map((s) => (s.length > 46 ? s.slice(0, 44).replace(/[\s,;:]+\S*$/, "") + "…" : s))
    .slice(0, 5);
}

// ---- Estilo "impacto" (estados de WhatsApp): producto recortado sobre el fondo ----
const RECORTES = path.join(__dirname, "recortes");
function fotoDe(p) {
  return "file://" + path.join(SITE, FOTO_AVISO[p.codigo] || p.fotos.find((f) => !/promo|flyers\//.test(f)) || p.fotos[0]);
}
function specsCortas(p) {
  return caracteristicas(p)
    .filter((s) => !/^marca\b|^color \(hex\)/i.test(s))
    .map((s) => s.replace(/^(peso máximo del usuario|peso máximo soportado|capacidad máxima de peso)\s*:/i, "Soporta"))
    .map((s) => (s.length > 52 ? s.slice(0, 50).replace(/[\s,;:]+\S*$/, "") + "…" : s))
    .slice(0, 4);
}
function htmlImpacto(p, W, H) {
  const oferta = esOferta(p);
  const specs = specsCortas(p);
  const recorte = path.join(RECORTES, p.codigo.toLowerCase() + ".png");
  const hay = fs.existsSync(recorte);
  const nombre = p.nombre.length > 44 ? p.nombre.slice(0, 42).replace(/\s+\S*$/, "") + "…" : p.nombre;
  const largo = nombre.length > 26;
  const etiqueta = oferta ? (p.etiqueta || "Oferta").split("·")[0].trim() : "Envío gratis";
  const conPrecio = typeof p.precio === "number";
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Display; src: url("${font("oswald-latin-700-normal.ttf")}"); }
@font-face { font-family: Cond; src: url("${font("roboto-condensed-latin-700-normal.ttf")}"); }
* { margin: 0; padding: 0; box-sizing: border-box; }
body { width: ${W}px; height: ${H}px; overflow: hidden; background: #070707; color: #fff; font-family: Cond, sans-serif; position: relative; }
.bg { position: absolute; inset: 0; background:
  radial-gradient(ellipse 70% 38% at 50% 50%, rgba(255,60,30,.55), rgba(225,6,0,.25) 45%, transparent 75%),
  radial-gradient(circle at 50% 46%, rgba(255,255,255,.10), transparent 30%),
  linear-gradient(180deg, #120202 0%, #070707 30%, #070707 70%, #160303 100%); }
.lines { position: absolute; inset: 0; background: repeating-linear-gradient(-60deg, transparent 0 60px, rgba(255,255,255,.03) 60px 62px); }
.slash { position: absolute; left: -10%; width: 120%; height: 120px; background: linear-gradient(90deg, transparent, #e10600 20%, #ff3b1f 50%, #e10600 80%, transparent); transform: rotate(-12deg); opacity: .9; box-shadow: 0 0 60px rgba(255,40,0,.8); }
.slash.s1 { top: 1010px; }
.slash.s2 { top: 1150px; height: 26px; opacity: .55; }
.top { position: absolute; top: 64px; left: 60px; right: 60px; display: flex; justify-content: space-between; align-items: center; }
.logo { display: flex; align-items: center; gap: 14px; }
.mark { width: 70px; height: 70px; background: #e10600; display: grid; place-items: center; font: 700 48px Display; clip-path: polygon(0 0,100% 0,100% 75%,75% 100%,0 100%); box-shadow: 0 0 24px rgba(255,30,0,.8); }
.lt { font: 700 44px/0.9 Display; letter-spacing: 1px; }
.lt small { display: block; font: 700 16px Cond; letter-spacing: 10px; color: #ff2a12; margin-top: 4px; }
.chip { font: 700 34px Display; letter-spacing: 2px; text-transform: uppercase; padding: 10px 26px; background: ${oferta ? "#ffd400" : "#e10600"}; color: ${oferta ? "#111" : "#fff"}; transform: skewX(-10deg); box-shadow: 0 0 30px ${oferta ? "rgba(255,212,0,.6)" : "rgba(255,30,0,.7)"}; }
.head { position: absolute; top: 190px; left: 60px; right: 60px; }
.brand { font: 700 36px Display; letter-spacing: 6px; color: #ff4a2e; text-transform: uppercase; }
h1 { font: 700 ${largo ? 84 : 104}px/0.95 Display; text-transform: uppercase; margin-top: 6px; text-shadow: 0 6px 30px rgba(0,0,0,.8); }
.stage { position: absolute; left: 30px; right: 30px; top: ${largo ? 460 : 420}px; height: ${p.precioAnterior ? 720 : 760}px; display: grid; place-items: center; }
.floor { position: absolute; bottom: 30px; left: 50%; width: 760px; height: 90px; transform: translateX(-50%); background: radial-gradient(ellipse at center, rgba(0,0,0,.85), transparent 70%); }
.prod { position: relative; max-width: 960px; max-height: 720px; object-fit: contain; filter: drop-shadow(0 30px 40px rgba(0,0,0,.75)) drop-shadow(0 0 2px rgba(255,255,255,.35)); }
.frame { position: relative; width: 800px; height: 660px; background: #fff; border-radius: 22px; overflow: hidden; transform: rotate(-3deg); box-shadow: 0 0 0 8px #e10600, 0 0 70px rgba(255,30,0,.75), 0 40px 60px rgba(0,0,0,.7); }
.frame img { width: 100%; height: 100%; object-fit: contain; padding: 26px; }
.specs { position: absolute; left: 60px; right: 60px; top: ${p.precioAnterior ? 1196 : 1236}px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.spec { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.14); border-left: 6px solid #e10600; border-radius: 10px; padding: 14px 18px; font-size: 27px; line-height: 1.15; color: #f2f2f2; display: flex; align-items: center; min-height: 88px; }
.pricebox { position: absolute; left: 0; right: 0; bottom: 196px; display: flex; flex-direction: column; align-items: center; }
.old { font: 700 40px Cond; color: #aaa; text-decoration: line-through; text-decoration-color: #ff2a12; text-decoration-thickness: 4px; margin-bottom: 4px; }
.price { position: relative; padding: 6px 60px 12px; background: linear-gradient(90deg, #b00400, #ff2a12, #b00400); transform: skewX(-10deg); box-shadow: 0 0 60px rgba(255,40,0,.85), inset 0 0 0 3px rgba(255,255,255,.25); }
.price b { display: block; transform: skewX(10deg); font: 700 ${conPrecio ? 150 : 96}px/1 Display; letter-spacing: 1px; text-shadow: 0 4px 0 rgba(0,0,0,.35); }
.cuotas { margin-top: 18px; font: 700 34px Cond; letter-spacing: 3px; text-transform: uppercase; color: ${oferta ? "#ffd400" : "#2bff7a"}; text-shadow: 0 0 18px ${oferta ? "rgba(255,212,0,.5)" : "rgba(43,255,122,.5)"}; }
.foot { position: absolute; left: 0; right: 0; bottom: 0; height: 150px; background: #e10600; display: flex; align-items: center; justify-content: space-between; padding: 0 60px; box-shadow: 0 -10px 50px rgba(255,30,0,.5); }
.foot .l { font: 700 26px Cond; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap; }
.foot .l b { display: block; font: 700 46px Display; }
.foot .r { text-align: right; font: 700 24px Cond; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap; }
.foot .r b { display: block; font: 700 38px Display; }
</style></head><body>
<div class="bg"></div><div class="lines"></div><div class="slash s1"></div><div class="slash s2"></div>
<div class="top">
  <div class="logo"><div class="mark">T</div><div class="lt">TRAINING<small>GIMNASIO</small></div></div>
  <div class="chip">${esc(etiqueta)}</div>
</div>
<div class="head">
  ${p.marca ? `<div class="brand">${esc(p.marca)}</div>` : ""}
  <h1>${esc(nombre)}</h1>
</div>
<div class="stage">
  <div class="floor"></div>
  ${hay ? `<img class="prod" src="file://${recorte}">` : `<div class="frame"><img src="${fotoDe(p)}"></div>`}
</div>
<div class="specs">${specs.map((x) => `<div class="spec">${esc(x)}</div>`).join("")}</div>
<div class="pricebox">
  ${p.precioAnterior ? `<div class="old">${precio(p.precioAnterior)}</div>` : ""}
  <div class="price"><b>${conPrecio ? precio(p.precio) : "CONSULTAR PRECIO"}</b></div>
  ${conPrecio ? `<div class="cuotas">${oferta ? "Cuotas con interés" : "Hasta 12 cuotas sin interés"}</div>` : ""}
</div>
<div class="foot">
  <div class="l"><b>PEDILO YA</b>Envío gratis a todo el país</div>
  <div class="r"><b>WhatsApp ${WHATSAPP}</b>${WEB}</div>
</div>
</body></html>`;
}

function html(p, W, H) {
  const oferta = esOferta(p);
  const specs = caracteristicas(p);
  const nombre = p.nombre.length > 38 ? p.nombre.slice(0, 36).replace(/\s+\S*$/, "") + "…" : p.nombre;
  const vertical = H > W;
  const alto = H >= 1800; // historia 9:16; el 4:5 es más compacto
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Display; src: url("${font("oswald-latin-700-normal.ttf")}"); }
@font-face { font-family: Cond; src: url("${font("roboto-condensed-latin-700-normal.ttf")}"); }
* { margin: 0; padding: 0; box-sizing: border-box; }
body { width: ${W}px; height: ${H}px; overflow: hidden; background: #0b0b0c; color: #fff; font-family: Cond, sans-serif; position: relative; }
.bg { position: absolute; inset: 0; background:
  radial-gradient(circle at 78% 42%, rgba(225,6,0,.35), transparent 55%),
  repeating-linear-gradient(-55deg, transparent 0 46px, rgba(255,255,255,.025) 46px 92px); }
.band { position: absolute; left: 0; right: 0; bottom: 0; height: ${vertical ? 150 : 118}px; background: #e10600; }
.wrap { position: absolute; inset: ${vertical ? "64px 60px 0" : "50px 56px 0"}; display: flex; flex-direction: column; }
.top { display: flex; justify-content: space-between; align-items: center; }
.logo { display: flex; align-items: center; gap: 14px; }
.mark { width: 64px; height: 64px; background: #e10600; display: grid; place-items: center; font: 700 44px Display; clip-path: polygon(0 0,100% 0,100% 75%,75% 100%,0 100%); }
.lt { font: 700 40px/0.9 Display; letter-spacing: 1px; }
.lt small { display: block; font: 700 15px Cond; letter-spacing: 9px; color: #e10600; margin-top: 4px; }
.code { font: 700 22px Cond; letter-spacing: 3px; color: #999; }
.main { flex: 1; display: grid; ${vertical ? `grid-template-rows: ${alto ? "46%" : "47%"} 1fr;` : "grid-template-columns: 47% 1fr;"} gap: ${alto ? 34 : vertical ? 24 : 40}px; margin: ${alto ? "40px 0 40px" : vertical ? "28px 0 26px" : "34px 0 34px"}; min-height: 0; }
.photo { position: relative; background: #fff; border-radius: 14px; border-bottom: 8px solid #e10600; overflow: hidden; min-height: 0; }
.photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; padding: 22px; }
.info { display: flex; flex-direction: column; min-height: 0; }
.cat { font: 700 22px Cond; letter-spacing: 4px; text-transform: uppercase; color: #e10600; }
.brand { font: 700 30px Display; letter-spacing: 1px; color: #bbb; text-transform: uppercase; margin-top: 6px; }
h1 { font: 700 ${alto ? 66 : vertical ? 54 : 58}px/1.0 Display; text-transform: uppercase; margin-top: 4px; }
ul { list-style: none; margin-top: 22px; display: grid; gap: 10px; }
li { font-size: ${alto ? 30 : vertical ? 25 : 26}px; line-height: 1.15; padding-left: 28px; position: relative; color: #e8e8e8; }
li::before { content: ""; position: absolute; left: 0; top: .42em; width: 13px; height: 13px; background: #e10600; transform: rotate(45deg); }
.price { margin-top: auto; padding-top: 18px; }
.old { font: 700 30px Cond; color: #888; text-decoration: line-through; text-decoration-color: #e10600; text-decoration-thickness: 3px; }
ul { ${vertical && !alto ? 'margin-top: 14px; gap: 7px;' : ''} }
.now { font: 700 ${alto ? 104 : vertical ? 88 : 92}px/1 Display; color: #fff; }
.now span { color: #e10600; }
.tag { display: inline-block; background: #e10600; font: 700 26px Display; letter-spacing: 1px; padding: 4px 14px; margin-bottom: 8px; text-transform: uppercase; }
.cuotas { font: 700 26px Cond; letter-spacing: 2px; text-transform: uppercase; margin-top: 8px; color: ${oferta ? "#ccc" : "#25d366"}; }
.foot { position: relative; height: ${vertical ? 150 : 118}px; display: flex; align-items: center; justify-content: space-between; font: 700 ${vertical ? 30 : 27}px Cond; letter-spacing: 1px; text-transform: uppercase; }
.foot b { font: 700 ${vertical ? 40 : 36}px Display; letter-spacing: 1px; display: block; }
.foot .r { text-align: right; }
</style></head><body><div class="bg"></div><div class="band"></div>
<div class="wrap">
  <div class="top">
    <div class="logo"><div class="mark">T</div><div class="lt">TRAINING<small>GIMNASIO</small></div></div>
    <div class="code">${esc(p.codigo)}</div>
  </div>
  <div class="main">
    <div class="photo"><img src="${"file://" + path.join(SITE, FOTO_AVISO[p.codigo] || p.fotos.find((f) => !/promo|flyers\//.test(f)) || p.fotos[0])}"></div>
    <div class="info">
      ${p.marca ? `<div class="brand">${esc(p.marca)}</div>` : `<div class="cat">Training Gimnasio</div>`}
      <h1>${esc(nombre)}</h1>
      <ul>${specs.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      <div class="price">
        ${oferta && p.etiqueta ? `<div class="tag">${esc(p.etiqueta.split("·")[0].trim())}</div>` : ""}
        ${p.precioAnterior ? `<div class="old">${precio(p.precioAnterior)}</div>` : ""}
        <div class="now"${typeof p.precio === "number" ? "" : ' style="font-size:64px"'}>${typeof p.precio === "number" ? `<span>$</span>${Number(p.precio).toLocaleString("es-AR")}` : "CONSULTAR PRECIO"}</div>
        ${typeof p.precio === "number" ? `<div class="cuotas">${oferta ? "Cuotas con interés" : "Hasta 12 cuotas sin interés"}</div>` : ""}
      </div>
    </div>
  </div>
  <div class="foot">
    <div><b>ENVÍO GRATIS</b>A todo el país</div>
    <div class="r"><b>WhatsApp ${WHATSAPP}</b>${WEB}</div>
  </div>
</div></body></html>`;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const lista = PEDIDOS.length ? PRODUCTOS.filter((p) => PEDIDOS.includes(p.codigo)) : PRODUCTOS;
  const formatos = (process.env.FORMATOS || "cuadrado").split(",");
  const tam = { cuadrado: [1080, 1080], feed: [1080, 1350], historia: [1080, 1920] };
  const b = await chromium.launch();
  const page = await b.newPage({ viewport: { width: 1080, height: 1080 } });
  for (const p of lista) {
    for (const f of formatos) {
      const [W, H] = tam[f];
      await page.setViewportSize({ width: W, height: H });
      const tmp = path.join(__dirname, ".render.html");
      fs.writeFileSync(tmp, (f === "historia" && process.env.ESTILO !== "clasico" ? htmlImpacto : html)(p, W, H));
      await page.goto("file://" + tmp, { waitUntil: "load" });
      await page.evaluate(() => document.fonts.ready);
      const file = path.join(OUT, `${p.codigo.toLowerCase()}${f === "cuadrado" ? "" : "-" + f}.jpg`);
      await page.screenshot({ path: file, type: "jpeg", quality: 88 });
    }
  }
  await b.close();
  fs.rmSync(path.join(__dirname, ".render.html"), { force: true });
  console.log(lista.length, "avisos en", OUT);
})();
