"""Recorta el fondo blanco de las fotos de los productos para los avisos "impacto".
Uso: python3 recortar.py fotos.json carpeta-salida
fotos.json: {"TG-01": "/ruta/foto.jpg", ...}. Genera tg-01.png con fondo transparente
solo cuando la foto tiene fondo blanco liso; si no, la omite (el aviso usa la foto con marco)."""
import json, os, sys
import numpy as np, cv2
from PIL import Image

fotos, out = json.load(open(sys.argv[1])), sys.argv[2]
os.makedirs(out, exist_ok=True)
hechos = 0
for code, src in fotos.items():
    im = np.array(Image.open(src).convert("RGB"))
    h, w = im.shape[:2]
    a = im.astype(int)
    blanco = ((a.min(-1) > 212) & (a.max(-1) - a.min(-1) < 26)).astype(np.uint8)
    borde = np.concatenate([blanco[0], blanco[-1], blanco[:, 0], blanco[:, -1]])
    if borde.mean() < 0.9:          # el fondo no es blanco liso: no se recorta
        continue
    # fondo = zonas blancas conectadas con el borde
    fondo = np.zeros((h + 2, w + 2), np.uint8)
    relleno = blanco.copy() * 255
    for y, x in [(0, 0), (0, w - 1), (h - 1, 0), (h - 1, w - 1)] + [(0, i) for i in range(0, w, 25)] + [(h - 1, i) for i in range(0, w, 25)] + [(i, 0) for i in range(0, h, 25)] + [(i, w - 1) for i in range(0, h, 25)]:
        if relleno[y, x] == 255:
            cv2.floodFill(relleno, fondo, (x, y), 128, loDiff=0, upDiff=0)
    bg = (relleno == 128).astype(np.uint8)
    bg = cv2.morphologyEx(bg, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))
    alfa = (1 - bg) * 255
    alfa = cv2.morphologyEx(alfa.astype(np.uint8), cv2.MORPH_CLOSE, np.ones((3, 3), np.uint8))
    # achicar 1 px para sacar el halo blanco y suavizar el borde
    alfa = cv2.erode(alfa, np.ones((3, 3), np.uint8), 1)
    alfa = cv2.GaussianBlur(alfa, (0, 0), 1.0)
    # quitar el halo blanco en los bordes semitransparentes
    rgb = im.astype(float)
    t = (alfa / 255.0)[..., None]
    rgb = np.where(t > 0.05, (rgb - 255 * (1 - t)) / np.maximum(t, 0.05), rgb).clip(0, 255)
    if (alfa > 128).mean() < 0.03:   # casi nada de producto: algo salió mal
        continue
    ys, xs = np.where(alfa > 20)
    y0, y1, x0, x1 = ys.min(), ys.max() + 1, xs.min(), xs.max() + 1
    rgba = np.dstack([rgb.astype(np.uint8), alfa])[y0:y1, x0:x1]
    Image.fromarray(rgba, "RGBA").save(os.path.join(out, code.lower() + ".png"))
    hechos += 1
print(hechos, "recortes de", len(fotos))
