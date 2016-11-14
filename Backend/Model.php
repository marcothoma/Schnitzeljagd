<?php

/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 11.11.2016
 * Time: 13:51
 */
include_once("Database.php");

class Model {
    private $databaseConnection;

    public function __construct() {
        $this->databaseConnection = Database::getDatabaseConnection();
    }

    public function saveGame($name, $isPublic, $ratingPoints) {
        $sql = "INSERT INTO `games` (name,isPublic,ratingPoints) VALUES ('" . $name . "','" . $isPublic . "','" . $ratingPoints . "'); ";
        $this->databaseConnection->query($sql);
    }

    public function getGameByID($gameID) {
        $sql = "SELECT * FROM `games` WHERE `id` LIKE " . $gameID;
        $sqlResult = $this->databaseConnection->query($sql);
        return $this->readSqlResult($sqlResult);
    }


    public function getAllGames() {
        $sql = "SELECT * FROM `games`";
        $sqlResult = $this->databaseConnection->query($sql);
        return $this->readSqlResult($sqlResult);
    }

    public function savePoint($fk_games, $description, $xCoordinate, $yCoordinate) {
        $sql = "INSERT INTO `points` (fk_games,description,xCoordinates,yCoordinates) VALUES (" . $fk_games . ",'" . $description . "','" . $xCoordinate . "','" . $yCoordinate . "'); ";
        $this->databaseConnection->query($sql);
    }

    public function getPointByID($pointID) {
        $sql = "SELECT * FROM `points` WHERE `id` LIKE " . $pointID;
        $sqlResult = $this->databaseConnection->query($sql);
        return $this->readSqlResult($sqlResult);
    }


    public function getAllPointsByGameID($gameID) {
        $sql = "SELECT * FROM `points` WHERE `fk_games` LIKE " . $gameID;
        $sqlResult = $this->databaseConnection->query($sql);
        return $this->readSqlResult($sqlResult);
    }

    public function getNumberOfPointsByGameID($gameID) {
        $sql = "SELECT COUNT(*) \"NumberOfPoints\" FROM `points` WHERE `fk_games` LIKE " . $gameID;
        $sqlResult =  $this->databaseConnection->query($sql);
        return $this->readSqlResult($sqlResult);
    }

    public function readSqlResult($sqlResult) {
        if ($sqlResult->num_rows > 0) {
            while ($row = $sqlResult->fetch_object()) {
                $data[] = $row;
            }
        } else {
            $data[] = null;
        }
        return $data;
    }
}