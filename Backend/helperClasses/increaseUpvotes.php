<?php

/**
 * Created by PhpStorm.
 * User: Anwender
 * Date: 18.11.2016
 * Time: 08:54
 */
class Controller {

    public function increaseUpvotes($gameID) {
        $model = new Model();
        $model->increaseUpvotes($gameID);
        return true;
    }

}