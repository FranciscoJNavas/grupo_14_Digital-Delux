-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: digital_delux_db
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Apple'),(2,'Samsung'),(3,'Longvie'),(4,'Atma'),(5,'Moulinex'),(6,'Philips'),(7,'Lenovo'),(8,'Sony');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Celulares'),(2,'Computación'),(3,'Televisores'),(4,'Otros');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `features` longtext NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `description` longtext NOT NULL,
  `price` double NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `section_of_site_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Iphone 11','* Pantalla LCD Liquid Retina HD de 6.1 pulgadas. \r\n* Clasificación IP68 de resistencia al agua y al polvo (hasta 30 minutos a una profundidad máxima de 2 metros). \r\n* Sistema de dos cámaras de 12 MP (ultra gran angular y gran angular) con modo Noche, modo Retrato y video 4K de hasta 60 cps.\r\n* Cámara frontal TrueDepth de 12 MP con modo Retrato, video 4K y video en cámara lenta.\r\n* Face ID para una autenticación segura y Apple Pay.\r\n* Chip A13 Bionic con Neural Engine de tercera generación.\r\n* Carga rápida.\r\n* Carga inalámbrica. \r\n* iOS 14 con widgets rediseñados en la pantalla de inicio, nueva Biblioteca de Apps, App Clips y mucho más.','imageProduct-1667321797431.jpg','Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. \r\nToma grandes fotos con poca luz gracias al modo Noche. \r\nDisfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas \r\nAprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. \r\nHaz mucho más sin necesidad de volver a cargar el teléfono gracias a su batería de larga duración. \r\nY no te preocupes si se moja, el iPhone 11 tiene una resistencia al agua de hasta 30 minutos a una profundidad máxima de 2 metros.',226000,10,1,1,1),(2,'Notebook Lenovo Ryzen 3','* Memoria RAM--> 8 GB\r\n* Tamaño de la pantalla--> 15.6 \"\r\n* Tipo de resolución--> HD\r\n* Con pantalla táctil-->No\r\n* Con lector de huella digital-->No','imageProduct-1667353081941.jpg','Esta notebook es ideal para que hagas todas tus tareas cotidianas. Su procesador AMD Ryzen 3 de 2 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar.\r\nSu pantalla LED antirreflejo de 15.6\" y 1366 x 768 px de resolución te brindará colores más vivos y definidos. \r\nTus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\r\nPotente disco sólido, el disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.\r\nUn procesador exclusivo para los gráficos, su placa de video AMD Radeon Vega 3 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.',175000,15,2,2,7),(3,'Licuadora Moulinex Powermix Plus','* Es industrial-->No\r\n* Con cuchilla de acero inoxidable-->Sí\r\n* Potencia--> 700 W\r\n* Con display digital--> No','imageProduct-1667322058775.jpg','Un electrodoméstico infaltable en tu casa. \r\nLa licuadora Moulinex LM284858 te va a ayudar a obtener resultados increíbles en todo lo que prepares, ya sea que quieras disfrutar de una bebida bien fría, de salsas y sopas, o de postres deliciosos. ¡Tenela siempre a mano!\r\nPráctica y segura.\r\nSu función pulsar te permite poner en marcha el producto de forma intermitente según lo necesites o de acuerdo al contenido de la jarra. Su cierre de seguridad impide accidentes por descuidos y preserva la limpieza de tu cocina al evitar derrames.',11000,10,4,3,5),(4,'Samsung Galaxy S20','* Pantalla --> 6.2\", 1440 x 3200 pixels\r\n* Procesador--> Exynos 990 2.73GHz\r\n* RAM --> 8GB\r\n* Almacenamiento--> 128GB\r\n* Expansión--> microSD\r\n* Cámara--> Triple, 12MP+64MP+12MP\r\n* Batería--> 4000 mAh\r\n* OS--> Android 10\r\n* Perfil--> 7.9 mm\r\n* Peso--> 163 g','imageProduct-1667322183314.jpg','El Samsung Galaxy S20 es el nuevo flagship para el 2020 de la serie Galaxy S de Samsung. \r\nCon una pantalla QHD+ de 6.2 pulgadas y tasa de refresco de 120 Hz, el Galaxy S20 está potenciado por un procesador un procesador Exynos 990 en su versión internacional. \r\nEl Galaxy S20 cuenta con 8GB de memoria RAM y 128GB de almacenamiento interno, expandible vía microSD. \r\nLa cámara posterior del Galaxy S20 es triple, con una configuración 12 MP + 12 MP + 64 MP, mientras que la cámara para selfies es de 10 megapixels. \r\nCompletando las características del Galaxy S20 encontramos un lector de huellas integrado en la pantalla, batería de 4000 mAh con soporte para carga rápida e inalámbrica, parlantes stereo de AKG y corre One UI 2 basado en Android 10.',120000,10,1,2,2),(5,'Smart TV Samsung Series 5','* Su resolución es Full HD.\r\n* Tecnología HDR para una calidad de imagen mejorada.\r\n* Modo de sonido-->  Dolby Digital Plus.\r\n* Tiene función Screen Share.\r\n* Con Web browser, Netflix, Prime Video, Apple TV, Hulu, Vudu, Disney+, ESPN, Samsung TV Plus, Samsung Health, YouTube TV, Gallery, Google Play Movies & TV, SmartThings, YouTube.\r\n* Control LG Magic Remote no incluido.\r\n* Sistema operativo Tizen.\r\n* Conectá tus dispositivos mediante sus 2 puertos HDMI y su puerto USB.\r\n* Dimensiones--> 979.9mm de ancho, 571.9mm de alto, 77.3mm de profundidad.\r\n* Entretenimiento y conectividad en un mismo lugar.','imageProduct-1667322268091.jpg','Samsung es reconocida a nivel mundial como una empresa líder en la industria tecnológica. \r\nTodos sus productos son diseñados con una calidad superior y pensados para contribuir a un futuro mejor. \r\nPor eso, va a hacer que disfrutes de una experiencia visual incomparable.\r\nCon el Smart TV UN43T5300AG vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. \r\nAdemás, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.',86000,10,3,2,2),(6,'Lavarropas automático Longvie','* Carga frontal de 8 kg.\r\n* Incluye 15 programas.\r\n* Centrifuga a una velocidad de 1000 rpm.\r\n* Apto para lavar con agua a diversas temperaturas.\r\n* Tambor de acero inoxidable y filtro atrapa pelusas.\r\n* Eficiencia energética A+++.\r\n* Las imágenes pueden ser ilustrativas.\r\n* Comodidad y practicidad para tu hogar.','imageProduct-1667322344751.jpg','El lavarropas Longvie L18010 hará que el lavado diario sea más sencillo. \r\nEvitará los residuos de jabón, dejará tu ropa impecable sin dañarla y te permitirá ahorrar tiempo.\r\nTrabaja solo, únicamente necesita que se introduzcan los productos de limpieza y se elija el programa deseado. \r\nA diferencia de los semiautomáticos, no requiere que estés presente en todas las etapas del proceso, por lo que vas a tener prendas limpias y perfumadas sin esfuerzo.',130000,15,4,3,3),(7,'Apple iPad (9ª generación) 10.2\" Wi-Fi 64GB','* Increíble pantalla Retina de 10.2 pulgadas con True Tone.\r\n* Chip A13 Bionic con Neural Engine.\r\n* Cámara trasera gran angular de 8 MP y cámara frontal ultra gran angular de 12 MP con Encuadre Centrado.\r\n* Hasta 64 GB de almacenamiento.\r\n* Bocinas estéreo.\r\n* Touch ID para una autenticación segura y Apple Pay.\r\n* Wi-Fi 802.11ac.\r\n* Hasta 10 horas de batería.\r\n* Conector Lightning para cargar el iPad mini y para conectar accesorios.\r\n* Compatible con el Apple Pencil (primera generación) y el Smart Keyboard.\r\n* iPadOS 15 es tan poderoso como fácil de usar y está diseñado para la versatilidad del iPad.','imageProduct-1667339655977.jpg','Lleno de potencia, muy fácil de usar y versátil. \r\nEl nuevo iPad viene con una espectacular pantalla Retina de 10.2 pulgadas, el potente chip A13 Bionic y una cámara frontal ultra gran angular con Encuadre Centrado. \r\nAdemás, es compatible con el Apple Pencil y el Smart Keyboard.\r\nCon el iPad, harás de todo como si nada. Y por menos de lo que imaginas.\r\nAvisos legales,\r\nLas apps están disponibles en el App Store. La disponibilidad de títulos está sujeta a cambios.\r\nLos accesorios se venden por separado. La compatibilidad varía según la generación.\r\nLa duración de la batería varía según el uso y la configuración.',99999,15,2,1,1),(9,'Smart TV Samsung Series 5 UN43T5300AGCZB LED Full HD 43\" 220V - 240V','* Su resolución es Full HD.\r\n* Tecnología HDR para una calidad de imagen mejorada.\r\n* Modo de sonido-->  Dolby Digital Plus.\r\n* Tiene función Screen Share.\r\n* Con Web browser, Netflix, Prime Video, Apple TV, Hulu, Vudu, Disney+, ESPN, Samsung TV Plus, Samsung Health, YouTube TV, Gallery, Google Play Movies & TV, SmartThings, YouTube.\r\n* Control LG Magic Remote no incluido.\r\n* Sistema operativo Tizen.\r\n* Conectá tus dispositivos mediante sus 2 puertos HDMI y su puerto USB.\r\n* Dimensiones--> 979.9mm de ancho, 571.9mm de alto, 77.3mm de profundidad.\r\n* Entretenimiento y conectividad en un mismo lugar.','imageProduct-1669917430550.jpg','Samsung es reconocida a nivel mundial como una empresa líder en la industria tecnológica. \r\nTodos sus productos son diseñados con una calidad superior y pensados para contribuir a un futuro mejor. \r\nPor eso, va a hacer que disfrutes de una experiencia visual incomparable.\r\nCon el Smart TV UN43T5300AG vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. \r\nAdemás, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.',86000,20,3,2,2),(11,'Joystick inalámbrico Double motor Vibration 4 Wireless controller negro','* Es inalámbrico--> Sí\r\n* Con Bluetooth--> Sí\r\n* Con detección de movimiento--> Sí\r\n* Con vibración--> Sí','imageProduct-1669917136404.jpg','Control preciso.\r\nEste mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. \r\nGracias a su ergonomía especialmente pensada para la posición de tu mano, podés pasar horas jugando con total confort.\r\nMayor comodidad y realismo, te permite jugar sin necesidad de que haya cables de por medio. \r\nEstá pensado no solamente para controlar mejor tus videojuegos, sino también para aumentar su realismo y experiencia.\r\nActivá el Bluetooth.\r\nCuenta con conexión Bluetooth de alta tecnología para usarlo en cualquier ordenador o dispositivo; ya no necesitarás de aplicaciones de terceros ni cable USB. Además, posee gran capacidad antiinterferente, fácil manejo y señal de conexión estable.\r\n',6000,5,4,3,8),(12,'Horno de mesa eléctrico Black+Decker TO7000 67L plateado 220V','* Capacidad de 67L.\r\n* Función de cocción--> espiedo.\r\n* Termostato para control de temperatura y función de timer.\r\n* 4 estantes que permiten cocinar varios alimentos en simultáneo.\r\n* Accesorios incluidos--> kit para espiedo, 1 bandeja antiadherente, 1 rejilla, 1 agarradera para espiedo.\r\n* Cómodo y fácil de usar.','imageProduct-1669917324113.jpg',' Espacio reducido, cocción óptima.\r\nSi tu cocina es pequeña, el horno de mesa es la mejor solución. \r\nVas a disfrutar de las mismas ventajas que con uno convencional y ganarás practicidad y comodidad.\r\nQue no se te pase, el timer programable te va a ayudar a graduar los minutos indicados. \r\nAdemás, con el termostato ajustable vas a poder manejar el calor adecuado y lograr el punto justo.\r\nA su vez, con la función de spiedo las carnes estarán doradas por fuera y jugosas por dentro. \r\nRostizá pollo o cerdo en su punto justo con gran facilidad.',46400,15,4,1,3),(13,'Tostadora  TO 4005 roja 220V - 240V','* Renová tus comidas y lucite en el hogar.\r\n* Complemento ideal para desayunos y meriendas.\r\n* Con capacidad para 2 rebanadas.\r\n* Potencia de 750W.\r\n* Cuenta con 7 niveles de tostado.\r\n* Dispone de bandeja recoge migas.','imageProduct-1670190807411.png','¿Te acordás del clásico aroma a tostadas recién hechas en la casa de la abuela? ¿Qué tal un gran desayuno de pan tostado con manteca y mermelada? \r\nCon la tostadora Ultracomb TO 4005 te asegurarás un resultado parejo y crujiente. \r\nPreparar colaciones será una tarea sencilla y práctica.\r\n¡Hacelas con tus ingredientes favoritos! Además, su diseño elegante y funcional destacará en tu cocina.\r\nLimpia y versátil.\r\nCuenta con una bandeja incorporada que recoge las migas y la deja lista para su próximo uso, a la vez que te ayuda a mantener la limpieza del lugar.',5199,10,1,2,5),(14,'Sandwichera Electrica Antiadherente Tostadora De Pan','* Potencia--> 900 W\r\n* Tipos de placas--> Antiadherentes\r\n* Tipo de alimentación--> 220v\r\n* Con superficie antiadherente--> Sí','imageProduct-1670190894069.jpg','• Precalentamiento en 3 min.\r\n• Luz de encendido.\r\n• Luz indicadora de unidad lista.\r\n• Manija de seguridad.\r\n• Sándwiches listos en 2-3min.\r\n• Voltaje 220V/50hz.\r\n• Potencia 900watts.\r\n• Cable de 90cm.',4999,10,4,3,2),(15,'Aspiradora Robot Inteligente Automática Trapeadora Giroscopica Femmto Negro Rvc000004','* Aspira alfombras a la perfección.\r\n* Deja los espacios libres de pelo de mascotas.\r\n* Cuenta con conexión wifi.\r\n* Tiene sensor de obstáculos y anticaída.\r\n* Emplea filtros HEPA para evitar ácaros y otros alérgenos.\r\n* La batería dura 120 m.\r\n* Su potencia es de 20 W.\r\n* Ahorrá tiempo en las tareas del hogar de manera simple y efectiva.\r\n* La duración de la batería depende del uso que se le dé al producto.','imageProduct-1670191004557.jpg','Aspiradora Robot Inteligente Femmto Trapeadora.\r\n Limpia Pisos, tiene Control Remoto Con App Para Uso Móvil.\r\nRecibí Gratis! Mopa X2 (Una de Repuesto), Adaptador de carga, Base de carga automática, Cepillos laterales X4 (Dos de Repuesto) y Cepillo de limpieza X 1',55900,4,4,1,2),(16,'Aire acondicionado Silent Air split frío/calor 4500 frigorías blanco 220V BS52WCCR','* Capacidad de refrigeración de 5200W.\r\n* Capacidad de calefacción de 5200 W.\r\n* Frigorías--> 4500.\r\n* Potencia de refrigeración de 1560W y de calefacción de 1560W.\r\n* Eficiencia energética--> A.\r\n* Con función deshumidificación.\r\n* Tiene temporizador.\r\n* Cuenta con función de dormir.\r\n* Incluye control remoto.\r\n* Dimensiones de la unidad externa--> 80.5cm de ancho x 61.5cm de alto x 37cm de profundidad.\r\n* Dimensiones de la unidad interna--> 96.5cm de ancho x 31.9cm de alto x 21.5cm de profundidad.\r\n* Elegí la mejor opción para disfrutar de cada temporada del año.','imageProduct-1670191221637.png','Diseño adecuado a tus espacios.\r\nEl tipo de aire split es de bajo consumo energético, de fácil mantenimiento y sumamente silencioso ya que cuenta con una unidad exterior.\r\nReducción de humedad, el deshumidificador absorbe el agua del aire y disminuye la molesta humedad, creando un ambiente confortable y de calidad.\r\nProgramá de acuerdo a tus necesidades.\r\nCuando las personas descansan su temperatura corporal baja gradualmente. Por eso, este aire cuenta con la función sleep, que hace que la temperatura del ambiente aumente a medida que pasa el tiempo. No tendrás que levantarte a apagarlo y podrás disfrutar de un sueño placentero.\r\n',200000,2,4,2,2),(17,'Tablet Samsung Galaxy A7 Lite SM-T225 8.7\" con red móvil 32GB gris y 3GB de memoria RAM','* Sistema operativo--> Android 11.0.\r\n* Con procesador 2 Quad-Core Cortex-A53 de 2.3GHz.\r\n* Resolución de pantalla de 1340px x 800px.\r\n* Con lector micro-SD, micro-SDxc.\r\n* Reproducciones en Full HD.\r\n* Cuenta con GPS.\r\n* Memoria interna expandible hasta 1 TB con fuente externa.\r\n* Incluye cable USB-c.\r\n* Diseñada para llevar a todas partes.\r\n* Pesa tan solo 371g.\r\n* La duración de la batería depende del uso que se le dé al producto.','imageProduct-1670191338283.jpg','Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. \r\nEl diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad.\r\nTransferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. \r\nSus conexiones 4g lte, wi-fi, wi-fi direct, bluetooth, usb-c te permiten potenciar sus funciones al máximo.\r\nGracias a su cámara principal de 8 Mpx y frontal de 2 Mpx, podrás hacer videollamadas o sacarte fotos en cualquier momento y lugar, con una excelente calidad de imagen. Nitidez, brillo y colores vibrantes harán que tus experiencias se reflejen de manera óptima.\r\n',70500,10,4,3,2),(18,'Apple iPhone 14 (128 GB)','* Pantalla Super Retina XDR de 6.1 pulgadas.\r\n* Sistema avanzado de cámaras para tomar mejores fotos en cualquier condición de luz.\r\n* Modo Cine ahora en 4K Dolby Vision de hasta 30cps.\r\n* Modo Acción para lograr videos estables, aún con cámara en mano.\r\n* Detección de Choques, una funcionalidad de seguridad que pide ayuda cuando tú no puedes.\r\n* Batería para todo el día y hasta 26 horas de reproducción de vídeo.\r\n* A15 Bionic, con GPU e 5 núcleos para un rendimiento fuera de serie. Red 5G ultrarrápida.\r\n* Ceramic Shield y resistencia al agua, características de durabilidad líderes en la industria.\r\n* iOS 16 ofrece aún más opciones de personalización y más formas de comunicarse y compartir.','imageProduct-1670191447383.jpg','El iPhone 14 viene con el sistema de dos cámaras más impresionante en un iPhone, para que tomes fotos espectaculares con mucha o poca luz. \r\nY te da más tranquilidad gracias a una funcionalidad de seguridad que salva vidas.\r\nAviso legal,\r\nLa pantalla tiene las esquinas redondeadas. Si se mide en forma de rectángulo, la pantalla tiene 6.06 pulgadas en diagonal. El área real de visualización es menor.\r\nLa funcionalidad Emergencia SOS usa conexión celular o llamadas por Wi-Fi.\r\nLa duración de la batería varía según el uso y la configuración.\r\nSe requiere un plan de datos. 5G está disponible en algunos mercados y a través de operadores específicos. Las velocidades varían según las condiciones del lugar y el operador.\r\nEl iPhone 14 es resistente a las salpicaduras, al agua y al polvo, y fue probado en condiciones de laboratorio controladas, con una clasificación IP68 según la norma IEC 60529 (hasta 30 minutos a una profundidad máxima de 6 metros). La resistencia a las salpicaduras, al agua y al polvo no es una condición permanente, y podría disminuir como consecuencia del uso normal. No intentes cargar un iPhone mojado; consulta el manual del usuario para ver las instrucciones de limpieza y secado. La garantía no cubre daños producidos por líquidos.\r\nAlgunas funcionalidades podrían no estar disponibles en todos los países o áreas.',494500,2,1,2,1),(19,'Multirallador Moulinex Fresh Express Dj755gar Para Verduras Color Rojo','Modelo-->DJ755GAR\r\nPotencia--> 200 W','imageProduct-1670191546703.jpg','A la hora de elaborar tus platos favoritos, todas tus necesidades estarán cubiertas fácilmente con esta multiprocesadora Moulinex.\r\nDescubrí una nueva forma de cocinar y sorprendé a tu familia con las preparaciones más ricas. \r\nEste electrodoméstico logrará transformar los alimentos en el menor tiempo y se convertirá en tu ayudante imprescindible en la cocina.',16000,3,4,3,5),(20,'Auriculares in-ear inalámbricos Samsung Wave 100TWS black','* Cuenta con tecnología True Wireless.\r\n* La batería dura 5 h.\r\n* Modo manos libres incluido.\r\n* Asistentes de voz integrados--> Google Assistant, Bixby y Siri.\r\n* Con estuche de carga inalámbrica.\r\n* Con micrófono incorporado.\r\n* Sonido superior y sin límites.\r\n* Cómodos y prácticos.\r\n* La duración de la batería depende del uso que se le dé al producto.','imageProduct-1670191679724.jpg','El formato perfecto para vos. Al ser in-ear, mejoran la calidad del audio y son de tamaño pequeño para poder insertarse en tu oreja. \r\nSon ideales para acompañarte a la hora de hacer ejercicio mientras te sumergís en el mejor sonido envolvente.\r\nWireless al 100%, a diferencia de otras conectividades, este dispositivo está fabricado con tecnología TWS (True Wireless Stereo). \r\nLa misma permite una conexión inalámbrica total y funciona sin un solo cable entre pares. Con ella podrás disfrutar del entorno sonoro sin necesidad de estar pendiente de conexiones físicas.\r\n',11499,9,4,2,2),(21,'Notebook Lenovo Ryzen 3','* Memoria RAM--> 8 GB\r\n* Tamaño de la pantalla--> 15.6 \"\r\n* Tipo de resolución--> HD\r\n* Con pantalla táctil-->No\r\n* Con lector de huella digital-->No','imageProduct-1670191816875.jpg','Esta notebook es ideal para que hagas todas tus tareas cotidianas. Su procesador AMD Ryzen 3 de 2 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar.\r\nSu pantalla LED antirreflejo de 15.6\" y 1366 x 768 px de resolución te brindará colores más vivos y definidos. \r\nTus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\r\nPotente disco sólido, el disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.\r\nUn procesador exclusivo para los gráficos, su placa de video AMD Radeon Vega 3 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.\r\nMarca: Lenovo',172500,8,2,3,7),(22,'Samsung Galaxy S20','* Pantalla --> 6.2\", 1440 x 3200 pixels\r\n* Procesador--> Exynos 990 2.73GHz\r\n* RAM --> 8GB\r\n* Almacenamiento--> 128GB\r\n* Expansión--> microSD\r\n* Cámara--> Triple, 12MP+64MP+12MP\r\n* Batería--> 4000 mAh\r\n* OS--> Android 10\r\n* Perfil--> 7.9 mm\r\n* Peso--> 163 g','imageProduct-1670191903749.jfif','El Samsung Galaxy S20 es el nuevo flagship para el 2020 de la serie Galaxy S de Samsung. \r\nCon una pantalla QHD+ de 6.2 pulgadas y tasa de refresco de 120 Hz, el Galaxy S20 está potenciado por un procesador un procesador Exynos 990 en su versión internacional. \r\nEl Galaxy S20 cuenta con 8GB de memoria RAM y 128GB de almacenamiento interno, expandible vía microSD. \r\nLa cámara posterior del Galaxy S20 es triple, con una configuración 12 MP + 12 MP + 64 MP, mientras que la cámara para selfies es de 10 megapixels. \r\nCompletando las características del Galaxy S20 encontramos un lector de huellas integrado en la pantalla, batería de 4000 mAh con soporte para carga rápida e inalámbrica, parlantes stereo de AKG y corre One UI 2 basado en Android 10.\r\nMarca: Samsung ',120000,2,1,1,2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `section_of_site`
--

DROP TABLE IF EXISTS `section_of_site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `section_of_site` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section_of_site`
--

LOCK TABLES `section_of_site` WRITE;
/*!40000 ALTER TABLE `section_of_site` DISABLE KEYS */;
INSERT INTO `section_of_site` VALUES (1,'Novedades'),(2,'Destacado'),(3,'Oferta');
/*!40000 ALTER TABLE `section_of_site` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_product`
--

