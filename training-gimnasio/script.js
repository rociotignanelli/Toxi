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

/* WhatsApp del negocio.
   WHATSAPP_NUMERO: número de WhatsApp que recibe los pedidos, solo dígitos y con código de país
   (Argentina: 549 + característica sin 0 + número sin 15). Ej: "5491123456789".
   Con el número, el pedido y los datos de envío llegan escritos solos al chat.
   WHATSAPP_LINK: enlace de WhatsApp Business. Se usa para los botones de contacto y, si no hay
   número cargado, también para el pedido (en ese caso el pedido se copia y el cliente lo pega). */
const WHATSAPP_LINK = "https://wa.me/message/5KOZEMFL74WVM1";
const WHATSAPP_NUMERO = "5493765530096";

const PRODUCTOS = [
  {
    codigo: "TG-01",
    marca: "Randers",
    nombre: "Bicicleta de spinning ARG-845SP",
    categoria: "spinning",
    precio: 280000,
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
    fotos: ["img/multigym-randers-1.jpg", "img/multigym-randers-3.jpg", "img/multigym-randers-2.jpg", "img/multigym-randers-promo.jpg", "img/multigym-randers-promo-2.jpg", "img/multigym-randers-promo-3.jpg"],
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
    fotos: ["img/banco-randers-202-1.jpg", "img/banco-randers-202-promo.jpg", "img/banco-randers-202-promo-2.jpg"],
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
  {
    codigo: "TG-20",
    marca: "Atletis",
    nombre: "Cinta de correr X900",
    categoria: "cintas",
    precio: 235000,
    precioAnterior: 335000,
    condicion: null,
    etiqueta: "30% OFF",
    fondoOscuro: true,
    resumen: "Cinta plegable con motor de 2,5 HP, inclinación automática de 15 niveles, Bluetooth y 24 programas.",
    descripcion: "La Atletis X900 es una cinta de correr plegable para entrenar en casa. Tiene motor de 2,5 HP, velocidad de hasta 16 km/h e inclinación automática en 15 niveles. La pantalla LED muestra tiempo, velocidad, distancia, calorías y pulso, e incluye 24 rutinas predefinidas. Se conecta por Bluetooth y es compatible con Kinomap, Zwift y FitShow; además tiene puerto USB, entrada MP3 y parlantes. Se pliega y tiene ruedas para guardarla, con llave de seguridad y apagado automático a los 45 minutos.",
    specs: [
      "Velocidad: hasta 16 km/h",
      "Motor: 2,5 HP",
      "Inclinación automática: 15 niveles",
      "Cinta de carrera: 45 x 126 cm",
      "Pantalla LED: tiempo, velocidad, distancia, calorías y pulso",
      "Programas: 24 rutinas predefinidas",
      "Conectividad: Bluetooth, puerto USB, entrada MP3 y parlantes",
      "Compatible con Kinomap, Zwift y FitShow",
      "Peso máximo del usuario: 120 kg",
      "Plegable con ruedas de transporte",
      "Seguridad: llave de seguridad y apagado automático tras 45 min",
      "Medidas del producto: 130 x 73 x 174 cm",
      "Medidas plegada: 140 x 72 x 94 cm",
      "Peso neto: 64 kg · Peso bruto: 74 kg",
      "Embalaje: 32,5 x 76 x 169 cm",
    ],
    fotos: ["img/atletis-x900-1.jpg", "img/atletis-x900-2.jpg", "img/atletis-x900-promo-3.jpg", "img/atletis-x900-promo.jpg", "img/atletis-x900-promo-2.jpg"],
  },
  {
    codigo: "TG-21",
    marca: "Movement",
    nombre: "Cinta profesional LX160 G4",
    categoria: "cintas",
    precio: 2800000,
    condicion: "En 18 cuotas sin interés",
    etiqueta: "1 año de garantía",
    fondoOscuro: true,
    resumen: "Cinta de uso profesional y residencial con motor 3,0 HP AC, velocidad de 1,2 a 18 km/h y 6 amortiguadores.",
    descripcion: "La Movement LX160 G4 es una cinta profesional pensada para entrenamientos intensos en casa o en el gimnasio. Su motor de 3,0 HP AC (peak power) da potencia y durabilidad, con velocidad regulable de 1,2 a 18 km/h. El sistema de 6 amortiguadores elásticos cuida las articulaciones y la estructura de acero carbono con pintura electroestática soporta usuarios de hasta 150 kg. La consola LCD de 5 ventanas muestra frecuencia cardíaca, calorías, distancia, tiempo, velocidad, peso y edad, e incluye 8 programas de entrenamiento. Tiene 1 año de garantía.",
    specs: [
      "Motor: 3,0 HP AC peak power",
      "Velocidad: 1,2 a 18 km/h",
      "Sistema de amortiguación: 6 amortiguadores elásticos",
      "Capacidad de uso: 150 kg",
      "Consola LCD de 5 ventanas",
      "Módulo multifunción: distancia, tiempo, velocidad, frecuencia cardíaca, calorías, peso y edad",
      "8 programas: entrenamiento 10 min, intervalo 1x1, caminata 30 min, tiempo, distancia, calorías, medio maratón 21 km y maratón 42 km",
      "Dimensiones (largo x ancho x alto): 190 x 77 x 144 cm",
      "Área de corrida: 136 x 45 cm",
      "Estructura de acero carbono con pintura electroestática",
      "Sistema de emergencia: sí · Inclinación: no",
      "Lubricación manual",
      "Uso profesional y residencial · 1 año de garantía",
    ],
    fotos: ["img/movement-lx160-1.jpg", "img/movement-lx160-promo.jpg"],
  },
  {
    codigo: "TG-22",
    marca: "Olmo",
    nombre: "Multigym Fit 44",
    categoria: "fuerza",
    precio: 325000,
    precioAnterior: 500000,
    condicion: "3 cuotas sin interés con tarjeta de crédito",
    etiqueta: "35% OFF",
    resumen: "Multigym para tren superior e inferior con pesas antiruido, peso graduable de a 5 kg y 6 meses de garantía.",
    descripcion: "El Olmo Fit 44 es un multigym completo para entrenar tren superior e inferior en un solo equipo: polea alta para dorsales, mariposa para pecho, banco Scott para bíceps, sillón de cuádriceps y femorales y polea baja con cadena. Está construido en caño de acero con pintura epoxi de alta resistencia, color negro, y sus pesas recubiertas en plástico funcionan con un sistema antiruido. El esfuerzo se gradúa de a 5 kg con un sistema de clavijas y produce una fuerza de tracción de 90 kg. Incluye manual de armado paso a paso; consultá por armado a domicilio o en el local.",
    specs: [
      "Marca Olmo, modelo Fit 44",
      "Multigym para tren superior e inferior",
      "Soporta 125 kg",
      "Fuerza de tracción: 90 kg",
      "Peso graduable y ajustable de a 5 kg con sistema de clavijas",
      "Sistema de pesas antiruido",
      "Pesas recubiertas con plástico de alta resistencia",
      "Construido en caño de acero con pintura epoxi de alta resistencia",
      "Color negro",
      "Guía de armado paso a paso; armado a domicilio o en el local (consultar)",
      "Garantía oficial: 6 meses",
      "Todas las tarjetas de crédito en 3 cuotas sin interés",
    ],
    fotos: ["img/olmo-fit44-1.jpg", "img/olmo-fit44-promo-2.jpg", "img/olmo-fit44-promo.jpg"],
  },
  {
    codigo: "TG-23",
    marca: "Body Skull",
    nombre: "Multigimnasio con prensa",
    categoria: "fuerza",
    precio: 1000500,
    condicion: "En 12 cuotas sin interés",
    etiqueta: "50 ejercicios",
    resumen: "Gimnasio completo en casa con 72 kg de pesas, prensa y banco Scott integrados. Más de 50 ejercicios.",
    descripcion: "El multigimnasio Body Skull es un gimnasio completo en casa: permite hacer 50 ejercicios para espalda, hombros, tríceps, bíceps, pecho, glúteos y piernas en un solo equipo. Tiene una carga de pesas de 72 kg para progresar en cada entrenamiento, sistema de poleas y cables reforzados para un movimiento fluido, y prensa y banco Scott integrados para trabajar piernas, bíceps y pecho. La estructura de hierro gris mantiene la estabilidad durante los ejercicios y el tapizado es marrón. Soporta usuarios de hasta 150 kg.",
    specs: [
      "Peso máximo del usuario: 150 kg",
      "Carga de pesas: 72 kg",
      "Estructura de hierro, color gris",
      "Tapizado marrón",
      "Sistema de poleas y cables reforzados",
      "Prensa y banco Scott integrados",
      "50 ejercicios disponibles",
      "Músculos: espalda, hombros, tríceps, bíceps, pecho, glúteos y piernas",
      "Uso recomendado: residencial",
    ],
    fotos: ["img/bodyskull-multigym-1.jpg", "img/bodyskull-multigym-promo.jpg"],
  },
  {
    codigo: "TG-24",
    marca: "Body Skull",
    nombre: "Rack multifuncional con poleas, banco y barra",
    categoria: "fuerza",
    precio: 820000,
    condicion: "En 12 cuotas sin interés",
    etiqueta: "Combo completo",
    fondoOscuro: true,
    resumen: "Jaula con sistema de poleas, banca multiángulo y barra olímpica de 2,2 m incluida. Uso residencial y profesional.",
    descripcion: "El rack multifuncional Body Skull es un combo completo para entrenar todo el cuerpo en casa o en el gimnasio. La jaula de hierro de alta calidad tiene sistema de poleas alta y baja con cables reforzados, barra de dominadas y estación de fondos. Incluye una banca multiángulo ajustable para trabajar pecho, hombros, brazos, espalda y abdomen, y una barra olímpica de 2,2 m. Permite sentadillas, press de banca, polea alta y baja, dominadas, fondos, curl de bíceps, remo y mucho más.",
    specs: [
      "Estructura de hierro de alta resistencia, color negro",
      "Sistema de poleas con cables reforzados de alta resistencia",
      "Banca multiángulo ajustable",
      "Barra olímpica de 2,2 m incluida",
      "Funciones: dominadas, sentadillas, press de banca, polea alta y baja, fondos, curl de bíceps, remo y más",
      "Dimensiones: largo 1,45 m · alto 2,12 m",
      "Peso aproximado: 85 kg",
      "Uso residencial y profesional",
    ],
    fotos: ["img/bodyskull-rack-1.jpg", "img/bodyskull-rack-promo.jpg"],
  },
  {
    codigo: "TG-25",
    marca: "Sonnos",
    nombre: "Prensa 45° a disco M100",
    categoria: "fuerza",
    precio: 2800000,
    condicion: "En 18 cuotas sin interés",
    etiqueta: "Uso profesional",
    fondoOscuro: true,
    resumen: "Prensa 45° de carga con discos para gimnasios. Rodillos de nylon con rodamientos blindados y estructura reforzada.",
    descripcion: "La Prensa 45° Sonnos M100 es un equipo profesional para el entrenamiento intensivo de piernas: trabaja cuádriceps, glúteos e isquiotibiales. Su diseño inclinado a 45° optimiza la biomecánica del movimiento para lograr mayor activación muscular y seguridad en cada repetición. Está fabricada con caño de acero de alta calidad, con regatones de caucho que evitan deslizamientos, y se desliza sobre rodillos de nylon con rodamientos blindados para un movimiento fluido, silencioso y con menor fricción. La carga es a disco, para progresar con flexibilidad. Ideal para gimnasios y entrenamientos de alto nivel.",
    specs: [
      "Marca Sonnos, modelo M100",
      "Diseño inclinado a 45°",
      "Carga a disco",
      "Trabaja cuádriceps, glúteos e isquiotibiales",
      "Estructura de caño de acero reforzada para uso profesional",
      "Rodillos de nylon con rodamientos blindados",
      "Movimiento fluido y silencioso, con menor fricción",
      "Regatones de caucho antideslizantes",
      "Uso profesional: ideal para gimnasios",
    ],
    fotos: ["img/sonnos-m100-1.jpg", "img/sonnos-m100-promo.jpg"],
  },
  {
    codigo: "TG-26",
    marca: "",
    nombre: "Barra de dominadas (torre de calistenia)",
    categoria: "fuerza",
    precio: 200000,
    condicion: null,
    etiqueta: "Capacidad 200 kg",
    resumen: "Torre para dominadas, fondos y abdominales suspendidos. Altura regulable en 9 niveles y capacidad de 200 kg.",
    descripcion: "Torre de dominadas para entrenar en casa con una estructura robusta, segura y ajustable. Sirve para dominadas, fondos, abdominales suspendidos, flexiones y más: ideal para fuerza, calistenia y fitness funcional. Está hecha en acero estructural rectangular de 50 x 50 mm con pintura epoxi electroestática, tiene agarraderas de neoprene antideslizantes y antiampollas, apoyabrazos acolchados en cuero ecológico y regatones antideslizantes. La altura se regula en 9 posiciones, de 148 a 211 cm. Incluye kit de instalación, tornillería, herramientas y manual.",
    specs: [
      "Capacidad máxima de carga: 200 kg",
      "Material: acero estructural rectangular 50 x 50 mm, espesor 1 mm",
      "Pintura epoxi electroestática resistente a golpes y corrosión",
      "Agarraderas de neoprene antideslizantes y antiampollas",
      "Apoyabrazos acolchados en cuero ecológico",
      "Ajuste de altura: 9 posiciones (mínimo 148 cm, máximo 211 cm)",
      "Medidas de la base: 66 cm de ancho x 91 cm de largo",
      "Peso total: 17 kg",
      "Regatones antideslizantes",
      "Incluye kit de instalación, tornillería, herramientas y manual",
    ],
    fotos: ["img/dominadas-1.jpg", "img/dominadas-promo.jpg"],
  },
  {
    codigo: "TG-27",
    marca: "MIR Fitness",
    nombre: "Mini tramp jumping",
    categoria: "jumping",
    precio: null,
    condicion: null,
    etiqueta: null,
    resumen: "Mini tramp para clases de jumping con cobertor protector en todo el borde. Consultá precio y disponibilidad.",
    descripcion: "Mini tramp MIR Fitness para clases de jumping y entrenamiento cardiovascular de bajo impacto. Tiene lona de salto gris con el logo de la marca y un cobertor negro que protege todo el borde y los resortes. Consultanos por precio, medidas y disponibilidad.",
    specs: [
      "Marca MIR Fitness",
      "Cobertor protector en todo el borde",
      "Ideal para clases de jumping",
    ],
    fotos: ["img/mini-tramp-mir-1.jpg"],
  },
  {
    codigo: "TG-28",
    marca: "",
    nombre: "Tatami encastrable de goma EVA",
    categoria: "pisos",
    precio: null,
    condicion: null,
    etiqueta: null,
    resumen: "Placas encastrables bicolor azul y rojo para artes marciales, funcional y salas de gimnasio. Consultá precio.",
    descripcion: "Tatami de goma EVA en placas encastrables bicolor (una cara azul y la otra roja), con superficie texturada antideslizante. Las placas se unen como un rompecabezas para cubrir salas de artes marciales, entrenamiento funcional o zonas de piso del gimnasio, y amortiguan caídas e impactos. Consultanos por medidas, espesor, precio y cantidad.",
    specs: [
      "Material: goma EVA",
      "Placas encastrables tipo rompecabezas",
      "Bicolor: azul y rojo (reversible)",
      "Superficie texturada antideslizante",
      "Ideal para artes marciales, funcional y salas de gimnasio",
    ],
    fotos: ["img/tatami-eva-1.jpg"],
  },
  {
    codigo: "TG-29",
    marca: "",
    nombre: "Cama de Pilates reformer completa",
    categoria: "pilates",
    precio: 227500,
    precioAnterior: 350000,
    condicion: null,
    etiqueta: "35% OFF",
    fondoOscuro: true,
    resumen: "Cama reformer de madera natural y estructura metálica, con resortes regulables y poleas. Plegable con ruedas.",
    descripcion: "Cama reformer de Pilates completa con base de madera natural, estructura metálica sólida, rieles deslizantes y carro acolchado antideslizante. Está diseñada para ofrecer un movimiento suave y estable, con resortes de tensión regulable para progresar en los ejercicios, poleas, correas con agarres y barra ajustable. Es plegable y tiene ruedas, así que se guarda en poco espacio. Ideal para Pilates clásico y contemporáneo, movilidad, elongación y equilibrio, rehabilitación suave y entrenamientos en casa o en estudios personales.",
    specs: [
      "Base de madera natural",
      "Estructura de metal sólida",
      "Carro acolchado con tapizado antideslizante",
      "Poleas deslizantes de movimiento suave",
      "Resortes de tensión regulable",
      "Barra ajustable",
      "Sistema plegable con ruedas",
      "Color: madera + negro",
      "Medidas: largo total 185 cm · largo hasta la base de apoyo 138 cm · ancho trasero 30 cm · ancho delantero 58 cm · alto máximo 50 cm",
      "Incluye: cama completa, caja de resortes, correas, poleas y agarres, barra ajustable, ruedas de transporte y manual de armado y mantenimiento",
    ],
    fotos: ["img/pilates-1.jpg", "img/pilates-promo.jpg"],
  },
];

const CATEGORIAS = [
  { id: "todos", nombre: "Todos" },
  { id: "cintas", nombre: "Cintas de correr" },
  { id: "spinning", nombre: "Bicicletas de spinning" },
  { id: "fijas", nombre: "Bicicletas fijas" },
  { id: "elipticos", nombre: "Elípticos" },
  { id: "remo", nombre: "Remo" },
  { id: "airbike", nombre: "Airbike" },
  { id: "fuerza", nombre: "Fuerza" },
  { id: "peso-libre", nombre: "Peso libre" },
  { id: "pilates", nombre: "Pilates" },
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
  return `<span class="price-box">${p.precioAnterior ? `<s class="price-old">${formatoPrecio(p.precioAnterior)}</s>` : ""}<span class="price">${formatoPrecio(p.precio)}</span>${p.condicion ? `<small>${escapar(p.condicion)}</small>` : ""}</span>`;
}

function renderGrid() {
  const q = busqueda.trim().toLowerCase();
  const lista = PRODUCTOS.filter((p) =>
    (filtroActivo === "todos" || p.categoria === filtroActivo) &&
    (!q || `${p.codigo} ${p.marca} ${p.nombre} ${p.resumen}`.toLowerCase().includes(q))
  );

  $("#grid").innerHTML = lista.map((p, i) => `
    <article class="card" style="animation-delay:${Math.min(i, 12) * 60}ms">
      <button class="card__media${p.fondoOscuro ? " card__media--dark" : ""}" data-detalle="${p.codigo}" aria-label="Ver detalle de ${escapar(p.nombre)}">
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
          <button class="btn btn--red btn--sm" data-agregar="${p.codigo}">Agregar al carrito</button>
          <button class="card__btn" data-detalle="${p.codigo}">Ver detalle</button>
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
      <div class="detail__main${p.fondoOscuro ? " detail__main--dark" : ""}"><img id="detailMain" src="${p.fotos[0]}" alt="${escapar(nombreCompleto(p))}" /></div>
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
      <button class="btn btn--red" data-agregar="${p.codigo}">Agregar al carrito</button>
    </div>`;
  $("#modal").hidden = false;
  document.body.style.overflow = "hidden";
  const hash = "#" + p.codigo.toLowerCase();
  if (location.hash !== hash) history.replaceState(null, "", hash);
  $("#modalClose").focus();
}

function cerrarDetalle() {
  if (/^#tg-\d+$/i.test(location.hash)) history.replaceState(null, "", location.pathname + location.search);
  $("#modal").hidden = true;
  if (!$("#cart").classList.contains("open")) document.body.style.overflow = "";
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

/* ---------------- Carrito ---------------- */
const CLAVE_CARRITO = "training-gimnasio-carrito";
let carrito = leerCarrito();

function leerCarrito() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE_CARRITO) || "[]");
    return Array.isArray(datos) ? datos.filter((i) => buscarProducto(i.codigo) && i.cantidad > 0) : [];
  } catch {
    return [];
  }
}

