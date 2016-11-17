/**
 * Created by Yingrjimsch on 11.11.2016.
 */
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/.html'
        })
        .when('/newSchnitzeljagd', {
            templateUrl: 'newSchnitzeljagd.html'

        })
        .when('/playSchnitzeljagd', {
            templateUrl: 'playSchnitzeljagd.html'

        })
        .when('/goOnSchnitzeljagd', {
            templateUrl: 'goOnSchnitzeljagd.html'

        })
        .when('/savePoint', {
            templateUrl: 'savePoint.html'

        })
        .otherwise({

            redirectTo: '/'
        });

}]);
myApp.service('pointService', function() {
    var pointList = [];

    var addPoint = function(point) {
        pointList.push(point);
    };

    var getPoints = function(){
        return pointList;
    };

    return {
        addPoint: addPoint,
        getPoints: getPoints
    };

});

myApp.service('gameService', function() {
    var game = "";
    var pointList = []

    var setPoints = function(points) {
        pointList = points;
    };

    var getPoints = function(){
        return pointList;
    };

    var setGame = function(tempGame) {
        game = tempGame;
    };

    var getGame = function(){
        return game;
    };

    return {
        setGame: setGame,
        getGame: getGame,
        setPoints: setPoints,
        getPoints: getPoints
    };

});
myApp.service('settingsService', function() {
    var reloadHome = false;
    var canChange = false;

    var changeCanChange = function(bool) {
        reloadHome = bool;
    };

    var getCanChange = function(){
        return reloadHome;
    };

    var changeReload = function(bool) {
        reloadHome = bool;
    };

    var getReload = function(){
        return reloadHome;
    };

    return {
        getReload: getReload,
        changeReload: changeReload,
        getCanChange: getCanChange,
        changeCanChange: changeCanChange
    };

});