DROP TABLE IF EXISTS `user_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `buyer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_product`
--

LOCK TABLES `user_product` WRITE;
/*!40000 ALTER TABLE `user_product` DISABLE KEYS */;
INSERT INTO `user_product` VALUES (1,1,1,NULL),(2,1,2,NULL),(3,1,3,NULL),(4,2,4,NULL),(5,2,5,NULL),(6,2,6,NULL),(7,3,7,NULL),(9,6,9,NULL),(11,6,11,NULL),(12,6,12,NULL),(13,6,13,NULL),(14,6,14,NULL),(15,6,15,NULL),(16,6,16,NULL),(17,6,17,NULL),(18,6,18,NULL),(19,6,19,NULL),(20,6,20,NULL),(21,6,21,NULL),(22,6,22,NULL);
/*!40000 ALTER TABLE `user_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `dni` bigint(10) unsigned NOT NULL,
  `date_of_birth` date NOT NULL,
  `role` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'navas.francisco.j@gmail.com','$2a$10$E9ZrIyO1PHD4uxQEU2oR5uHT.yfzvLaMI.fwjLyeaDmb7DCoqTTny','Francisco','Navas','default-user.jpg',33630169,'1988-09-14',1),(2,'jorgegarcia143@gmail.com','$2a$10$txt19O.v9EZ5xdac59QEc.E4v3b6S6zGxGt1LXW1WtMWgz3l3ZiRS','Jorge','Garcia','default-user.jpg',34192766,'1988-12-27',1),(3,'micaweiss@mail.com','$2a$10$7G2sMeNI2X0dORbXkrxtC.X8quQmB12buQSFLe39EA8ZlGCm2LYVW','Micaela','Weiss','default-user.jpg',40557766,'2002-02-15',1),(4,'luliguelman@outlook.com','$2a$10$D7EewY.dODzRv1rW8Bnl8OlrqJtxaOPCXmW4snl4T8ny5AI6cjVk6','Lucila','Guelman','default-user.jpg',40993322,'2002-05-16',1),(5,'juandiegotamayo@gmail.com','$2a$10$jZmGW1BB5WOmYBNF9fMR3uloD1RVXx73u.08ZKa/KDZA1.2ustV3e','Juan Diego','Tamayo','default-user.jpg',42775588,'2004-08-06',1),(6,'micaweiss@gmail.com','$2a$10$6soyfGtTQ.UK6JjLouXFCO/fK9eBLmHTM2MqoQMdHjCGnhE7L2WlK','Micaela','Weiss','default-user.jpg',43920193,'2002-02-22',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-04 19:24:19
