# TOXI Electric

Tienda web de la Moto Eléctrica Infantil Turbo Sport Duo 12V – Biemme, hecha con HTML, CSS y JavaScript puros, sin dependencias.
Es un sitio independiente de TOXI Parfums (que está en la raíz del repositorio).

Para verla, abrí `electric/index.html` en el navegador.

## Qué incluye
- Portada con las fotos de las 3 motos y la promo del 30% de descuento
- 3 publicaciones de la Turbo Sport Duo (rosa, azul y negra), cada una con galería de fotos, descripción completa, características técnicas con su color y la promo: antes $500.000, ahora $350.000 (ahorrás $150.000)
- Carrito lateral con precio en 12 cuotas, que se guarda en el navegador (localStorage)
- Formulario para reservar un turno y ver la moto en el showroom
- Preguntas frecuentes y suscripción al boletín
- Diseño adaptado a celular

## Fotos
Las fotos están en `img/turbo-sport-duo/`: una foto principal por color (`rosa.jpg`, `azul.jpg`, `negra.jpg`), cinco vistas de detalle recortadas de cada foto (frente, rueda, asiento, pedal y motor) y la placa de la promo (`promo.jpg`), que se muestra en las tres publicaciones.

## Cómo editar los productos
Las publicaciones se arman con la función `turboSportDuo` al principio de `script.js`: ahí están la descripción, las características, el precio y las fotos.
La dirección del showroom y el correo del pie de página son de ejemplo: reemplazalos por los reales.
