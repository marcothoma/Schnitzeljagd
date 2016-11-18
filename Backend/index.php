<?php
/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 11.11.2016
 * Time: 14:45
 */

include_once ("RessourceLoader.php");

$props = json_decode(file_get_contents('php://input'));

if(!$_GET['action']){
    $action = "";
} else{
    $action = $_GET['action'];
}

$ressourceLoader = new RessourceLoader();
$ressourceLoader->load($action);


switch ($action) {
    case 'gameList':
        $controller = new Controller();
        echo $controller->getAllGamesForGameList();
        break;
    case 'createSchnitzeljagd':
        $controller = new Controller();
        $controller->saveSchnitzeljagd($props);
        break;
    case 'playGame':
        $controller = new Controller();
        echo $controller->getAllPointsForGame($props->gameID);
        break;
    case 'increaseUpvotes':
        $controller = new Controller();
        $controller->increaseUpvotes($props->gameID);
        break;
}


?>
