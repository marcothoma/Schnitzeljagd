<?php
/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 11.11.2016
 * Time: 14:45
 */

include_once ("RessourceLoader.php");

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
}


?>