function guardarCarrito() {
  try { localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito)); } catch { /* sin almacenamiento: el carrito vive solo en esta visita */ }
}

function agregarAlCarrito(codigo) {
  const item = carrito.find((i) => i.codigo === codigo);
  if (item) item.cantidad += 1;
  else carrito.push({ codigo, cantidad: 1 });
  guardarCarrito();
  renderCarrito();
  aviso(`${nombreCompleto(buscarProducto(codigo))} se agregó al carrito`);
}

function cambiarCantidad(codigo, delta) {
  const item = carrito.find((i) => i.codigo === codigo);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) carrito = carrito.filter((i) => i.codigo !== codigo);
  guardarCarrito();
  renderCarrito();
}

function totalesCarrito() {
  let total = 0, sinPrecio = 0, unidades = 0;
  carrito.forEach((i) => {
    const p = buscarProducto(i.codigo);
    unidades += i.cantidad;
    if (tienePrecio(p)) total += p.precio * i.cantidad;
    else sinPrecio += 1;
  });
  return { total, sinPrecio, unidades };
}

function renderCarrito() {
  const { total, sinPrecio, unidades } = totalesCarrito();
  $("#cartCount").textContent = unidades;
  $("#cartCount").classList.toggle("is-empty", unidades === 0);
  if (!carrito.length) {
    $("#cartItems").innerHTML = `<p class="cart__empty">Tu carrito está vacío.<br />Agregá equipos desde el catálogo.</p>`;
    $("#cartFoot").hidden = true;
    mostrarPaso(1);
    return;
  }
  $("#cartFoot").hidden = false;
  $("#cartItems").innerHTML = carrito.map((i) => {
    const p = buscarProducto(i.codigo);
    return `
      <div class="cart-item">
        <img class="${p.fondoOscuro ? "is-dark" : ""}" src="${p.fotos[0]}" alt="${escapar(nombreCompleto(p))}" />
        <div class="cart-item__info">
          <p class="cart-item__name">${escapar(nombreCompleto(p))}</p>
          <p class="cart-item__price">${tienePrecio(p) ? formatoPrecio(p.precio * i.cantidad) : "Precio a consultar"}</p>
          ${p.condicion ? `<p class="cart-item__cond">${escapar(p.condicion)}</p>` : ""}
          <div class="qty">
            <button data-menos="${p.codigo}" aria-label="Quitar uno">−</button>
            <span>${i.cantidad}</span>
            <button data-mas="${p.codigo}" aria-label="Agregar uno">+</button>
          </div>
        </div>
        <button class="cart-item__remove" data-quitar="${p.codigo}" aria-label="Quitar del carrito">&times;</button>
      </div>`;
  }).join("");
  $("#cartTotal").textContent = formatoPrecio(total);
  $("#shipTotal").textContent = formatoPrecio(total) + (sinPrecio ? " + a consultar" : "");
  $("#cartNote").textContent = sinPrecio
    ? `${sinPrecio === 1 ? "Un producto tiene" : sinPrecio + " productos tienen"} precio a consultar y no se suma al total.`
    : "Precios de contado o según la condición de cada producto. Confirmamos stock y envío por WhatsApp.";
}

