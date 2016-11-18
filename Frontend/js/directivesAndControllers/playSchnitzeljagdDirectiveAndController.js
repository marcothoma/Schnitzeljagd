/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjPlaySchnitzeljagd', function() {

    return {
        controller: 'playSchnitzeljagdController',
        templateUrl: '../Frontend/templates/playSchnitzeljagdView.html'
    };
});
myApp.controller('playSchnitzeljagdController', function($scope, $http, gameService, settingsService) {

    if (settingsService.getCanChange()) {

        $http({
            method: "post",
            url: '../Backend/index.php?action=playGame',
            data: {
                gameID: gameService.getGame().id
            }
        }).success(function(data) {
            gameService.setPoints(data);
            console.log("-----------------");
            console.log(gameService.getPoints());
            console.log("-----------------");
        });

        function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2 - lat1);  // deg2rad below
            var dLon = deg2rad(lon2 - lon1);
            var a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
            return d * 1000;
        }

        function deg2rad(deg) {
            return deg * (Math.PI / 180)
        }

        var locations = [];
        var firstPointAdded = false;
        var gameInterval = window.setInterval(function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    $scope.$apply(function() {
                        $scope.latitude = position.coords.latitude;
                        $scope.longitude = position.coords.longitude;
                    });
                });
            }
            navigator.geolocation.getCurrentPosition(function(position) {
                if (gameService.getPointNumber() == 0 && firstPointAdded == false) {
                    console.log("pointnumber is 0 -----------");
                    firstPointAdded = true;
                    locations.push({
                        lat: parseFloat(gameService.getPoints()[gameService.getPointNumber()]["latitude"]),
                        lng: parseFloat(gameService.getPoints()[gameService.getPointNumber()]["longitude"])
                    });
                }
                initialize_map(position.coords);
            }, function() {
                document.getElementById('mapGoOnSchnitzeljagd').innerHTML = 'Deine Position konnte leider nicht ermittelt werden';
            });

            if (getDistanceFromLatLonInKm($scope.latitude, $scope.longitude, gameService.getPoints()[gameService.getPointNumber()]["latitude"], gameService.getPoints()[gameService.getPointNumber()]["longitude"]) <= 100) {
                if (gameService.getPointNumber() != 1) {

                    locations.push({
                        lat: parseFloat(gameService.getPoints()[gameService.getPointNumber()]["latitude"]),
                        lng: parseFloat(gameService.getPoints()[gameService.getPointNumber()]["longitude"])
                    });
                }
                if (gameService.getPointNumber() != gameService.getPoints().length - 1) {
                    navigator.vibrate(1000);
                    $scope.showNearbyModal();
                    gameService.addPointNumber();
                    console.log(gameService.getPointNumber());
                    /*Create New Marker*/
                } else {
                    navigator.vibrate(1000);
                    clearInterval(gameInterval);
                    $scope.showEndModal();
                }
            }
        }, 5000);
    }
    else {
        alert("Don't even Try it!");
        settingsService.changeReload(true);
        settingsService.changeCanChange(true);
        window.location = "#home";
    }

    $scope.showCloseGameModal = function() {
        BootstrapDialog.show({
            message: 'Wollen Sie das Spiel wirklich beenden?',
            buttons: [{
                label: 'Ja',
                cssClass: 'btn-warning',
                icon: 'glyphicon glyphicon-ok',
                title: 'Close Game',
                action: function(dialogItself) {
                    dialogItself.close();
                    settingsService.changeReload(true);
                    window.location = "#home";
                }
            }, {
                icon: 'glyphicon glyphicon-ban-circle',
                label: 'Nein',
                title: 'Close Close Modal',
                cssClass: 'btn-primary',
                action: function(dialogItself) {
                    dialogItself.close();
                }
            }]
        });
    };

    $scope.showEndModal = function() {
        BootstrapDialog.show({
            message: 'Gratuliere, Sie haben das Ziel erreicht. Hat Ihnen das Spiel gefallen?',
            buttons: [{
                label: 'Ja',
                cssClass: 'btn-primary',
                icon: 'glyphicon glyphicon-ok',
                title: 'Close Game',
                action: function(dialogItself) {
                    dialogItself.close();
                    settingsService.changeReload(true);
                    console.log(gameService.getGame()["id"]);
                    $http({
                        method: "post",
                        url: '../Backend/index.php?action=increaseUpvotes',
                        data: {
                            gameID: gameService.getGame()["id"]
                        }
                    }).success(function() {
                        console.log("success");
                        window.location = "#home";

                    });
                }
            }, {
                icon: 'glyphicon glyphicon-ban-circle',
                label: 'Nein',
                title: 'Close Close Modal',
                cssClass: 'btn-warning',
                action: function(dialogItself) {
                    dialogItself.close();
                    settingsService.changeReload(true);
                    window.location = "#home";
                }
            }]
        });
    };

    $scope.showInfoModal = function() {
        BootstrapDialog.show({
            message: gameService.getPoints()[gameService.getPointNumber()]["description"],
            buttons: [{
                icon: 'glyphicon glyphicon-ok',
                label: 'Okay',
                title: 'Close Close Modal',
                cssClass: 'btn-primary btn btn-block',
                action: function(dialogItself) {
                    dialogItself.close();
                }
            }]
        });
    };

    $scope.showNearbyModal = function() {
        BootstrapDialog.show({
            message: 'Sie sind ganz in der Nähe des nächsten Punktes! Nächster Hinweis: ',
            buttons: [{
                icon: 'glyphicon glyphicon-ok',
                label: 'Okay',
                title: 'Close Close Modal',
                cssClass: 'btn-primary btn btn-block',
                action: function(dialogItself) {
                    dialogItself.close();
                }
            }]
        });
    };
    /*Create new Marker*/
    function initialize_map(coords) {
        var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
        var myOptions = {
            zoom: 18,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapGoOnSchnitzeljagd"), myOptions);

        var myPosition = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Dein Standort",
            label: "ME"
        });

        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: "" + (i + 1),
                map: map
            });
        });
    }


    navigator.geolocation.getCurrentPosition(function(position) {
        initialize_map(position.coords);
    }, function() {
        document.getElementById('mapGoOnSchnitzeljagd').innerHTML = 'Deine Position konnte leider nicht ermittelt werden';
    });

});