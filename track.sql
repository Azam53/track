-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 02, 2017 at 12:47 AM
-- Server version: 5.5.50-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `track`
--

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE IF NOT EXISTS `client` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `flag` varchar(10) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`c_id`, `name`, `latitude`, `longitude`, `flag`, `date`) VALUES
(2, 'Azam', 19.0596, 72.8553, 'C', '0000-00-00 00:00:00'),
(3, 'Ali', 19.0553, 72.832, 'C', '0000-00-00 00:00:00'),
(6, 'John Smith', 19.0753, 72.8343, 'C', '2017-01-29 06:40:02');

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE IF NOT EXISTS `driver` (
  `d_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `flag` varchar(10) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`d_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`d_id`, `name`, `latitude`, `longitude`, `flag`, `date`) VALUES
(1, 'George ', 19.0688, 72.8703, 'D', '2017-01-29 06:42:38'),
(2, 'Dominic', 19.2871, 72.8688, 'D', '2017-01-31 17:19:48');

-- --------------------------------------------------------

--
-- Table structure for table `near_client`
--

CREATE TABLE IF NOT EXISTS `near_client` (
  `n_id` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(11) NOT NULL,
  `client` varchar(50) NOT NULL,
  `driver` varchar(50) NOT NULL,
  `distance` float NOT NULL,
  `time` float NOT NULL,
  PRIMARY KEY (`n_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `near_client`
--

INSERT INTO `near_client` (`n_id`, `id`, `client`, `driver`, `distance`, `time`) VALUES
(1, 2, 'Azam', 'George ', 1.87928, 0.313213),
(2, 6, 'John Smith', 'Dominic', 23.8282, 3.97136);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `post_date` varchar(20) NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`u_id`, `username`, `password`, `post_date`) VALUES
(1, 'admin', '12345', '2017-1-21');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