// Enlace público a la foto principal del producto (solo cuando la página está publicada en internet).
function urlFoto(p) {
  if (!/^https?:$/.test(location.protocol)) return "";
  try { return new URL(p.fotos[0], location.href).href; } catch { return ""; }
}

function mensajePedido(datos) {
  const { total, sinPrecio } = totalesCarrito();
  const lineas = carrito.map((i) => {
    const p = buscarProducto(i.codigo);
    const precio = tienePrecio(p) ? formatoPrecio(p.precio * i.cantidad) : "precio a consultar";
    const linea = `• ${i.cantidad} x ${p.codigo} ${nombreCompleto(p)} — ${precio}${p.condicion ? ` (${p.condicion.toLowerCase()})` : ""}`;
    const foto = urlFoto(p);
    return foto ? `${linea}\n   Foto: ${foto}` : linea;
  });
  const msg = [
    "¡Hola Training Gimnasio! Quiero realizar esta compra desde la página web:",
    "",
    "*PEDIDO*",
    ...lineas,
    `*Total: ${formatoPrecio(total)}${sinPrecio ? " + productos a consultar" : ""}*`,
    "Envío: gratuito",
  ];
  if (datos && datos.pago) msg.push(`*Forma de pago: ${datos.pago}*`);
  if (datos) {
    const dir = [datos.direccion, datos.depto].filter(Boolean).join(", ");
    msg.push(
      "",
      "*DATOS PARA EL ENVÍO*",
      `Nombre y apellido: ${datos.nombre}`,
      `Teléfono: ${datos.telefono}`,
      `DNI: ${datos.dni}`,
      ...(datos.email ? [`Email: ${datos.email}`] : []),
      `Dirección: ${dir}`,
      ...(datos.referencias ? [`Entre calles / referencias: ${datos.referencias}`] : []),
      `Localidad: ${datos.localidad}`,
      `Provincia: ${datos.provincia}`,
      `Código postal: ${datos.cp}`,
      ...(datos.comentarios ? ["", `Comentarios: ${datos.comentarios}`] : []),
    );
  }
  return msg.join("\n");
}

