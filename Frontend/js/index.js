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
        .when('/savePoint', {
            templateUrl: 'savePoint.html',

        })
        .otherwise({
            redirectTo: '/'
        });

}]);