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
  {
    codigo: "TG-06",
    marca: "Olmo",
    nombre: "Bicicleta fija Spirit 80",
    categoria: "spinning",
    precio: 458300,
    condicion: null,
    etiqueta: "Stock disponible",
    resumen: "Bicicleta de spinning con volante de inercia de 10 kg, resistencia magnética regulable y monitor. No necesita corriente.",
    descripcion: "La Olmo Spirit 80 es una bicicleta fija estilo spinning con un volante de inercia de 10 kg que da un pedaleo suave y continuo. La resistencia magnética se ajusta con la perilla central para personalizar la intensidad, y el monitor del manubrio muestra velocidad, pulso, tiempo, distancia y calorías. El asiento se regula en altura y distancia, tiene portabotella y ruedas para moverla y guardarla con facilidad. Funciona sin electricidad.",
    specs: [
      "Voltaje: 0 V (no necesita corriente)",
      "Volante de inercia de 10 kg para un entrenamiento más suave y efectivo",
      "Peso máximo soportado: 120 kg",
      "Resistencia magnética ajustable",
      "Asiento regulable en horizontal y vertical",
      "Monitor con velocidad, pulso, tiempo, distancia y calorías",
      "Sensores de pulso en el manubrio",
      "Portabotella",
      "Ruedas de traslado para moverla y guardarla fácil",
    ],
    fotos: ["img/olmo-spirit80-1.jpg", "img/olmo-spirit80-2.jpg", "img/olmo-spirit80-promo.jpg"],
  },
  {
    codigo: "TG-07",
    marca: "Randers",
    nombre: "Multigym Home Gym",
    categoria: "fuerza",
    precio: 550000,
    condicion: null,
    etiqueta: "Stock disponible",
    resumen: "Estación de musculación completa con poleas y 50 kg de pesas incluidas. Pecho, espalda, brazos y piernas en un solo equipo.",
    descripcion: "El Multigym Randers Home Gym reúne en un solo equipo las estaciones básicas de musculación: polea alta con barra para dorsales, mariposa para pecho, sillón de cuádriceps y femorales con rodillos y polea baja. Tiene estructura robusta de hierro gris, tapizado negro y una pila de pesas de 50 kg incluida. Sus medidas compactas lo hacen ideal para armar un gimnasio en casa.",
    specs: [
      "Color del tapizado: negro",
      "Color de la estructura: gris",
      "Peso máximo del usuario: 120 kg",
      "Estructura robusta de hierro para mayor durabilidad",
      "Capacidad máxima de peso: 170 kg",
      "Sistema de poleas para una gran variedad de ejercicios",
      "Incluye pesas de 50 kg",
      "Medidas: 117 x 122 x 215 cm",
      "Uso residencial",
    ],
    fotos: ["img/multigym-randers-1.jpg", "img/multigym-randers-3.jpg", "img/multigym-randers-2.jpg", "img/multigym-randers-promo.jpg"],
  },
  {
    codigo: "TG-08",
    marca: "Randers",
    nombre: "Banco plano ARG 202",
    categoria: "fuerza",
    precio: 75000,
    condicion: null,
    etiqueta: "Stock disponible",
    resumen: "Banco plano de acero con relleno de 3,8 cm y tapizado en cuero sintético. Liviano, firme y con pies antideslizantes.",
    descripcion: "El banco plano Randers ARG 202 es la base para press de pecho con mancuernas, remo, abdominales y muchos ejercicios más. Tiene estructura sólida de acero, un acolchado de 3,8 cm de espesor recubierto en cuero sintético y pies antideslizantes. Pesa solo 6,5 kg, así que se mueve y se guarda fácil.",
    specs: [
      "Estructura sólida de acero",
      "Soporta usuarios de hasta 100 kg",
      "Relleno de 3,8 cm de grosor recubierto en cuero sintético",
      "Medidas: 103 (alto) x 95 (largo) x 30 (ancho) cm",
      "Peso del producto: 6,5 kg",
      "Pies antideslizantes",
    ],
    fotos: ["img/banco-randers-202-1.jpg", "img/banco-randers-202-promo.jpg"],
  },
  {
    codigo: "TG-09",
    marca: "West",
    nombre: "Mini tramp jumping",
    categoria: "jumping",
    precio: 120000,
    condicion: null,
    etiqueta: "Stock disponible",
    resumen: "Cama elástica de 90 cm para clases de jumping, con 30 resortes, 6 patas y borde protector. Soporta hasta 110 kg.",
    descripcion: "El mini tramp West es ideal para clases de jumping y entrenamiento cardiovascular de bajo impacto. Tiene una lona de salto de polipropileno suave y resistente a la abrasión, 30 resortes antioxidantes con buena elasticidad y un cobertor que protege todo el borde (360°). Su estructura de caño de acero grueso se apoya sobre 6 patas con punta de goma antideslizante.",
    specs: [
      "Ancho total: 90 cm",
      "Superficie de salto: 90 cm",
      "Alto: 22 cm",
      "Cantidad de patas: 6, con punta de goma antideslizante",
      "Resortes: 30, antioxidantes",
      "Peso máximo del usuario: 110 kg",
      "Lona de salto: PP (polipropileno), resistente a la abrasión",
      "Cobertor: PE+PE (polietileno), protección de 360°",
      "Caños estructurales: 25 x 1,5 mm",
      "Caño de las patas: 25 x 2 mm",
    ],
    fotos: ["img/mini-tramp-west-1.jpg", "img/mini-tramp-west-2.jpg", "img/mini-tramp-west-promo.jpg"],
  },
  {
    codigo: "TG-10",
    marca: "Fitage",
    nombre: "Bicicleta horizontal Vital Stroll",
    categoria: "fijas",
    precio: 480000,
    condicion: null,
    etiqueta: "Stock disponible",
    resumen: "Bicicleta reclinada con respaldo, 8 niveles de resistencia magnética y sensor de pulso. Cómoda y cuidadosa con la espalda.",
    descripcion: "La Fitage Vital Stroll es una bicicleta horizontal (reclinada) con asiento amplio y respaldo, pensada para pedalear cómodo y con la espalda apoyada. Es ideal para personas mayores, rehabilitación o quienes buscan un cardio de bajo impacto. Tiene resistencia magnética silenciosa con 8 niveles, transmisión a correa, rueda de inercia de 4 kg, display con sensores de pulso en los apoyabrazos y asiento regulable en distancia.",
    specs: [
      "Peso soportado: 120 kg",
      "Transmisión a correa",
      "8 niveles de esfuerzo",
      "Resistencia magnética",
      "Uso residencial",
      "Sensor de pulso: sí",
      "Display: sí",
      "Rueda de inercia de 4 kg",
      "Asiento con respaldo, regulable en distancia",
    ],
    fotos: ["img/fitage-vital-stroll-1.jpg", "img/fitage-vital-stroll-2.jpg", "img/fitage-vital-stroll-promo.jpg"],
  },
  {
    codigo: "TG-11",
    marca: "Daiwa",
    nombre: "Elíptico 2 en 1 con asiento",
    categoria: "elipticos",
    precio: 208000,
    condicion: "Al contado",
    etiqueta: "35% OFF · Super oferta",
    resumen: "Elíptico con asiento: se usa parado como elíptico o sentado como bicicleta. Monitor digital y resistencia regulable.",
    descripcion: "El elíptico Daiwa combina dos equipos en uno: de pie funciona como elíptico, con brazos móviles para trabajar el cuerpo completo, y con el asiento se usa como bicicleta fija. Tiene un monitor digital que muestra velocidad, tiempo, distancia y calorías (con modo de recorrido automático), perillas para ajustar los brazos y estructura de acero negro. Ideal para hacer cardio en casa ocupando poco espacio.",
    specs: [
      "Marca Daiwa",
      "2 en 1: elíptico de pie y bicicleta con asiento",
      "Brazos móviles para trabajar tren superior e inferior",
      "Monitor digital: velocidad, tiempo, distancia, calorías y modo scan",
      "Resistencia regulable",
      "Estructura de acero negro",
      "Barra estabilizadora con regatones",
    ],
    fotos: ["img/eliptico-daiwa-1.jpg", "img/eliptico-daiwa-2.jpg", "img/eliptico-daiwa-3.jpg", "img/eliptico-daiwa-promo.jpg"],
  },
  {
    codigo: "TG-12",
    marca: "Olmo",
    nombre: "Elíptico Fit 305",
    categoria: "elipticos",
    precio: 820000,
    condicion: "De contado",
    etiqueta: "Uso residencial",
    resumen: "Elíptico de uso residencial con brazos móviles, manijas fijas con sensores de pulso y monitor digital.",
    descripcion: "El Olmo Fit 305 es un elíptico de uso residencial para hacer cardio completo y de bajo impacto en casa. Tiene brazos móviles para trabajar brazos y piernas a la vez, manijas fijas con sensores de pulso, monitor digital en el centro del manubrio y una perilla para regular la resistencia. La transmisión está cubierta por una carcasa negra y roja, y los pedales son amplios y con textura antideslizante.",
    specs: [
      "Marca Olmo, modelo Fit 305",
      "Uso residencial",
      "Brazos móviles para entrenar tren superior e inferior",
      "Manijas fijas con sensores de pulso",
      "Monitor digital",
      "Perilla para regular la resistencia",
      "Pedales amplios antideslizantes",
      "Transmisión cubierta",
      "Barras estabilizadoras con regatones",
    ],
    fotos: ["img/eliptico-olmo-305-1.jpg", "img/eliptico-olmo-305-2.jpg", "img/eliptico-olmo-305-promo.jpg"],
  },
  {
    codigo: "TG-13",
    marca: "",
    nombre: "Pisos encastrables de goma EVA x4",
    categoria: "pisos",
    precio: 45000,
    condicion: "De contado",
    etiqueta: "Pack x4",
    resumen: "Pack de 4 placas encastrables de 60 x 60 cm en goma EVA de alta densidad. Para gimnasios y hogares.",
    descripcion: "Pack de 4 alfombras de ejercicio encastrables en espuma EVA de alta densidad. Las placas se unen como un rompecabezas, así que podés cubrir el espacio que necesites y desarmarlas para guardarlas. Protegen el piso, amortiguan impactos y reducen ruidos, ideales para debajo de bicicletas, cintas y zonas de peso libre o para entrenar en el suelo. Uso para gimnasios y hogares.",
    specs: [
      "Se entrega con 4 alfombras de ejercicio encastrables",
      "Medidas de cada placa: 60 x 60 x 1,2 cm",
      "Material: espuma EVA de alta densidad",
      "Peso de cada placa: 300 g",
      "Superficie texturada antideslizante",
      "Uso para gimnasios y hogares",
    ],
    fotos: ["img/piso-eva-1.jpg", "img/piso-eva-2.jpg", "img/piso-eva-promo.jpg"],
  },
  {
    codigo: "TG-14",
    marca: "",
    nombre: "Piso de caucho virgen 90 x 90 cm",
    categoria: "pisos",
    precio: 38000,
    condicion: "De contado",
    etiqueta: "Uso gym y hogares",
    resumen: "Placa de caucho virgen de 90 x 90 cm y 10 mm de espesor. Resistente y firme, para gimnasios y hogares.",
    descripcion: "Placa de caucho virgen de 90 x 90 cm y 10 mm de espesor, pensada para pisos de gimnasio y espacios de entrenamiento en casa. El caucho es firme y resistente: protege el piso de golpes y del peso de las máquinas, amortigua impactos y no se desliza. Se colocan una al lado de la otra para cubrir toda la superficie.",
    specs: [
      "Material: caucho virgen",
      "Medidas: 90 x 90 cm",
      "Espesor: 10 mm",
      "Protege el piso y amortigua impactos",
      "Uso para gimnasios y hogares",
    ],
    fotos: ["img/piso-caucho-1.jpg", "img/piso-caucho-2.jpg", "img/piso-caucho-promo.jpg"],
  },
  {
    codigo: "TG-15",
    marca: "MDK",
    nombre: "Bicicleta fija 13882",
    categoria: "fijas",
    precio: 285000,
    condicion: "De contado",
    etiqueta: "Uso residencial",
    resumen: "Bicicleta fija vertical con monitor digital, sensores de pulso y perilla de resistencia. Compacta y fácil de mover.",
    descripcion: "La MDK 13882 es una bicicleta fija vertical de uso residencial, ideal para hacer cardio en casa. Tiene un monitor digital en el manubrio, sensores de pulso en los agarres y una perilla para regular la resistencia del pedaleo. El asiento se regula en altura y el manubrio se ajusta en inclinación. Su diseño compacto en negro y celeste ocupa poco lugar, y las ruedas de la base delantera permiten moverla con facilidad.",
    specs: [
      "Marca MDK, modelo 13882",
      "Uso residencial",
      "Monitor digital",
      "Sensores de pulso en el manubrio",
      "Perilla para regular la resistencia",
      "Asiento regulable en altura",
      "Manubrio regulable en inclinación",
      "Pedales con correas de sujeción",
      "Ruedas de traslado en la base",
    ],
    fotos: ["img/mdk-13882-1.jpg", "img/mdk-13882-2.jpg", "img/mdk-13882-promo.jpg"],
  },
  {
    codigo: "TG-16",
    marca: "Athletic",
    nombre: "Multigym 460M",
    categoria: "fuerza",
    precio: 900500,
    condicion: "De contado",
    etiqueta: "Uso residencial",
    resumen: "Multigym con torre de pesas cubierta, polea alta, mariposa, banco Scott y sillón de cuádriceps. Un gimnasio completo en casa.",
    descripcion: "El Athletic 460M es un multigym de uso residencial que reúne las estaciones principales de musculación en un solo equipo. Tiene una torre de pesas con cubierta protectora, polea alta con barra para dorsales, mariposa para pecho con apoyabrazos acolchados, apoyo tipo banco Scott para bíceps y sillón de cuádriceps y femorales con rodillos. El asiento y el respaldo están tapizados en negro y naranja sobre una estructura de acero gris.",
    specs: [
      "Marca Athletic, modelo 460M",
      "Uso residencial",
      "Torre de pesas con cubierta protectora",
      "Polea alta con barra para dorsales",
      "Mariposa para pecho con apoyabrazos acolchados",
      "Apoyo tipo banco Scott para bíceps",
      "Sillón de cuádriceps y femorales con rodillos",
      "Asiento y respaldo tapizados",
      "Estructura de acero",
    ],
    fotos: ["img/athletic-460m-1.jpg", "img/athletic-460m-promo.jpg"],
  },
  {
    codigo: "TG-17",
    marca: "Randers",
    nombre: "Banco de abdominales ARG-203",
    categoria: "fuerza",
    precio: 110000,
    condicion: "De contado",
    etiqueta: "Uso residencial",
    resumen: "Banco curvo para abdominales con inclinación regulable y rodillos acolchados para sujetar las piernas.",
    descripcion: "El banco Randers ARG-203 está pensado para trabajar abdominales y zona media. Su respaldo curvo acompaña la forma de la espalda y la columna delantera tiene varias posiciones para regular la inclinación y hacer el ejercicio más fácil o más intenso. Los dos pares de rodillos acolchados sujetan bien las piernas. Tiene tapizado rojo y estructura de acero negro.",
    specs: [
      "Marca Randers, modelo ARG-203",
      "Uso residencial",
      "Respaldo curvo para abdominales",
      "Inclinación regulable en varias posiciones",
      "Dos pares de rodillos acolchados para sujetar las piernas",
      "Tapizado rojo",
      "Estructura de acero negro con regatones",
    ],
    fotos: ["img/banco-abd-203-1.jpg", "img/banco-abd-203-2.jpg", "img/banco-abd-203-promo.jpg"],
  },
  {
    codigo: "TG-18",
    marca: "",
    nombre: "Kit barra, mancuernas y discos",
    categoria: "peso-libre",
    precio: 110000,
    condicion: "De contado",
    etiqueta: "Uso residencial",
    resumen: "Kit con barra larga, dos mancuernas y discos intercambiables. Todo lo necesario para entrenar fuerza en casa.",
    descripcion: "Kit completo para entrenar con peso libre en casa. Incluye una barra larga y dos barras cortas de mancuerna, con discos rojos intercambiables para armar el peso que necesites. Las mancuernas cierran con tuercas tipo estrella a rosca y la barra lleva topes de acero para que los discos no se muevan. Ideal para empezar a entrenar fuerza sin ocupar mucho espacio.",
    specs: [
      "Uso residencial",
      "Incluye 1 barra larga y 2 mancuernas",
      "Discos intercambiables",
      "Mancuernas con cierre de tuerca estrella a rosca",
      "Topes de acero para la barra",
    ],
    fotos: ["img/kit-barra-1.jpg", "img/kit-barra-2.jpg", "img/kit-barra-topes.jpg", "img/kit-barra-promo.jpg"],
  },
  {
    codigo: "TG-19",
    marca: "",
    nombre: "Mancuerna hexagonal maciza 5 kg",
    categoria: "peso-libre",
    precio: 30000,
    condicion: "De contado",
    etiqueta: "Uso profesional",
    resumen: "Mancuerna hexagonal maciza de uso profesional, con cabezas engomadas y mango cromado moleteado.",
    descripcion: "Mancuerna hexagonal maciza de uso profesional, apta para gimnasios y para entrenar en casa. Las cabezas hexagonales están recubiertas de goma para proteger el piso y evitar que ruede, y el mango cromado moleteado da un agarre firme. El peso está marcado en cada cabeza.",
    specs: [
      "Uso profesional",
      "Peso: 5 kg",
      "Maciza, de una sola pieza",
      "Cabezas hexagonales engomadas (no ruedan)",
      "Mango cromado moleteado",
      "Peso marcado en las cabezas",
    ],
    fotos: ["img/mancuerna-hex-1.jpg", "img/mancuerna-hex-2.jpg", "img/mancuerna-hex-promo.jpg"],
  },
];

