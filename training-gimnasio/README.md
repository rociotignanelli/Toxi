# Training Gimnasio

Página de venta de maquinaria profesional para gimnasios, en negro y rojo. Está hecha con HTML, CSS y JavaScript puros, sin dependencias.

Para verla, abrí `index.html` en el navegador.

## Productos
El catálogo tiene 28 productos con sus precios:

| Código | Producto | Precio |
|---|---|---|
| TG-01 | Bicicleta de spinning Randers ARG-845SP (35% OFF) | $227.000 al contado |
| TG-02 | Bicicleta de spinning indoor Enerfit (negra o blanca) | $420.000 de contado |
| TG-03 | Simulador de remo Randers (solo 10 unidades) | $895.750 |
| TG-04 | Airbike Assault Classic Pro | $3.750.000 |
| TG-05 | Rack multifunción Randers ARG 154 | $275.000 |
| TG-06 | Bicicleta fija Olmo Spirit 80 | $458.300 |
| TG-07 | Multigym Randers Home Gym | $550.000 |
| TG-08 | Banco plano Randers ARG 202 | $75.000 |
| TG-09 | Mini tramp jumping West | $120.000 |
| TG-10 | Bicicleta horizontal Fitage Vital Stroll | $480.000 |
| TG-11 | Elíptico Daiwa 2 en 1 (35% OFF) | $208.000 al contado |
| TG-12 | Elíptico Olmo Fit 305 | $820.000 de contado |
| TG-13 | Pisos encastrables de goma EVA x4 | $45.000 de contado |
| TG-14 | Piso de caucho virgen 90 x 90 cm x 10 mm | $38.000 de contado |
| TG-15 | Bicicleta fija MDK 13882 | $285.000 de contado |
| TG-16 | Multigym Athletic 460M | $900.500 de contado |
| TG-17 | Banco de abdominales Randers ARG-203 | $110.000 de contado |
| TG-18 | Kit barra, mancuernas y discos | $110.000 de contado |
| TG-19 | Mancuerna hexagonal maciza 5 kg | $30.000 de contado |
| TG-20 | Cinta de correr Atletis X900 (30% OFF) | $235.000 |
| TG-21 | Cinta profesional Movement LX160 G4 | $2.800.000 en 18 cuotas sin interés |
| TG-22 | Multigym Olmo Fit 44 (35% OFF, antes $330.000) | $214.500 |
| TG-23 | Multigimnasio Body Skull | $1.000.500 en 12 cuotas sin interés |
| TG-24 | Rack multifuncional Body Skull | $820.000 en 12 cuotas sin interés |
| TG-25 | Prensa 45° Sonnos M100 | $2.800.000 en 18 cuotas sin interés |
| TG-26 | Barra de dominadas (torre de calistenia) | $200.000 |
| TG-27 | Mini tramp MIR Fitness | Consultar precio |
| TG-28 | Tatami encastrable de goma EVA | Consultar precio |

Cada producto tiene una ventana de detalle con galería de fotos, descripción completa y características.

## Cómo editar productos y precios
Todo está en la lista `PRODUCTOS`, al principio de `script.js`. Para cambiar un precio, escribí el número sin puntos en `precio` (por ejemplo `precio: 227000`). Si querés mostrar el precio anterior tachado, agregá `precioAnterior`. Si `precio` es `null`, se muestra "Consultar precio". Para agregar un producto, copiá un bloque completo, cambiale el código y guardá sus fotos en `img/`.
