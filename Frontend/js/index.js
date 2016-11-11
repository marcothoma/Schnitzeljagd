/**
 * Created by Yingrjimsch on 11.11.2016.
 */
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/.html',
            controller: 'homeController'
        })
        .when('/newSchnitzeljagd', {
            templateUrl: 'newSchnitzeljagd.html',
            controller: 'newSchnitzeljagdController'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);

myApp.controller('homeController', function ($scope) {
    console.log("DINI TICKI MUETTER");
});
myApp.controller('newSchnitzeljagdController', function ($scope) {
    // Note: This example requires that you consent to location sharing when
    // prompted by your browser. If you see the error "The Geolocation service
    // failed.", it means you probably did not give permission for the browser to
    // locate you.

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 15
        });

        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var marker = new google.maps.Marker({
                    position: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    map: map
                });

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                map.setCenter(pos);
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    }
});