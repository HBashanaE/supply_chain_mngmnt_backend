-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Dec 31, 2019 at 01:44 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `supply_chain_mgnt`
--

DELIMITER $$
--
-- Procedures
--
DROP PROCEDURE IF EXISTS `saveAssistant`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `saveAssistant` (IN `nic` VARCHAR(12), IN `firstName` VARCHAR(255), IN `lastName` VARCHAR(255), IN `city` VARCHAR(255), IN `streetName` VARCHAR(255), IN `no` VARCHAR(4), IN `contactNo` VARCHAR(15), IN `storeID` VARCHAR(10))  NO SQL
BEGIN
START TRANSACTION;
INSERT INTO person VALUES(nic, firstName, lastName, city, streetName, no, 1);
INSERT INTO worker VALUES(nic, storeID);
INSERT INTO assistant VALUES(nic);
INSERT INTO contact_no VALUES(contactNO, nic);
COMMIT;
END$$

DROP PROCEDURE IF EXISTS `saveDriver`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `saveDriver` (IN `nic` VARCHAR(12), IN `firstName` VARCHAR(255), IN `lastName` VARCHAR(255), IN `city` VARCHAR(255), IN `streetName` VARCHAR(255), IN `no` VARCHAR(4), IN `contactNo` VARCHAR(15), IN `storeID` VARCHAR(10))  NO SQL
BEGIN
START TRANSACTION;
INSERT INTO person VALUES(nic, firstName, lastName, city, streetName, no, 1);
INSERT INTO worker VALUES(nic, storeID);
INSERT INTO driver VALUES(nic);
INSERT INTO contact_no VALUES(contactNO, nic);
COMMIT;
END$$

DROP PROCEDURE IF EXISTS `saveEndCustomer`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `saveEndCustomer` (IN `nic` VARCHAR(12), IN `firstName` VARCHAR(255), IN `lastName` VARCHAR(255), IN `city` VARCHAR(255), IN `streetName` VARCHAR(255), IN `no` VARCHAR(4), IN `username` VARCHAR(50), IN `password` VARCHAR(60), IN `contactNo` VARCHAR(15))  NO SQL
BEGIN
START TRANSACTION;
INSERT INTO person VALUES(nic, firstName, lastName, city, streetName, no, 1);
INSERT INTO users VALUES(nic, username, password);
INSERT INTO customer VALUES(username);
INSERT INTO end_customer VALUES(username);
INSERT INTO contact_no VALUES(contactNO, nic);
COMMIT;
END$$

DROP PROCEDURE IF EXISTS `saveRetailer`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `saveRetailer` (IN `nic` VARCHAR(12), IN `firstName` VARCHAR(255), IN `lastName` VARCHAR(255), IN `city` VARCHAR(255), IN `streetName` VARCHAR(255), IN `no` VARCHAR(4), IN `username` VARCHAR(50), IN `password` VARCHAR(60), IN `contactNo` VARCHAR(15))  NO SQL
BEGIN
START TRANSACTION;
INSERT INTO person VALUES(nic, firstName, lastName, city, streetName, no, 1);
INSERT INTO users VALUES(nic, username, password);
INSERT INTO customer VALUES(username);
INSERT INTO retailer VALUES(username);
INSERT INTO contact_no VALUES(contactNO, nic);
COMMIT;
END$$

DROP PROCEDURE IF EXISTS `saveStoreKeeper`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `saveStoreKeeper` (IN `nic` VARCHAR(12), IN `firstName` VARCHAR(255), IN `lastName` VARCHAR(255), IN `city` VARCHAR(255), IN `streetName` VARCHAR(255), IN `no` VARCHAR(4), IN `username` VARCHAR(50), IN `password` VARCHAR(60), IN `contactNo` VARCHAR(15), IN `storeID` VARCHAR(255))  NO SQL
BEGIN
START TRANSACTION;
INSERT INTO person VALUES(nic, firstName, lastName, city, streetName, no, 1);
INSERT INTO users VALUES(nic, username, password);
INSERT INTO store_keeper VALUES(username, storeID);
INSERT INTO contact_no VALUES(contactNO, nic);
COMMIT;
END$$

