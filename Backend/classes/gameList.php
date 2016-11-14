<?php

class Controller{

    public function getAllGamesForGameList(){
        $model = new Model();
        $games = $model->getAllGames();
        $gamesJson = '';
        foreach($games as $gameKey=>$gameValue){
            if($gameValue->isPublic ==  "1"){
                $numberOfPointsResult = $model->getNumberOfPointsByGameID($gameValue->id);
                $gamesJson .= '{"name": "'.$gameValue->name.'", "points": "'.$numberOfPointsResult[0]->NumberOfPoints.'", "upvotes": "'.$gameValue->ratingPoints.'"},';
            }
        }

        return '['.substr($gamesJson, 0, -1).']';
    }

}