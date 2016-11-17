<?php

/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 17.11.2016
 * Time: 11:46
 */
class Controller{

    public function getAllPointsForGame($gameID){
        $model = new Model();

        $pointsJson = '';
        $points = $model->getAllPointsByGameID($gameID);
        foreach($points as $pointKey => $pointValue){
            $pointsJson .= '{"id":"'.$pointValue->id.'", "description": "'.$pointValue->description.'", "longitude": "'.$pointValue->xCoordinates.'", "latitude": "'.$pointValue->yCoordinates.'"},';
        }
        return '['.substr($pointsJson, 0, -1).']';
    }

}