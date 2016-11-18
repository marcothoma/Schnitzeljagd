<?php

/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 18.11.2016
 * Time: 14:47
 */
class Controller {

    public function getPrivateGame($gameID){
        $model = new Model();
        $privateGame = $model->getGameByID($gameID)[0];
        var_dump($privateGame->id);
        $numberOfPointsResult = $model->getNumberOfPointsByGameID($privateGame->id);
        var_dump($numberOfPointsResult);
        return '[{"id": "'.$privateGame->id.'", "name": "'.$privateGame->name.'", "points": "'.$numberOfPointsResult[0]->NumberOfPoints.'", "upvotes": "'.$privateGame->ratingPoints.'"}]';
    }

}