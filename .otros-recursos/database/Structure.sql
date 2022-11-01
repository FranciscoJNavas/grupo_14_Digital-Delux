-- Sprint 6 Creación de base de datos para proyecto integrador
create DATABASE digital_delux_db;

-- Creación tabla de marcas
CREATE TABLE `digital_delux_db`.`brands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));

-- Creación tabla de categoría
CREATE TABLE `digital_delux_db`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));

-- Creación tabla de secciones/apartados del sitio
CREATE TABLE `digital_delux_db`.`section_of_site` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));

-- Creación tabla de productos
CREATE TABLE `digital_delux_db`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `features` LONGTEXT NOT NULL,
  `image` VARCHAR(200) NULL,
  `description` LONGTEXT NOT NULL,
  `price` DOUBLE NOT NULL,
  `discount` INT NULL,
  `category_id` INT NULL,
  `section_of_site_id` INT NULL,
  `brand_id` INT NULL,
  PRIMARY KEY (`id`));

-- Creación tabla de usuarios
CREATE TABLE `digital_delux_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(100) NULL,
  `dni` BIGINT(10) UNSIGNED NOT NULL,
  `date_of_birth` DATE NOT NULL,
  `role` INT NOT NULL,
  PRIMARY KEY (`id`));

-- Creación tabla usuarios-productos
CREATE TABLE `digital_delux_db`.`user_product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `buyer_id` INT NULL,
  PRIMARY KEY (`id`));

