<?php

/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 14.11.2016
 * Time: 10:59
 */

include_once("Model.php");

class createSchnitzeljagd {

    private $model;

    public function __construct() {
        $this->model = new Model;
    }

    public function createNewGame($points) {
        foreach ($points as $pointKey => $pointValue){
            return true;
        }
        return true;
    }

}