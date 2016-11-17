<?php

/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 14.11.2016
 * Time: 15:13
 */
class Controller {

    private $model;

    public function __construct() {
        $this->model = new Model();
    }

    public function saveSchnitzeljagd($props) {
        $gameID = $this->model->getNextGameID();
        $this->model->saveGame($props->gameName, $props->isPublic, '0');
        foreach ($props->points as $point) {
            $this->model->savePoint($gameID, $point['0'], $point['1'], $point['2']);
        }
        return true;
    }
}