function linkWhatsapp(texto) {
  const numero = WHATSAPP_NUMERO.replace(/\D/g, "");
  if (numero && texto) return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  return WHATSAPP_LINK;
}

async function copiar(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = texto;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    area.remove();
    return ok;
  }
}

/* ---------- Paso 2: datos de envío ---------- */
const CLAVE_DATOS = "training-gimnasio-datos-envio";
const CAMPOS = ["nombre", "telefono", "dni", "email", "provincia", "localidad", "localidadOtra", "cp", "direccion", "depto", "referencias", "comentarios"];
const OBLIGATORIOS = ["nombre", "telefono", "dni", "provincia", "localidad", "cp", "direccion"];
const conNumero = () => WHATSAPP_NUMERO.replace(/\D/g, "") !== "";

function mostrarPaso(n) {
  $("#toast").classList.remove("show");
  $("#cartStep1").hidden = n !== 1;
  $("#cartStep2").hidden = n !== 2;
  $("#cart .cart__head h2").textContent = n === 1 ? "Tu carrito" : "Finalizar compra";
  $("#cart").scrollTop = 0;
  $("#cartStep2").scrollTop = 0;
}

function leerDatos() {
  const f = $("#cartStep2");
  const d = {};
  CAMPOS.forEach((c) => { d[c] = f.elements[c].value.trim().replace(/\s+/g, " "); });
  d.localidadElegida = d.localidad;
  if (d.localidad === OTRA) d.localidad = d.localidadOtra;
  const pago = f.querySelector('input[name="pago"]:checked');
  d.pago = pago ? pago.value : "";
  return d;
}

