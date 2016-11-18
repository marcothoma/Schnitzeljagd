-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 18. Nov 2016 um 11:42
-- Server-Version: 5.6.24
-- PHP-Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `schnitzeljagd`
--
CREATE DATABASE IF NOT EXISTS `schnitzeljagd`
  DEFAULT CHARACTER SET latin1
  COLLATE latin1_swedish_ci;
USE `schnitzeljagd`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `games`
--

DROP TABLE IF EXISTS `games`;
CREATE TABLE IF NOT EXISTS `games` (
  `id`           INT(11)    NOT NULL,
  `name`         TEXT       NOT NULL,
  `isPublic`     TINYINT(1) NOT NULL,
  `ratingPoints` INT(11) DEFAULT NULL
)
  ENGINE = InnoDB
  AUTO_INCREMENT = 3
  DEFAULT CHARSET = latin1;

--
-- Daten für Tabelle `games`
--

INSERT INTO `games` (`id`, `name`, `isPublic`, `ratingPoints`) VALUES
  (1, 'NY City Search', 1, 23),
  (2, 'Zürijagd', 1, 0);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `points`
--

DROP TABLE IF EXISTS `points`;
CREATE TABLE IF NOT EXISTS `points` (
  `id`           INT(11) NOT NULL,
  `fk_games`     INT(11) NOT NULL,
  `description`  TEXT    NOT NULL,
  `xCoordinates` TEXT    NOT NULL,
  `yCoordinates` TEXT    NOT NULL
)
  ENGINE = InnoDB
  AUTO_INCREMENT = 10
  DEFAULT CHARSET = latin1;

--
-- Daten für Tabelle `points`
--

INSERT INTO `points` (`id`, `fk_games`, `description`, `xCoordinates`, `yCoordinates`) VALUES
  (3, 1, 'Gehe nach Links in die Vandalia', '-73.866516', '40.658634'),
  (4, 1, 'Gehe nach Links bis zur Bushaltestelle: FOUNTAIN AV/FLATLANDS AV', '-73.866891', '40.660278'),
  (5, 1,
   'Überquere die Kreuzung und gehe bis richts die Old Mill Rd erscheint. Laufe an dieser Strasse vorbei bis zur nächsten Kreuzung',
   ' -73.868323', '40.661995'),
  (6, 1,
   'Gehe an der Kreuzung nach rechts und dann nach Links in die Pine Street. Bei der Amazing Grace Church haben Sie Ihr Ziel erreicht.',
   '-73.867832', '40.662933'),
  (7, 2, 'Laufe an der Limat entlang bis zur Münsterbrücke', '8.541872', '47.369868'),
  (8, 2, 'Überquere die Münsterbrücke und laufe weiter bis zur ersten Querstrasse', '8.543256', '47.370046'),
  (9, 2, 'Gehe Nach Links bis zum Restaurant zum Rüden. Guten Appetit;)', '8.542999', '47.370903');

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
  MODIFY `id` INT(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 3;
--
-- AUTO_INCREMENT für Tabelle `points`
--
ALTER TABLE `points`
  MODIFY `id` INT(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 10;
/*!40101 SET CHARACTER_SET_CLIENT = @OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS = @OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION = @OLD_COLLATION_CONNECTION */;