const CATEGORIAS = [
  { id: "todos", nombre: "Todos" },
  { id: "spinning", nombre: "Bicicletas de spinning" },
  { id: "fijas", nombre: "Bicicletas fijas" },
  { id: "elipticos", nombre: "Elípticos" },
  { id: "remo", nombre: "Remo" },
  { id: "airbike", nombre: "Airbike" },
  { id: "fuerza", nombre: "Fuerza" },
  { id: "peso-libre", nombre: "Peso libre" },
  { id: "jumping", nombre: "Jumping" },
  { id: "pisos", nombre: "Pisos" },
];

/* ---------------- Utilidades ---------------- */
const $ = (sel) => document.querySelector(sel);
const nombreCategoria = (id) => (CATEGORIAS.find((c) => c.id === id) || {}).nombre || id;
const formatoPrecio = (n) => `${MONEDA.simbolo} ${Number(n).toLocaleString(MONEDA.locale)}`;
const tienePrecio = (p) => typeof p.precio === "number" && !Number.isNaN(p.precio);
const escapar = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const nombreCompleto = (p) => [p.marca, p.nombre].filter(Boolean).join(" ");
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
        <img src="${p.fotos[0]}" alt="${escapar(nombreCompleto(p))}" loading="lazy" />
      </button>
      <div class="card__body">
        <p class="card__brand">${[p.marca, nombreCategoria(p.categoria)].filter(Boolean).map(escapar).join(" · ")}</p>
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
      <td>${escapar(nombreCompleto(p))}</td>
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
      <div class="detail__main"><img id="detailMain" src="${p.fotos[0]}" alt="${escapar(nombreCompleto(p))}" /></div>
      <div class="detail__thumbs">
        ${p.fotos.map((f, i) => `<button class="detail__thumb${i === 0 ? " active" : ""}" data-foto="${f}"><img src="${f}" alt="Foto ${i + 1}" /></button>`).join("")}
      </div>
    </div>
    <div class="detail__info">
      <p class="card__brand">${[p.codigo, p.marca, nombreCategoria(p.categoria)].filter(Boolean).map(escapar).join(" · ")}</p>
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
  const linea = `${p.codigo} ${nombreCompleto(p)}`;
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