function validarDatos(d) {
  const f = $("#cartStep2");
  const errores = [];
  CAMPOS.forEach((c) => f.elements[c].classList.remove("invalid"));
  OBLIGATORIOS.forEach((c) => { if (!d[c]) errores.push(c); });
  if (d.localidadElegida === OTRA && !d.localidadOtra) errores.push("localidadOtra");
  if (d.telefono && d.telefono.replace(/\D/g, "").length < 8) errores.push("telefono");
  if (d.dni && !/^\d{7,8}$/.test(d.dni.replace(/\D/g, ""))) errores.push("dni");
  if (d.cp && !/^[A-Za-z]?\d{4}[A-Za-z]{0,3}$/.test(d.cp.replace(/\s/g, ""))) errores.push("cp");
  if (d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) errores.push("email");
  [...new Set(errores)].forEach((c) => f.elements[c].classList.add("invalid"));
  $("#payMethods").classList.toggle("invalid", !d.pago);
  if (!d.pago) errores.push("pago");
  return [...new Set(errores)];
}

function guardarDatos(d) {
  try { localStorage.setItem(CLAVE_DATOS, JSON.stringify(d)); } catch { /* sin almacenamiento */ }
}

function cargarDatos() {
  try {
    const d = JSON.parse(localStorage.getItem(CLAVE_DATOS) || "{}");
    const f = $("#cartStep2");
    ["nombre", "telefono", "dni", "email", "cp", "direccion", "depto", "referencias", "comentarios"].forEach((c) => {
      if (typeof d[c] === "string" && !f.elements[c].value) f.elements[c].value = d[c];
    });
    if (d.provincia && LOCALIDADES[d.provincia] && !f.elements.provincia.value) {
      f.elements.provincia.value = d.provincia;
      llenarLocalidades(d.provincia);
      if (LOCALIDADES[d.provincia].includes(d.localidad)) f.elements.localidad.value = d.localidad;
      else if (d.localidad) { f.elements.localidad.value = OTRA; f.elements.localidadOtra.value = d.localidad; }
      mostrarOtra();
    }
  } catch { /* nada guardado */ }
}

