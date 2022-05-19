-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 12-05-2022 a las 16:43:44
-- Versión del servidor: 10.3.29-MariaDB-0+deb10u1
-- Versión de PHP: 7.3.19-1+eagle

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `concessionaire`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brand_car`
--

CREATE TABLE `brand_car` (
  `id` int(11) NOT NULL,
  `brand` varchar(15) DEFAULT NULL,
  `img` varchar(140) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brand_car`
--

INSERT INTO `brand_car` (`id`, `brand`, `img`) VALUES
(1, 'SEAT', 'view/img/cars_logo/logo-seat-historia.png'),
(2, 'Opel', 'view/img/cars_logo/opel_logo.png'),
(3, 'Mercedes', 'view/img/cars_logo/Mercedes_Benz_Logo.png'),
(4, 'Toyota', 'view/img/cars_logo/toyota.png'),
(5, 'BMW', 'view/img/cars_logo/BMW-Logo.png'),
(6, 'FIAT', 'view/img/cars_logo/FIAT.png'),
(7, 'Subaru', 'view/img/cars_logo/subaru.png'),
(8, 'Alfa_Romeo', 'view/img/cars_logo/alfa_romeo_logo.png'),
(9, 'Citroen', 'view/img/cars_logo/citroen.png'),
(10, 'Peugeot', 'view/img/cars_logo/Peugeot.png'),
(11, 'KIA', 'view/img/cars_logo/KIA.png'),
(12, 'Ford', 'view/img/cars_logo/ford_logo.png'),
(13, 'Lamborghini', 'view/img/cars_logo/lambo.png'),
(14, 'Ferrari', 'view/img/cars_logo/ferrari.png'),
(15, 'Hyundai', 'view/img/cars_logo/hyundai.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `car_plate` varchar(20) DEFAULT NULL,
  `frame_number` varchar(20) DEFAULT NULL,
  `brand_car` varchar(20) DEFAULT NULL,
  `model_car` varchar(20) DEFAULT NULL,
  `CV` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `kilometres` int(11) DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `categories` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `description` varchar(140) DEFAULT NULL,
  `bodywork` int(11) DEFAULT NULL,
  `city` int(30) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cars`
--

INSERT INTO `cars` (`id`, `car_plate`, `frame_number`, `brand_car`, `model_car`, `CV`, `price`, `kilometres`, `date`, `color`, `categories`, `type`, `img`, `description`, `bodywork`, `city`, `count`) VALUES
(133, 'V8931HD', 'FDFDFDFDFD', 'Alfa_Romeo', 'Giula', 100, 500, 10000, '10/1/2020', '#034f84', 2, 1, 'view/img/img_cars/dummies_not_available.jpeg', 'Amazing Car', 1, 1, 10),
(134, '9999XX', 'HUHDSIFGJSGF', 'Alfa_Romeo', 'Giuletta', 120, 1000, 20000, '10/2/2021', '#f7786b', 1, 2, 'view/img/img_cars/dummies_not_available.jpeg', 'I love this car', 1, 2, 11),
(135, '3423BBD', 'DKLHKSJDHSKHD', 'Opel', 'Insignia', 140, 1500, 30000, '30/12/2000', '#ffef96', 2, 3, 'view/img/all_cars/opel_insignia1.jpg', 'Its a beuatiful car', 2, 3, 69),
(136, '7774DFD', 'DKHGSJDSJ', 'Opel', 'Mokka', 160, 2000, 40000, '12/3/2004', '#80ced6', 1, 4, 'view/img/img_cars/dummies_not_available.jpeg', 'Its very old', 3, 4, 37),
(137, '8787DSD', 'DMBVASJDGH', 'Citroen', 'Berlingo', 180, 2500, 50000, '15/1/2010', '#50394c', 2, 1, 'view/img/img_cars/dummies_not_available.jpeg', 'Its horrible', 3, 5, 9),
(138, '0000AAA', 'DKJASHFKSAGD', 'Citroen', 'C1', 200, 3000, 60000, '17/4/2020', '#f4e1d2', 1, 2, 'view/img/img_cars/dummies_not_available.jpeg', 'Wow', 4, 1, 17),
(139, '34654BBN', 'AOFHASPFUHASF', 'Opel', 'Grandland', 220, 3500, 70000, '20/3/2010', '#bc5a45', 1, 3, 'view/img/img_cars/dummies_not_available.jpeg', 'Its color disgust me', 5, 2, 39),
(140, '4445GG', 'RRRRRRRRRRRR', 'Opel', 'Astra', 240, 4000, 80000, '30/1/2020', '#80ced6', 2, 4, 'view/img/all_cars/opel_astra1.jpg', 'I sell it because I want to buy a new car', 6, 3, 61),
(141, 'X7676VB', 'KBFSKJHASDFSDF', 'Opel', 'Corsa', 260, 4500, 90000, '13/11/2000', '#618685', 1, 1, 'view/img/img_cars/dummies_not_available.jpeg', 'It has all new pieces', 6, 4, 38);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `nom`, `img`) VALUES
(1, 'Km0', 'view/img/img_categories/km0.png'),
(2, 'Nuevo', 'view/img/img_categories/nuevo.png'),
(3, 'segunda_mano', 'view/img/img_categories/segunda_mano.png'),
(4, 'clasico', 'view/img/img_categories/clasico.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `lat` varchar(30) NOT NULL,
  `long` varchar(30) NOT NULL,
  `id` int(11) NOT NULL,
  `ciudad` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`lat`, `long`, `id`, `ciudad`) VALUES
('38.8227300', '-0.5483300', 1, 'Agullent'),
('38.8539848', '-0.5259129', 2, 'Albaida'),
('38.7678', '-0.608613', 3, 'Bocairent'),
('38.8877911', '-0.4916038', 4, 'Montaverner'),
('38.8166700', '-0.6166700 ', 5, 'Ontinyent'),
('38.8542', '-0.444985 ', 6, 'Otos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `error_cars`
--

CREATE TABLE `error_cars` (
  `id` int(11) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `error_cars`
--

INSERT INTO `error_cars` (`id`, `description`, `time`) VALUES
(1, 'Ha habido un error al crear el vehiculo', '2022-01-12 15:26:06'),
(2, 'Ha habido un error al actualizar el vehiculo', '2022-01-12 17:44:06'),
(3, 'Ha habido un error al actualizar el vehiculo', '2022-01-12 17:44:14'),
(4, 'Ha habido un error al listar el vehiculo', '2022-01-14 19:03:23'),
(5, 'Ha habido un error al listar el vehiculo', '2022-01-14 19:04:01'),
(6, 'Ha habido un error al listar el vehiculo', '2022-01-14 19:04:07'),
(7, 'Ha habido un error al listar el vehiculo', '2022-01-14 19:04:13'),
(8, 'Ha habido un error al listar el vehiculo', '2022-01-14 19:04:19'),
(9, 'Ha habido un error al listar el vehiculo', '2022-01-14 19:04:24'),
(10, 'Ha habido un error al listar el vehiculo', '2022-01-14 19:04:30'),
(11, 'Ha habido un error al listar el vehiculo', '2022-01-14 19:04:36'),
(12, 'Ha habido un error al listar el vehiculo', '2022-01-14 19:04:40'),
(13, 'Ha habido un error al listar el vehiculo', '2022-01-14 19:04:56'),
(14, 'Ha habido un error al listar el vehiculo', '2022-01-14 19:13:13'),
(15, 'Ha habido un error al crear el vehiculo', '2022-01-31 16:44:58'),
(16, 'Ha habido un error al crear el vehiculo', '2022-01-31 16:55:46'),
(17, 'Ha habido un error al crear el vehiculo', '2022-01-31 16:58:13'),
(18, 'Ha habido un error al crear el vehiculo', '2022-01-31 17:01:57'),
(19, 'Ha habido un error al crear el vehiculo', '2022-01-31 17:03:27'),
(20, 'Ha habido un error al crear el vehiculo', '2022-01-31 17:06:22'),
(21, 'Ha habido un error al crear el vehiculo', '2022-01-31 17:09:04'),
(22, 'Ha habido un error al crear el vehiculo', '2022-01-31 17:23:10'),
(23, 'Ha habido un error al crear el vehiculo', '2022-01-31 17:26:43'),
(24, 'Ha habido un error al crear el vehiculo', '2022-01-31 17:34:35'),
(25, 'Ha habido un error al crear el vehiculo', '2022-01-31 17:40:50'),
(26, 'Ha habido un error al crear el vehiculo', '2022-01-31 17:42:56'),
(27, 'Ha habido un error al crear el vehiculo', '2022-01-31 17:49:36'),
(28, 'Ha habido un error al crear el vehiculo', '2022-01-31 18:35:23'),
(29, 'Ha habido un error al crear el vehiculo', '2022-01-31 18:46:10'),
(30, 'Ha habido un error al crear el vehiculo', '2022-01-31 18:47:05'),
(31, 'Ha habido un error al crear el vehiculo', '2022-01-31 19:00:45'),
(32, 'Ha habido un error al crear el vehiculo', '2022-01-31 19:02:28'),
(33, 'Ha habido un error al crear el vehiculo', '2022-02-01 18:33:59'),
(34, 'Ha habido un error al crear el vehiculo', '2022-02-01 18:38:38'),
(35, 'Ha habido un error al crear el vehiculo', '2022-02-01 18:40:13'),
(36, 'Ha habido un error al crear el vehiculo', '2022-02-01 18:41:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `filter_bodywork`
--

CREATE TABLE `filter_bodywork` (
  `id` int(11) NOT NULL,
  `bodywork` varchar(100) DEFAULT NULL,
  `nombre` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `filter_bodywork`
--

INSERT INTO `filter_bodywork` (`id`, `bodywork`, `nombre`) VALUES
(1, 'view/img/carroceria/monovolumen.png', 'monovolumen'),
(2, 'view/img/carroceria/cabrio.png', 'cabrio'),
(3, 'view/img/carroceria/coupe.png', 'coupe'),
(4, 'view/img/carroceria/estate.png', 'estate'),
(5, 'view/img/carroceria/hatchback.png', 'hatchback'),
(6, 'view/img/carroceria/Sedan.png', 'sedan'),
(7, 'view/img/carroceria/suv.png', 'suv');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `img_cars`
--

CREATE TABLE `img_cars` (
  `id` int(11) NOT NULL,
  `id_car` int(11) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `img_cars`
--

INSERT INTO `img_cars` (`id`, `id_car`, `img`) VALUES
(1, 135, 'view/img/all_cars/opel_insignia1.jpg'),
(2, 135, 'view/img/all_cars/opel_insignia2.jpg'),
(3, 135, 'view/img/all_cars/opel_insignia3.jpg'),
(4, 135, 'view/img/all_cars/opel_insignia4.jpg'),
(5, 140, 'view/img/all_cars/opel_astra1.jpg'),
(6, 140, 'view/img/all_cars/opel_astra2.jpg'),
(7, 140, 'view/img/all_cars/opel_astra3.jpg'),
(8, 140, 'view/img/all_cars/opel_astra4.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `like`
--

CREATE TABLE `like` (
  `id` int(11) NOT NULL,
  `user` varchar(25) NOT NULL,
  `car` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `like`
--

INSERT INTO `like` (`id`, `user`, `car`) VALUES
(21, 'admin', 133),
(23, 'admin', 139),
(26, 'pepe', 135),
(27, 'admin', 135),
(28, 'admin', 134);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `model_cars`
--

CREATE TABLE `model_cars` (
  `id` int(11) NOT NULL,
  `model_car` varchar(15) DEFAULT NULL,
  `brand_car` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `model_cars`
--

INSERT INTO `model_cars` (`id`, `model_car`, `brand_car`) VALUES
(1, 'Ibiza', 1),
(2, 'Leon', 1),
(3, 'Cupra', 1),
(4, 'Arona', 1),
(5, 'Ateca', 1),
(6, 'Alhambra', 1),
(7, 'Tarraco', 1),
(8, 'Astra', 2),
(9, 'Corsa', 2),
(10, 'Grandland', 2),
(11, 'Insignia', 2),
(12, 'Zafira', 2),
(13, 'Mokka', 2),
(14, 'Clase-A', 3),
(15, 'Clase-B', 3),
(16, 'Clase-C', 3),
(17, 'Clase-S', 3),
(18, 'CLS', 3),
(19, 'GLA', 3),
(20, 'GLC', 3),
(21, 'Corolla', 4),
(22, 'Yaris', 4),
(23, 'Rav4', 4),
(24, 'Camry', 4),
(25, 'Land Cruiser', 4),
(26, 'C-HR', 4),
(27, 'Mirai', 4),
(28, 'Serie 1', 5),
(29, 'Serie 2', 5),
(30, 'Serie 3', 5),
(31, 'M1', 5),
(32, 'M2', 5),
(33, 'M3', 5),
(34, 'M5', 5),
(35, 'M4', 5),
(36, 'Serie 5', 5),
(37, 'Serie 6', 5),
(38, 'Serie 7', 5),
(39, '500', 6),
(40, 'Tipo', 6),
(41, '500C', 6),
(42, 'Panda', 6),
(43, '500X', 6),
(44, '500L', 6),
(45, 'Forester', 7),
(46, 'XV', 7),
(47, 'Outback', 7),
(48, '4C', 8),
(49, 'Giula', 8),
(50, 'Giuletta', 8),
(51, 'Mito', 8),
(52, 'Stelvio', 8),
(53, 'Tonale', 8),
(54, 'C1', 9),
(55, 'C3', 9),
(56, 'C4', 9),
(57, 'C5', 9),
(58, 'Berlingo', 9),
(59, 'DS', 9),
(60, 'Aircross', 9),
(61, '108', 10),
(62, '208', 10),
(63, '308', 10),
(64, '508', 10),
(65, '2008', 10),
(66, '3008', 10),
(67, '5008', 10),
(68, 'Traveller', 10),
(69, 'Sportage', 11),
(70, 'Sorento', 11),
(71, 'Rio', 11),
(72, 'Picanto', 11),
(73, 'ceed', 11),
(74, 'Stinger', 11),
(75, 'Stonic', 11),
(76, 'EcoSport', 12),
(77, 'Fiesta', 12),
(78, 'Focus', 12),
(79, 'Galaxy', 12),
(80, 'Kuga', 12),
(81, 'Mondeo', 12),
(82, 'Mustang', 12),
(83, 'Ranger', 12),
(84, 'Aventator', 13),
(85, 'Huracan', 13),
(86, 'Urus', 13),
(87, 'Countach', 13),
(88, '166', 14),
(89, '212', 14),
(90, '250', 14),
(91, '275', 14),
(92, '360', 14),
(93, '365', 14),
(94, 'Bayon', 15),
(95, 'IONIQ 5', 15),
(96, 'i20', 15),
(97, 'i30', 15),
(98, 'KONA', 15),
(99, 'TUCSON', 15),
(100, 'SANTA FE', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `nom` varchar(20) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `type`
--

INSERT INTO `type` (`id`, `nom`, `img`) VALUES
(1, 'electrico', 'view/img/img_types/electrico.png'),
(2, 'diesel', 'view/img/img_types/diesel.png'),
(3, 'hybrido', 'view/img/img_types/hybrido.png'),
(4, 'gasolina', 'view/img/img_types/gasolina.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(300) NOT NULL,
  `email` varchar(50) NOT NULL,
  `type` tinyint(1) NOT NULL DEFAULT 0,
  `avatar` varchar(40) NOT NULL,
  `UID` varchar(20) NOT NULL,
  `activate` tinyint(1) NOT NULL,
  `token` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `User`
--

INSERT INTO `User` (`id`, `username`, `password`, `email`, `type`, `avatar`, `UID`, `activate`, `token`) VALUES
(103, 'admin', '$2y$10$IUb55IUFaxEehWRfH.FPyOnWw8q7iDJPkGbTRU1Q5VL9tVdrF/Po2', 'reif400@gmail.com', 1, 'https://robohash.org/admin', '0', 1, '0'),
(133, 'rafaferri12', '$2y$10$q01eteLWzoNCq01KpFuQ3OclGM6yfn5rsVLrEK7nPqRQwRbKR/SYG', 'rafaferriiestacio@gmail.com', 0, 'https://robohash.org/rafaferri12', '473a307d', 1, '93f3570e51e5d8891a49eefe784842d3c8509200'),
(137, 'rafaferriiestacio', 'null', 'rafaferriiestacio@gmail.com', 0, 'https://robohash.org/rafaferriiestacio', 'G-d1eb5839', 0, 'google-oauth2|111095345894414820257');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brand_car`
--
ALTER TABLE `brand_car`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories` (`categories`),
  ADD KEY `type` (`type`),
  ADD KEY `bodywork` (`bodywork`),
  ADD KEY `city` (`city`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `error_cars`
--
ALTER TABLE `error_cars`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `filter_bodywork`
--
ALTER TABLE `filter_bodywork`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `img_cars`
--
ALTER TABLE `img_cars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_car` (`id_car`);

--
-- Indices de la tabla `like`
--
ALTER TABLE `like`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `model_cars`
--
ALTER TABLE `model_cars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_car` (`brand_car`);

--
-- Indices de la tabla `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `error_cars`
--
ALTER TABLE `error_cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `filter_bodywork`
--
ALTER TABLE `filter_bodywork`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `img_cars`
--
ALTER TABLE `img_cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `like`
--
ALTER TABLE `like`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `cars_ibfk_1` FOREIGN KEY (`bodywork`) REFERENCES `filter_bodywork` (`id`),
  ADD CONSTRAINT `cars_ibfk_2` FOREIGN KEY (`city`) REFERENCES `ciudades` (`id`),
  ADD CONSTRAINT `categories` FOREIGN KEY (`categories`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `type` FOREIGN KEY (`type`) REFERENCES `type` (`id`);

--
-- Filtros para la tabla `img_cars`
--
ALTER TABLE `img_cars`
  ADD CONSTRAINT `img_cars_ibfk_1` FOREIGN KEY (`id_car`) REFERENCES `cars` (`id`);

--
-- Filtros para la tabla `model_cars`
--
ALTER TABLE `model_cars`
  ADD CONSTRAINT `model_cars_ibfk_1` FOREIGN KEY (`brand_car`) REFERENCES `brand_car` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
