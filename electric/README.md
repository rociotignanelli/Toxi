# TOXI Electric

Tienda web de motos y cuatris infantiles (Turbo Sport Duo 12V – Biemme, Mini Moto Cross Foston, Mini Moto Cross 50 cc y Mini Cuatri 50 cc), hecha con HTML, CSS y JavaScript puros, sin dependencias.
Es un sitio independiente de TOXI Parfums (que está en la raíz del repositorio).

Para verla, abrí `electric/index.html` en el navegador.

## Qué incluye
- Portada con las fotos de las 3 motos y la promo del 30% de descuento
- 3 publicaciones de la Turbo Sport Duo (rosa, azul y negra), cada una con galería de fotos, descripción completa, características técnicas con su color y la promo: antes $500.000, ahora $350.000 (ahorrás $150.000)
- Publicación de la Mini Moto Cross Foston eléctrica, con 6 fotos, descripción, características y precio final de $320.000
- Publicación de la Mini Moto Cross 50 cc 2 Tiempos (a nafta), con 5 fotos, descripción, características técnicas y precio final de $430.000
- 2 publicaciones del Mini Cuatri Infantil 50 cc 2 Tiempos (a nafta), en rojo y en negro, cada una con 5 fotos, descripción, características técnicas con su color y precio final de $670.000
- Carrito lateral con precio en 12 cuotas, que se guarda en el navegador (localStorage)
- Formulario para reservar un turno y ver la moto en el showroom
- Preguntas frecuentes y suscripción al boletín
- Diseño adaptado a celular

## Fotos
Las fotos están en `img/turbo-sport-duo/`: una foto principal por color (`rosa.jpg`, `azul.jpg`, `negra.jpg`), cinco vistas de detalle recortadas de cada foto (frente, rueda, asiento, pedal y motor) y la placa de la promo (`promo.jpg`), que se muestra en las tres publicaciones.
Las de la Mini Moto Cross están en `img/mini-moto-cross/` las del Mini Cuatri en `img/mini-cuatri/` y las de la Foston en `img/foston/`.

## Cómo editar los productos
Las publicaciones se arman al principio de `script.js` (las funciones `turboSportDuo` y `miniCuatri`, y el bloque de la Mini Moto Cross): ahí están la descripción, las características, el precio y las fotos.
La dirección del showroom y el correo del pie de página son de ejemplo: reemplazalos por los reales.
