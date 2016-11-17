<?php

/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 14.11.2016
 * Time: 15:13
 */
class Controller {

    private $model;
    private $allPoints = array();

    public function __construct() {
        $this->model = new Model();
    }

    public function addPoint($description, $xCoordinate, $yCoordinate) {
        $this->allPoints[] = ['description'=> $description, 'xCoordinate'=> $xCoordinate, 'yCoordinate'=> $yCoordinate];
    }

    public function saveSchnitzeljagd($points) {
        $this->model->saveGame('', '', '');
        $gameID = $this->model->getNextGameID();
        foreach ($this->allPoints as $pointKey => $pointValue) {
            $this->model->savePoint($gameID, $pointValue['description'], $pointValue['xCoordinate'], $pointValue['yCoordinate']);
        }
        return true;
    }
}