/* ---------- Provincias y localidades ---------- */
const OTRA = "__otra";
const LOCALIDADES = window.LOCALIDADES || {};

function opciones(lista) {
  return lista.map((n) => `<option value="${escapar(n)}">${escapar(n)}</option>`).join("");
}

function llenarProvincias() {
  $("#selProvincia").innerHTML = `<option value="">Elegí tu provincia</option>` + opciones(Object.keys(LOCALIDADES));
}

function llenarLocalidades(provincia) {
  const sel = $("#selLocalidad");
  const lista = LOCALIDADES[provincia];
  if (!lista) {
    sel.innerHTML = `<option value="">Primero elegí la provincia</option>`;
    sel.disabled = true;
    return;
  }
  sel.innerHTML = `<option value="">Elegí tu localidad</option>` + opciones(lista) +
    `<option value="${OTRA}">Mi localidad no está en la lista</option>`;
  sel.disabled = false;
}

function mostrarOtra() {
  const otra = $("#selLocalidad").value === OTRA;
  $("#otraLocalidadWrap").hidden = !otra;
  if (!otra) $("#cartStep2").elements.localidadOtra.value = "";
}

$("#selProvincia").addEventListener("change", (e) => {
  llenarLocalidades(e.target.value);
  mostrarOtra();
});
$("#selLocalidad").addEventListener("change", () => {
  mostrarOtra();
  if ($("#selLocalidad").value === OTRA) $("#cartStep2").elements.localidadOtra.focus();
});
llenarProvincias();

