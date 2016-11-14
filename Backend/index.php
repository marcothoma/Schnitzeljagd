<?php
/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 11.11.2016
 * Time: 14:45
 */


include_once ("playSchnitzeljagd.php");


$schnitzeljagd = new playSchnitzeljagd();
$schnitzeljagdPoints = $schnitzeljagd->getGameData(2);
var_dump($schnitzeljagdPoints);