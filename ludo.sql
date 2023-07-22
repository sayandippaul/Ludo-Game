-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 30, 2022 at 12:28 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ludo`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `body` varchar(500) NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ludoghor`
--

CREATE TABLE `ludoghor` (
  `id` int(11) NOT NULL,
  `kardun` int(11) NOT NULL,
  `dun` int(11) NOT NULL,
  `fel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ludoghor`
--

INSERT INTO `ludoghor` (`id`, `kardun`, `dun`, `fel`) VALUES
(1, 1, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

CREATE TABLE `position` (
  `id` int(11) NOT NULL,
  `name` varchar(10) NOT NULL,
  `position` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`id`, `name`, `position`) VALUES
(1, 'r1', 'r1'),
(2, 'r2', 'r2'),
(3, 'r3', 'r3'),
(4, 'r4', 'r4'),
(5, 'b1', 'b1'),
(6, 'b2', 'b2'),
(7, 'b3', 'b3'),
(8, 'b4', 'b4'),
(9, 'g1', 'g1'),
(10, 'g2', 'g2'),
(11, 'g3', 'g3'),
(12, 'g4', 'g4'),
(13, 'y1', 'y1'),
(14, 'y2', 'y2'),
(15, 'y3', 'y3'),
(16, 'y4', 'y4');

-- --------------------------------------------------------

--
-- Table structure for table `stat`
--

CREATE TABLE `stat` (
  `id` int(11) NOT NULL,
  `g1` int(11) NOT NULL,
  `g2` int(11) NOT NULL,
  `g3` int(11) NOT NULL,
  `g4` int(11) NOT NULL,
  `g5` int(11) NOT NULL,
  `g6` int(11) NOT NULL,
  `gcuty` int(11) NOT NULL,
  `gcutb` int(11) NOT NULL,
  `gcutr` int(11) NOT NULL,
  `gcutbb` int(11) NOT NULL,
  `gcutby` int(11) NOT NULL,
  `gcutbr` int(11) NOT NULL,
  `r1` int(11) NOT NULL,
  `r2` int(11) NOT NULL,
  `r3` int(11) NOT NULL,
  `r4` int(11) NOT NULL,
  `r5` int(11) NOT NULL,
  `r6` int(11) NOT NULL,
  `rcutb` int(11) NOT NULL,
  `rcutg` int(11) NOT NULL,
  `rcuty` int(11) NOT NULL,
  `rcutbb` int(11) NOT NULL,
  `rcutbg` int(11) NOT NULL,
  `rcutby` int(11) NOT NULL,
  `b1` int(11) NOT NULL,
  `b2` int(11) NOT NULL,
  `b3` int(11) NOT NULL,
  `b4` int(11) NOT NULL,
  `b5` int(11) NOT NULL,
  `b6` int(11) NOT NULL,
  `bcutg` int(11) NOT NULL,
  `bcutr` int(11) NOT NULL,
  `bcuty` int(11) NOT NULL,
  `bcutby` int(11) NOT NULL,
  `bcutbg` int(11) NOT NULL,
  `bcutbr` int(11) NOT NULL,
  `y1` int(11) NOT NULL,
  `y2` int(11) NOT NULL,
  `y3` int(11) NOT NULL,
  `y4` int(11) NOT NULL,
  `y5` int(11) NOT NULL,
  `y6` int(11) NOT NULL,
  `ycutb` int(11) NOT NULL,
  `ycutr` int(11) NOT NULL,
  `ycutg` int(11) NOT NULL,
  `ycutbb` int(11) NOT NULL,
  `ycutbg` int(11) NOT NULL,
  `ycutbr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stat`
--

INSERT INTO `stat` (`id`, `g1`, `g2`, `g3`, `g4`, `g5`, `g6`, `gcuty`, `gcutb`, `gcutr`, `gcutbb`, `gcutby`, `gcutbr`, `r1`, `r2`, `r3`, `r4`, `r5`, `r6`, `rcutb`, `rcutg`, `rcuty`, `rcutbb`, `rcutbg`, `rcutby`, `b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `bcutg`, `bcutr`, `bcuty`, `bcutby`, `bcutbg`, `bcutbr`, `y1`, `y2`, `y3`, `y4`, `y5`, `y6`, `ycutb`, `ycutr`, `ycutg`, `ycutbb`, `ycutbg`, `ycutbr`) VALUES
(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `win`
--

CREATE TABLE `win` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ludoghor`
--
ALTER TABLE `ludoghor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stat`
--
ALTER TABLE `stat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `win`
--
ALTER TABLE `win`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ludoghor`
--
ALTER TABLE `ludoghor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `position`
--
ALTER TABLE `position`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `stat`
--
ALTER TABLE `stat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `win`
--
ALTER TABLE `win`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
