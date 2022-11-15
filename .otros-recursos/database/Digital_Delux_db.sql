CREATE DATABASE  IF NOT EXISTS `digital_delux_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `digital_delux_db`;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Iphone 11','* Pantalla LCD Liquid Retina HD de 6.1 pulgadas. \r\n* Clasificación IP68 de resistencia al agua y al polvo (hasta 30 minutos a una profundidad máxima de 2 metros). \r\n* Sistema de dos cámaras de 12 MP (ultra gran angular y gran angular) con modo Noche, modo Retrato y video 4K de hasta 60 cps.\r\n* Cámara frontal TrueDepth de 12 MP con modo Retrato, video 4K y video en cámara lenta.\r\n* Face ID para una autenticación segura y Apple Pay.\r\n* Chip A13 Bionic con Neural Engine de tercera generación.\r\n* Carga rápida.\r\n* Carga inalámbrica. \r\n* iOS 14 con widgets rediseñados en la pantalla de inicio, nueva Biblioteca de Apps, App Clips y mucho más.','imageProduct-1667321797431.jpg','Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. \r\nToma grandes fotos con poca luz gracias al modo Noche. \r\nDisfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas \r\nAprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. \r\nHaz mucho más sin necesidad de volver a cargar el teléfono gracias a su batería de larga duración. \r\nY no te preocupes si se moja, el iPhone 11 tiene una resistencia al agua de hasta 30 minutos a una profundidad máxima de 2 metros.',226000,10,1,1,1),(2,'Notebook Lenovo Ryzen 3','* Memoria RAM--> 8 GB\r\n* Tamaño de la pantalla--> 15.6 \"\r\n* Tipo de resolución--> HD\r\n* Con pantalla táctil-->No\r\n* Con lector de huella digital-->No','imageProduct-1667353081941.jpg','Esta notebook es ideal para que hagas todas tus tareas cotidianas. Su procesador AMD Ryzen 3 de 2 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar.\r\nSu pantalla LED antirreflejo de 15.6\" y 1366 x 768 px de resolución te brindará colores más vivos y definidos. \r\nTus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\r\nPotente disco sólido, el disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.\r\nUn procesador exclusivo para los gráficos, su placa de video AMD Radeon Vega 3 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.',175000,15,2,2,7),(3,'Licuadora Moulinex Powermix Plus','* Es industrial-->No\r\n* Con cuchilla de acero inoxidable-->Sí\r\n* Potencia--> 700 W\r\n* Con display digital--> No','imageProduct-1667322058775.jpg','Un electrodoméstico infaltable en tu casa. \r\nLa licuadora Moulinex LM284858 te va a ayudar a obtener resultados increíbles en todo lo que prepares, ya sea que quieras disfrutar de una bebida bien fría, de salsas y sopas, o de postres deliciosos. ¡Tenela siempre a mano!\r\nPráctica y segura.\r\nSu función pulsar te permite poner en marcha el producto de forma intermitente según lo necesites o de acuerdo al contenido de la jarra. Su cierre de seguridad impide accidentes por descuidos y preserva la limpieza de tu cocina al evitar derrames.',11000,10,4,3,5),(4,'Samsung Galaxy S20','* Pantalla --> 6.2\", 1440 x 3200 pixels\r\n* Procesador--> Exynos 990 2.73GHz\r\n* RAM --> 8GB\r\n* Almacenamiento--> 128GB\r\n* Expansión--> microSD\r\n* Cámara--> Triple, 12MP+64MP+12MP\r\n* Batería--> 4000 mAh\r\n* OS--> Android 10\r\n* Perfil--> 7.9 mm\r\n* Peso--> 163 g','imageProduct-1667322183314.jpg','El Samsung Galaxy S20 es el nuevo flagship para el 2020 de la serie Galaxy S de Samsung. \r\nCon una pantalla QHD+ de 6.2 pulgadas y tasa de refresco de 120 Hz, el Galaxy S20 está potenciado por un procesador un procesador Exynos 990 en su versión internacional. \r\nEl Galaxy S20 cuenta con 8GB de memoria RAM y 128GB de almacenamiento interno, expandible vía microSD. \r\nLa cámara posterior del Galaxy S20 es triple, con una configuración 12 MP + 12 MP + 64 MP, mientras que la cámara para selfies es de 10 megapixels. \r\nCompletando las características del Galaxy S20 encontramos un lector de huellas integrado en la pantalla, batería de 4000 mAh con soporte para carga rápida e inalámbrica, parlantes stereo de AKG y corre One UI 2 basado en Android 10.',120000,10,1,2,2),(5,'Smart TV Samsung Series 5','* Su resolución es Full HD.\r\n* Tecnología HDR para una calidad de imagen mejorada.\r\n* Modo de sonido-->  Dolby Digital Plus.\r\n* Tiene función Screen Share.\r\n* Con Web browser, Netflix, Prime Video, Apple TV, Hulu, Vudu, Disney+, ESPN, Samsung TV Plus, Samsung Health, YouTube TV, Gallery, Google Play Movies & TV, SmartThings, YouTube.\r\n* Control LG Magic Remote no incluido.\r\n* Sistema operativo Tizen.\r\n* Conectá tus dispositivos mediante sus 2 puertos HDMI y su puerto USB.\r\n* Dimensiones--> 979.9mm de ancho, 571.9mm de alto, 77.3mm de profundidad.\r\n* Entretenimiento y conectividad en un mismo lugar.','imageProduct-1667322268091.jpg','Samsung es reconocida a nivel mundial como una empresa líder en la industria tecnológica. \r\nTodos sus productos son diseñados con una calidad superior y pensados para contribuir a un futuro mejor. \r\nPor eso, va a hacer que disfrutes de una experiencia visual incomparable.\r\nCon el Smart TV UN43T5300AG vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. \r\nAdemás, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.',86000,10,3,2,2),(6,'Lavarropas automático Longvie','* Carga frontal de 8 kg.\r\n* Incluye 15 programas.\r\n* Centrifuga a una velocidad de 1000 rpm.\r\n* Apto para lavar con agua a diversas temperaturas.\r\n* Tambor de acero inoxidable y filtro atrapa pelusas.\r\n* Eficiencia energética A+++.\r\n* Las imágenes pueden ser ilustrativas.\r\n* Comodidad y practicidad para tu hogar.','imageProduct-1667322344751.jpg','El lavarropas Longvie L18010 hará que el lavado diario sea más sencillo. \r\nEvitará los residuos de jabón, dejará tu ropa impecable sin dañarla y te permitirá ahorrar tiempo.\r\nTrabaja solo, únicamente necesita que se introduzcan los productos de limpieza y se elija el programa deseado. \r\nA diferencia de los semiautomáticos, no requiere que estés presente en todas las etapas del proceso, por lo que vas a tener prendas limpias y perfumadas sin esfuerzo.',130000,15,4,3,3),(7,'Apple iPad (9ª generación) 10.2\" Wi-Fi 64GB','* Increíble pantalla Retina de 10.2 pulgadas con True Tone.\r\n* Chip A13 Bionic con Neural Engine.\r\n* Cámara trasera gran angular de 8 MP y cámara frontal ultra gran angular de 12 MP con Encuadre Centrado.\r\n* Hasta 64 GB de almacenamiento.\r\n* Bocinas estéreo.\r\n* Touch ID para una autenticación segura y Apple Pay.\r\n* Wi-Fi 802.11ac.\r\n* Hasta 10 horas de batería.\r\n* Conector Lightning para cargar el iPad mini y para conectar accesorios.\r\n* Compatible con el Apple Pencil (primera generación) y el Smart Keyboard.\r\n* iPadOS 15 es tan poderoso como fácil de usar y está diseñado para la versatilidad del iPad.','imageProduct-1667339655977.jpg','Lleno de potencia, muy fácil de usar y versátil. \r\nEl nuevo iPad viene con una espectacular pantalla Retina de 10.2 pulgadas, el potente chip A13 Bionic y una cámara frontal ultra gran angular con Encuadre Centrado. \r\nAdemás, es compatible con el Apple Pencil y el Smart Keyboard.\r\nCon el iPad, harás de todo como si nada. Y por menos de lo que imaginas.\r\nAvisos legales,\r\nLas apps están disponibles en el App Store. La disponibilidad de títulos está sujeta a cambios.\r\nLos accesorios se venden por separado. La compatibilidad varía según la generación.\r\nLa duración de la batería varía según el uso y la configuración.',99999,15,2,1,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_product`
--

