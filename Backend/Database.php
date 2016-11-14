<?php

/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 11.11.2016
 * Time: 13:21
 */
class Database
{

    public static $dbConnection;

    public static function getDatabaseConnection()
    {
        if (static::$dbConnection === null) {
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbName = "schnitzeljagd";

            static::$dbConnection = new Database();
            static::$dbConnection = new mysqli($servername, $username, $password, $dbName);

            if(@static::$dbConnection->connection_error){
                die("Datenbankverbindung fehlgeschlagen: ".static::$dbConnection->conntection_error);
            }
        }

        return static::$dbConnection;
    }

}