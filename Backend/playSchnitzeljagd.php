<?php

/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 14.11.2016
 * Time: 10:21
 */
include_once("Model.php");

class playSchnitzeljagd {

    private $model;

    public function __construct() {
        $this->model = new Model;
    }

    public function getGameData($gameID) {
        return $this->model->getAllPointsByGameID($gameID);
    }
}