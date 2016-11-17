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