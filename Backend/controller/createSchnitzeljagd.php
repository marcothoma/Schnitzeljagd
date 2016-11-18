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
        if ($props->isPublic) {
            $isPublic = 1;
        } else {
            $isPublic = 0;
        }
        $model->saveGame($props->gameName, $isPublic, '0');
        foreach ($props->points as $point) {
            $model->savePoint($gameID, $point['0'], $point['1'], $point['2']);
        }
        return $gameID;
    }

}