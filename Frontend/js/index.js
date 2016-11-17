/**
 * Created by Yingrjimsch on 11.11.2016.
 */
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/.html',
        })
        .when('/newSchnitzeljagd', {
            templateUrl: 'newSchnitzeljagd.html',

        })
        .when('/playSchnitzeljagd', {
            templateUrl: 'playSchnitzeljagd.html',

        })
        .when('/goOnSchnitzeljagd', {
            templateUrl: 'goOnSchnitzeljagd.html',

        })
        .when('/savePoint', {
            templateUrl: 'savePoint.html',

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

    var setGame = function(tempGame) {
        game = tempGame;
    };

    var getGame = function(){
        return game;
    };

    return {
        setGame: setGame,
        getGame: getGame
    };

});