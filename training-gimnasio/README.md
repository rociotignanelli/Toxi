# Training Gimnasio

Página de venta de maquinaria profesional para gimnasios, en negro y rojo. Está hecha con HTML, CSS y JavaScript puros, sin dependencias.

Para verla, abrí `index.html` en el navegador.

## Cómo cargar los precios
En `script.js`, dentro de la lista `PRODUCTOS`, buscá el equipo por su código (TG-01, TG-02, …) y completá `precio` con el número sin puntos, por ejemplo `precio: 1850000`.
Si `precio` queda en `null`, la página muestra "Consultar precio".
El precio se actualiza solo en la tarjeta del catálogo y en la lista de precios.

## Fotos
Las fotos de los equipos están en `img/` y sus datos (autor, licencia y enlace a la fuente) en `fotos.js`. Son fotos reales con licencia libre (Wikimedia Commons y Openverse) y se acreditan al pie de la página, en "Créditos de las fotos".
Para poner una foto propia, guardala en `img/` y cambiá `archivo` en `fotos.js` (y borrá o reemplazá los datos de crédito).
Los equipos sin foto muestran un dibujo.