$("#cartNext").addEventListener("click", () => {
  if (!carrito.length) return;
  cargarDatos();
  mostrarPaso(2);
  $("#cartStep2").elements.nombre.focus();
});
$("#cartBack").addEventListener("click", () => mostrarPaso(1));
$("#cartStep2").addEventListener("submit", (e) => { e.preventDefault(); $("#cartCheckout").click(); });
$("#cartStep2").addEventListener("change", (e) => { if (e.target.tagName === "SELECT") e.target.classList.remove("invalid"); });
$("#cartStep2").addEventListener("input", (e) => {
  if (e.target.name === "pago") {
    $("#payMethods").classList.remove("invalid");
    if (!$("#cartStep2").querySelector(".invalid")) $("#shipError").textContent = "";
  }
  else if (e.target.classList) e.target.classList.remove("invalid");
});

// El botón es un enlace: si faltan datos se cancela; si está todo, se arma el mensaje y se abre WhatsApp.
$("#cartCheckout").addEventListener("click", (e) => {
  const link = e.currentTarget;
  if (!carrito.length) { e.preventDefault(); return mostrarPaso(1); }
  const d = leerDatos();
  const errores = validarDatos(d);
  if (errores.length) {
    e.preventDefault();
    $("#shipError").textContent = errores.length === 1 && errores[0] === "pago"
      ? "Elegí cómo vas a pagar: transferencia, tarjeta de débito o tarjeta de crédito."
      : "Revisá los campos marcados: completá todos los datos obligatorios (*) y elegí la forma de pago.";
    const primero = errores[0] === "pago" ? $("#payMethods input") : $("#cartStep2").elements[errores[0]];
    primero.focus();
    return;
  }
  $("#shipError").textContent = "";
  guardarDatos(d);
  const texto = mensajePedido(d);
  link.href = linkWhatsapp(texto);
  if (!conNumero()) {
    copiar(texto).then((ok) => aviso(ok
      ? "Copiamos tu pedido con tus datos: pegalo en el chat de WhatsApp y envialo."
      : "Se abrió WhatsApp: contanos qué productos elegiste y tus datos de envío."));
  } else {
    aviso("¡Listo! Enviá el mensaje en WhatsApp para confirmar tu compra.");
  }
});