DROP PROCEDURE IF EXISTS `saveWholeSeller`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `saveWholeSeller` (IN `nic` VARCHAR(12), IN `firstName` VARCHAR(255), IN `lastName` VARCHAR(255), IN `city` VARCHAR(255), IN `streetName` VARCHAR(255), IN `no` VARCHAR(4), IN `username` VARCHAR(50), IN `password` VARCHAR(60), IN `contactNo` VARCHAR(15))  NO SQL
BEGIN
START TRANSACTION;
INSERT INTO person VALUES(nic, firstName, lastName, city, streetName, no, 1);
INSERT INTO users VALUES(nic, username, password);
INSERT INTO customer VALUES(username);
INSERT INTO whole_saler VALUES(username);
INSERT INTO contact_no VALUES(contactNO, nic);
COMMIT;
END$$

--
-- Functions
--
DROP FUNCTION IF EXISTS `driver_or_assistant`$$
CREATE DEFINER=`root`@`localhost` FUNCTION `driver_or_assistant` (`id` VARCHAR(10)) RETURNS VARCHAR(1) CHARSET latin1 BEGIN
    DECLARE a char(1);
SELECT 'D' INTO a FROM driver WHERE driver_id = id;
SELECT 'A' INTO a FROM assistant WHERE assistant_id = id;
RETURN a;
  END$$

DROP FUNCTION IF EXISTS `userType`$$
CREATE DEFINER=`root`@`localhost` FUNCTION `userType` (`id` VARCHAR(10)) RETURNS VARCHAR(1) CHARSET latin1 BEGIN
    DECLARE a char(1);
SELECT 'R' INTO a FROM retailer WHERE user_name = id;
SELECT 'W' INTO a FROM whole_saler WHERE user_name = id;
SELECT 'E' INTO a FROM end_customer WHERE user_name = id;
SELECT 'S' INTO a FROM store_keeper WHERE user_name = id;
RETURN a;
  END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `approved_order`
--