LOCK TABLES `user_product` WRITE;
/*!40000 ALTER TABLE `user_product` DISABLE KEYS */;
INSERT INTO `user_product` VALUES (1,1,1,NULL),(2,1,2,NULL),(3,1,3,NULL),(4,2,4,NULL),(5,2,5,NULL),(6,2,6,NULL),(7,3,7,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'navas.francisco.j@gmail.com','$2a$10$E9ZrIyO1PHD4uxQEU2oR5uHT.yfzvLaMI.fwjLyeaDmb7DCoqTTny','Francisco','Navas','default-user.jpg',33630169,'1988-09-14',1),(2,'jorgegarcia143@gmail.com','$2a$10$txt19O.v9EZ5xdac59QEc.E4v3b6S6zGxGt1LXW1WtMWgz3l3ZiRS','Jorge','Garcia','default-user.jpg',34192766,'1988-12-27',1),(3,'micaweiss@mail.com','$2a$10$7G2sMeNI2X0dORbXkrxtC.X8quQmB12buQSFLe39EA8ZlGCm2LYVW','Micaela','Weiss','default-user.jpg',40557766,'2002-02-15',1),(4,'luliguelman@outlook.com','$2a$10$D7EewY.dODzRv1rW8Bnl8OlrqJtxaOPCXmW4snl4T8ny5AI6cjVk6','Lucila','Guelman','default-user.jpg',40993322,'2002-05-16',1),(5,'juandiegotamayo@gmail.com','$2a$10$jZmGW1BB5WOmYBNF9fMR3uloD1RVXx73u.08ZKa/KDZA1.2ustV3e','Juan Diego','Tamayo','default-user.jpg',42775588,'2004-08-06',1);
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

-- Dump completed on 2022-11-15 18:40:01