function abrirCarrito() {
  mostrarPaso(1);
  $("#cart").classList.add("open");
  $("#cart").setAttribute("aria-hidden", "false");
  $("#cartOverlay").hidden = false;
  document.body.style.overflow = "hidden";
}

function cerrarCarrito() {
  $("#cart").classList.remove("open");
  $("#cart").setAttribute("aria-hidden", "true");
  $("#cartOverlay").hidden = true;
  if ($("#modal").hidden) document.body.style.overflow = "";
}

let avisoTimer;
function aviso(texto) {
  const t = $("#toast");
  t.textContent = texto;
  t.classList.add("show");
  clearTimeout(avisoTimer);
  avisoTimer = setTimeout(() => t.classList.remove("show"), 3500);
}

document.addEventListener("click", (e) => {
  const det = e.target.closest("[data-detalle]");
  if (det) return abrirDetalle(det.dataset.detalle);
  const add = e.target.closest("[data-agregar]");
  if (add) {
    agregarAlCarrito(add.dataset.agregar);
    if (!$("#modal").hidden) cerrarDetalle();
    return;
  }
  const mas = e.target.closest("[data-mas]");
  if (mas) return cambiarCantidad(mas.dataset.mas, 1);
  const menos = e.target.closest("[data-menos]");
  if (menos) return cambiarCantidad(menos.dataset.menos, -1);
  const quitar = e.target.closest("[data-quitar]");
  if (quitar) return cambiarCantidad(quitar.dataset.quitar, -Infinity);
});

$("#cartOpen").addEventListener("click", abrirCarrito);
$("#contactCart").addEventListener("click", abrirCarrito);
$("#cartClose").addEventListener("click", cerrarCarrito);
$("#cartOverlay").addEventListener("click", cerrarCarrito);
$("#cartClear").addEventListener("click", () => { carrito = []; guardarCarrito(); renderCarrito(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && $("#cart").classList.contains("open")) cerrarCarrito(); });
$("#contactWhatsapp").href = WHATSAPP_LINK;
$("#waFloat").href = WHATSAPP_LINK;

$("#menuToggle").addEventListener("click", () => $("#nav").classList.toggle("open"));
$("#nav").addEventListener("click", (e) => { if (e.target.tagName === "A") $("#nav").classList.remove("open"); });
window.addEventListener("scroll", () => $("#header").classList.toggle("scrolled", window.scrollY > 10), { passive: true });

/* ---------------- Inicio ---------------- */
$("#year").textContent = new Date().getFullYear();
$("#statCount").textContent = PRODUCTOS.length;
renderFiltros();
renderGrid();
renderTabla();
renderCarrito();
$("#shipHelp").textContent = conNumero()
  ? "Se abre WhatsApp con tu pedido y tus datos ya escritos. Solo tenés que tocar enviar."
  : "Se abre WhatsApp y copiamos tu pedido con tus datos: pegalo en el chat y envialo.";

/* Enlace directo a un producto: https://traininggimnacio.netlify.app/#tg-29 abre su detalle */
function abrirDesdeEnlace() {
  const m = location.hash.match(/^#(tg-\d+)$/i);
  if (m && buscarProducto(m[1].toUpperCase())) abrirDetalle(m[1].toUpperCase());
}
window.addEventListener("hashchange", abrirDesdeEnlace);
abrirDesdeEnlace();