DROP TABLE IF EXISTS `approved_order`;
CREATE TABLE IF NOT EXISTS `approved_order` (
  `approved_order_id` varchar(255) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `admin_id` varchar(255) NOT NULL,
  PRIMARY KEY (`approved_order_id`),
  KEY `admin_id` (`admin_id`),
  KEY `order_id` (`order_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `assistant`
--

DROP TABLE IF EXISTS `assistant`;
CREATE TABLE IF NOT EXISTS `assistant` (
  `NIC_No` varchar(12) NOT NULL,
  PRIMARY KEY (`NIC_No`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `contact_no`
--

DROP TABLE IF EXISTS `contact_no`;
CREATE TABLE IF NOT EXISTS `contact_no` (
  `contact_no` varchar(15) NOT NULL,
  `NIC_No` varchar(12) NOT NULL,
  PRIMARY KEY (`contact_no`,`NIC_No`),
  KEY `NIC_No` (`NIC_No`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_no`
--

INSERT INTO `contact_no` (`contact_no`, `NIC_No`) VALUES
('01223114', '984561225V'),
('0710740848', '895462134V'),
('0710740848', '895462135V'),
('0710740848', '987451234V'),
('0712245698', '5644851275V'),
('081245698', '65215423655V'),
('0812546985', '701254515V');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`user_name`) VALUES
('abejay'),
('asdfg'),
('TestTest'),
('ttttLSJBYKJ'),
('ttttLSJvYKJ');

-- --------------------------------------------------------

--
-- Table structure for table `delivered_order`
--

DROP TABLE IF EXISTS `delivered_order`;
CREATE TABLE IF NOT EXISTS `delivered_order` (
  `delivered_order_id` varchar(255) NOT NULL,
  `approved_order_id` varchar(255) NOT NULL,
  `truck_trip_id` varchar(255) NOT NULL,
  PRIMARY KEY (`approved_order_id`),
  KEY `truck_trip_id` (`truck_trip_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

DROP TABLE IF EXISTS `driver`;
CREATE TABLE IF NOT EXISTS `driver` (
  `NIC_No` varchar(12) NOT NULL,
  PRIMARY KEY (`NIC_No`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`NIC_No`) VALUES
('701254515V');

-- --------------------------------------------------------

--
-- Table structure for table `end_customer`
--

DROP TABLE IF EXISTS `end_customer`;
CREATE TABLE IF NOT EXISTS `end_customer` (
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `end_customer`
--

INSERT INTO `end_customer` (`user_name`) VALUES
('abejay');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
CREATE TABLE IF NOT EXISTS `item` (
  `item_id` varchar(255) NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `item_description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`item_id`),
  KEY `product_id` (`product_id`),
  KEY `order_id` (`order_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` varchar(255) NOT NULL,
  `ordered_date` date DEFAULT NULL,
  `order_description` varchar(100) DEFAULT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `total_capacity_consumption` int(11) NOT NULL,
  `truck_route_id` varchar(255) NOT NULL,
  `customer_id` varchar(255) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `customer_id` (`customer_id`),
  KEY `truck_route_id` (`truck_route_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
CREATE TABLE IF NOT EXISTS `person` (
  `NIC_No` varchar(12) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `city` varchar(20) NOT NULL,
  `street_name` varchar(60) NOT NULL,
  `number` varchar(20) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  PRIMARY KEY (`NIC_No`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`NIC_No`, `first_name`, `last_name`, `city`, `street_name`, `number`, `is_active`) VALUES
('971642356V', 'Abe', 'Jay', 'Moratuwa', 'Samagi street', 'No 20', 1),
('984561225V', 'TestF', 'TestL', 'TestCity', 'TestStreet', '213', 1),
('987451234V', 'Test', 'User', 'TestCity', 'TestStreet', '123', 1),
('895462135V', 'Test', 'User', 'TestCity', 'TestStreet', '123', 1),
('895462134V', 'Test', 'User', 'TestCity', 'TestStreet', '123', 1),
('701254515V', 'Driver1', 'D', 'Katugasthota', 'Flower lane', '12', 1),
('65215423655V', 'Nimal', 'Karunapala', 'Asgiriya', 'Raja av', '45', 1),
('5644851275V', 'Sunil', 'Samarakoon', 'Ukuwela', 'AnyName', '00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `product_id` varchar(255) NOT NULL,
  `product_name` varchar(60) NOT NULL,
  `brand` varchar(20) NOT NULL,
  `capacity_consumption` int(11) NOT NULL,
  `unit_price` decimal(8,2) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `retailer`
--

DROP TABLE IF EXISTS `retailer`;
CREATE TABLE IF NOT EXISTS `retailer` (
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `retailer`
--

INSERT INTO `retailer` (`user_name`) VALUES
('TestTest');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
CREATE TABLE IF NOT EXISTS `store` (
  `store_id` varchar(255) NOT NULL,
  `city` varchar(20) NOT NULL,
  `street_name` varchar(60) NOT NULL,
  `number` varchar(20) NOT NULL,
  `capacity` int(11) NOT NULL,
  PRIMARY KEY (`store_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`store_id`, `city`, `street_name`, `number`, `capacity`) VALUES
('0000', 'KANDY', 'Cross st', 'No 14', 100000),
('0001', 'MATALE', 'King st', 'No 193/2', 10000);

-- --------------------------------------------------------

--
-- Table structure for table `store_keeper`
--

DROP TABLE IF EXISTS `store_keeper`;
CREATE TABLE IF NOT EXISTS `store_keeper` (
  `user_name` varchar(20) NOT NULL,
  `store_id` varchar(255) NOT NULL,
  PRIMARY KEY (`user_name`),
  KEY `store_id` (`store_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `store_keeper`
--

INSERT INTO `store_keeper` (`user_name`, `store_id`) VALUES
('nimalK', '0000'),
('SunilS', '0001');

-- --------------------------------------------------------

--
-- Table structure for table `train_schedule`
--

DROP TABLE IF EXISTS `train_schedule`;
CREATE TABLE IF NOT EXISTS `train_schedule` (
  `train_schedule_id` varchar(255) NOT NULL,
  `approved_order_id` varchar(255) NOT NULL,
  `train_trip_id` varchar(255) NOT NULL,
  `arrival_time_to_destination` time DEFAULT NULL,
  PRIMARY KEY (`train_schedule_id`),
  KEY `approved_order_id` (`approved_order_id`),
  KEY `train_trip_id` (`train_trip_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `train_trip`
--

DROP TABLE IF EXISTS `train_trip`;
CREATE TABLE IF NOT EXISTS `train_trip` (
  `train_trip_id` varchar(255) NOT NULL,
  `arrival_time_to_kandy` time DEFAULT NULL,
  `allocated_capacity` int(11) NOT NULL,
  PRIMARY KEY (`train_trip_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `train_trip_city`
--

DROP TABLE IF EXISTS `train_trip_city`;
CREATE TABLE IF NOT EXISTS `train_trip_city` (
  `city_id` varchar(255) NOT NULL,
  `city` varchar(20) NOT NULL,
  `train_trip_id` varchar(255) NOT NULL,
  PRIMARY KEY (`city_id`),
  KEY `train_trip_id` (`train_trip_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `truck`
--

DROP TABLE IF EXISTS `truck`;
CREATE TABLE IF NOT EXISTS `truck` (
  `truck_id` varchar(255) NOT NULL,
  `reg_no` varchar(60) NOT NULL,
  `store_id` varchar(255) NOT NULL,
  PRIMARY KEY (`truck_id`),
  KEY `store_id` (`store_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `truck_route`
--

DROP TABLE IF EXISTS `truck_route`;
CREATE TABLE IF NOT EXISTS `truck_route` (
  `truck_route_id` varchar(255) NOT NULL,
  `maximum_time` time DEFAULT NULL,
  `store_id` varchar(255) NOT NULL,
  PRIMARY KEY (`truck_route_id`,`store_id`),
  KEY `store_id` (`store_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `truck_route_intermediate_point`
--

DROP TABLE IF EXISTS `truck_route_intermediate_point`;
CREATE TABLE IF NOT EXISTS `truck_route_intermediate_point` (
  `point_id` varchar(255) NOT NULL,
  `point` varchar(30) NOT NULL,
  `truck_route_id` varchar(255) NOT NULL,
  PRIMARY KEY (`point_id`),
  KEY `truck_route_id` (`truck_route_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `truck_trip`
--

DROP TABLE IF EXISTS `truck_trip`;
CREATE TABLE IF NOT EXISTS `truck_trip` (
  `truck_trip_id` varchar(255) NOT NULL,
  `trip_date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `driver_id` varchar(255) NOT NULL,
  `assistant_id` varchar(255) NOT NULL,
  `truck_id` varchar(255) NOT NULL,
  `truck_route_id` varchar(255) NOT NULL,
  PRIMARY KEY (`truck_trip_id`),
  KEY `driver_id` (`driver_id`),
  KEY `assistant_id` (`assistant_id`),
  KEY `truck_id` (`truck_id`),
  KEY `truck_route_id` (`truck_route_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `NIC_No` varchar(12) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`NIC_No`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`NIC_No`, `user_name`, `password`) VALUES
('971642356V', 'abejay', '$2y$12$637ZG.k9zG0WMnZr7eXSFOAu3KCnyq5GFZkxU4/SsqAEpHOvJc/Ay'),
('984561225V', 'TestTest', 'tees'),
('987451234V', 'asdfg', '$2a$12$sERopLlVeVlox8UB5OEmEeHkHfNI3H5hYBkMs8AUme.CtAtVqd9fe'),
('895462135V', 'ttttLSJBYKJ', '$2a$12$3VVRybEKlnjljF/E7Jjg0uTdUll0BIcC1cTByF0POGggPKcPdCfwS'),
('895462134V', 'ttttLSJvYKJ', '$2a$12$Y/LGFyjkydR9/yDso7hG3e8vFzhM0tDcP2AhyA46uzhalMm9zB9Ly'),
('65215423655V', 'nimalK', '$2y$12$bywlRL30lHjYgaz0jLQuvO45Vc8bu9vdGHYU3w7YSXcc7WYvvj.Rq'),
('5644851275V', 'SunilS', '$2y$12$bywlRL30lHjYgaz0jLQuvO45Vc8bu9vdGHYU3w7YSXcc7WYvvj.Rq');

-- --------------------------------------------------------

--
-- Table structure for table `whole_saler`
--

DROP TABLE IF EXISTS `whole_saler`;
CREATE TABLE IF NOT EXISTS `whole_saler` (
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `whole_saler`
--

INSERT INTO `whole_saler` (`user_name`) VALUES
('asdfg'),
('ttttLSJBYKJ'),
('ttttLSJvYKJ');

-- --------------------------------------------------------

--
-- Table structure for table `worker`
--

DROP TABLE IF EXISTS `worker`;
CREATE TABLE IF NOT EXISTS `worker` (
  `NIC_No` varchar(12) NOT NULL,
  `store_id` varchar(255) NOT NULL,
  PRIMARY KEY (`NIC_No`),
  KEY `store_id` (`store_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `worker`
--

INSERT INTO `worker` (`NIC_No`, `store_id`) VALUES
('701254515V', '0000');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
