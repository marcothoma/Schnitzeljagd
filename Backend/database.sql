-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 11. Nov 2016 um 14:03
-- Server-Version: 5.6.24
-- PHP-Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

-- --------------------------------------------------------

--
-- Datenbank: `schnitzeljagd`
--

CREATE DATABASE IF NOT EXISTS `schnitzeljagd`;
USE `schnitzeljagd`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `games`
--

CREATE TABLE IF NOT EXISTS `games` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `isPublic` tinyint(1) NOT NULL,
  `ratingPoints` int(11) DEFAULT NULL
) ENGINE=InnoDB;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `points`
--

CREATE TABLE IF NOT EXISTS `points` (
  `id` int(11) NOT NULL,
  `fk_games` int(11) NOT NULL,
  `description` text NOT NULL,
  `xCoordinates` text NOT NULL,
  `yCoordinates` text NOT NULL
) ENGINE=InnoDB;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `points`
--
ALTER TABLE `points`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `points`
--
ALTER TABLE `points`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;