<?php

/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 11.11.2016
 * Time: 13:51
 */
include_once("Database.php");

class Model
{
    private $databaseConnection;

    public function __construct()
    {
        $this->databaseConnection = Database::getDatabaseConnection();
        //$this->saveGame('Testspiel','Y','100');
        //$this->savePoint('2','Das ist ein Testpunkt.','100','100');
        var_dump($this->getAllGames(), 'getAllGames');
        var_dump($this->getAllPointsByGameID('getAllPointsByGameID'));
        var_dump($this->getGameByID('2'), 'getGameByID');
        var_dump($this->getPointByID('2'), 'getPointByID');
    }

    public function saveGame($name, $isPublic, $ratingPoints){
        $sql = "INSERT INTO `games` (name,isPublic,ratingPoints) VALUES ('".$name."','".$isPublic."','".$ratingPoints."'); ";
        $this->databaseConnection->query($sql);
    }

    public function getGameByID($gameID){
        $sql = "SELECT * FROM `games` WHERE `id` LIKE ".$gameID;
        return $this->databaseConnection->query($sql);
    }


    public function getAllGames(){
        $sql = "SELECT * FROM `games`";
        return $this->databaseConnection->query($sql);
    }

    public function savePoint($fk_games, $description, $xCoordinates, $yCoordinates){
        $sql = "INSERT INTO `points` (fk_games,description,xCoordinates,yCoordinates) VALUES (".$fk_games.",'".$description."','".$xCoordinates."','".$yCoordinates."'); ";
        $this->databaseConnection->query($sql);
    }

    public function getPointByID($pointID){
        $sql = "SELECT * FROM `points` WHERE `id` LIKE ".$pointID;
        return $this->databaseConnection->query($sql);
    }


    public function getAllPointsByGameID($gameID){
        $sql = "SELECT * FROM `points` WHERE `fk_games` LIKE ".$gameID;
        return $this->databaseConnection->query($sql);
    }
}