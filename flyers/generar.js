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

function html(p, W, H) {
  const oferta = esOferta(p);
  const specs = caracteristicas(p);
  const nombre = p.nombre.length > 38 ? p.nombre.slice(0, 36).replace(/\s+\S*$/, "") + "…" : p.nombre;
  const vertical = H > W;
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
.main { flex: 1; display: grid; ${vertical ? "grid-template-rows: 46% 1fr;" : "grid-template-columns: 47% 1fr;"} gap: ${vertical ? 34 : 40}px; margin: ${vertical ? "40px 0 40px" : "34px 0 34px"}; min-height: 0; }
.photo { background: #fff; border-radius: 14px; border-bottom: 8px solid #e10600; display: grid; place-items: center; overflow: hidden; min-height: 0; }
.photo img { width: 100%; height: 100%; object-fit: contain; padding: 22px; }
.info { display: flex; flex-direction: column; min-height: 0; }
.cat { font: 700 22px Cond; letter-spacing: 4px; text-transform: uppercase; color: #e10600; }
.brand { font: 700 30px Display; letter-spacing: 1px; color: #bbb; text-transform: uppercase; margin-top: 6px; }
h1 { font: 700 ${vertical ? 66 : 58}px/1.0 Display; text-transform: uppercase; margin-top: 4px; }
ul { list-style: none; margin-top: 22px; display: grid; gap: 10px; }
li { font-size: ${vertical ? 30 : 26}px; line-height: 1.15; padding-left: 28px; position: relative; color: #e8e8e8; }
li::before { content: ""; position: absolute; left: 0; top: .42em; width: 13px; height: 13px; background: #e10600; transform: rotate(45deg); }
.price { margin-top: auto; padding-top: 18px; }
.old { font: 700 30px Cond; color: #888; text-decoration: line-through; text-decoration-color: #e10600; text-decoration-thickness: 3px; }
.now { font: 700 ${vertical ? 104 : 92}px/1 Display; color: #fff; }
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
    <div class="photo"><img src="${"file://" + path.join(SITE, p.fotos.find((f) => !/promo/.test(f)) || p.fotos[0])}"></div>
    <div class="info">
      ${p.marca ? `<div class="brand">${esc(p.marca)}</div>` : `<div class="cat">Training Gimnasio</div>`}
      <h1>${esc(nombre)}</h1>
      <ul>${specs.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      <div class="price">
        ${oferta && p.etiqueta ? `<div class="tag">${esc(p.etiqueta.split("·")[0].trim())}</div>` : ""}
        ${p.precioAnterior ? `<div class="old">${precio(p.precioAnterior)}</div>` : ""}
        <div class="now">${typeof p.precio === "number" ? `<span>$</span>${Number(p.precio).toLocaleString("es-AR")}` : "CONSULTAR PRECIO"}</div>
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
      fs.writeFileSync(tmp, html(p, W, H));
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
