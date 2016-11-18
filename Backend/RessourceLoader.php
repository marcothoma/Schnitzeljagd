<?php

/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 14.11.2016
 * Time: 13:27
 */
class RessourceLoader {

    public function load ($classe) {

        include_once("Model.php");

        $fileToInclude = './helperClasses/' . strtolower($classe) . '.php';

        if (file_exists($fileToInclude)) {
            include($fileToInclude);
        }
    }

}