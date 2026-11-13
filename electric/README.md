# TOXI Electric

Tienda web de motos y monopatines eléctricos hecha con HTML, CSS y JavaScript puros, sin dependencias.
Es un sitio independiente de TOXI Parfums (que está en la raíz del repositorio).

Para verla, abrí `electric/index.html` en el navegador.

## Qué incluye
- Portada con ilustraciones animadas de una moto y un monopatín
- Catálogo con filtro por tipo y orden por precio, autonomía o velocidad:
  - 4 monopatines eléctricos (con ficha técnica: velocidad, autonomía, potencia, batería, carga, peso y rodado)
  - 3 publicaciones de la Moto Eléctrica Infantil Turbo Sport Duo 12V – Biemme (rosa, azul y negra), cada una con galería de fotos, descripción completa y la promo del 30% de descuento
- Comparador de hasta 3 modelos lado a lado, que resalta el mejor valor de cada fila
- Calculadora de ahorro: compara el gasto mensual en nafta con el de cargar un vehículo eléctrico
- Formulario para reservar una prueba de manejo, con validación
- Carrito lateral con precio en 12 cuotas, que se guarda en el navegador (localStorage)
- Opiniones de clientes, preguntas frecuentes y suscripción al boletín
- Diseño adaptado a móvil y animaciones al hacer scroll

## Fotos
Las fotos de la Turbo Sport Duo están en `img/turbo-sport-duo/`: una foto principal por color (`rosa.jpg`, `azul.jpg`, `negra.jpg`), cinco vistas de detalle recortadas de cada foto (frente, rueda, asiento, pedal y motor) y la placa de la promo (`promo.jpg`), que se muestra en las tres publicaciones.

## Cómo editar los productos
Los modelos, precios y fichas técnicas están en la lista `PRODUCTS` al principio de `electric/script.js`.
Los precios, datos del showroom y opiniones son de ejemplo: reemplazalos por los reales.
