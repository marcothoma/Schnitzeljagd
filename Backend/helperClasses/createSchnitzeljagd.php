<?php

/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 14.11.2016
 * Time: 15:13
 */
class Controller {

    public function saveSchnitzeljagd($props) {
        $model = new Model();
        $gameID = $model->getNextGameID();
        $model->saveGame($props->gameName, $props->isPublic, '0');
        foreach ($props->points as $point) {
            $model->savePoint($gameID, $point['0'], $point['1'], $point['2']);
        }
        return $gameID;
    }

}