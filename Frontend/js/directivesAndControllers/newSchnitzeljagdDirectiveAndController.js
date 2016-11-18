/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjNewSchnitzeljagd', function() {

    return {
        controller: 'newSchnitzeljagdController',
        templateUrl: '../Frontend/templates/newSchnitzeljagdView.html'
    };
});
myApp.controller('newSchnitzeljagdController', function($scope, $http, pointService, settingsService) {

    settingsService.changeCanChange(true);
    settingsService.changeReload(true);


    $scope.submitNewGame = function() {
        var isPublicValue = $scope.isPublic;
        console.log(pointService.getPoints());
        if (pointService.getPoints().length != 0) {
            console.log($scope.gameName);
            $http({
                method: "post",
                url: '../Backend/index.php?action=createSchnitzeljagd',
                data: {
                    gameName: $scope.gameName,
                    isPublic: $scope.isPublic,
                    points: pointService.getPoints()
                },
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (id) {
                console.log(id);
                console.log("success");
                window.location = "#home";
                if (isPublicValue != true) {
                    alert("Spiel gespeichert. Die Nummer Ihres Privaten Spiels ist: " + id);
                }
                else {
                    alert("Spiel gespeichert.");
                }

            });
        }
        else {
            alert("Keine Punkte vorhanden")
        }
    };

    function initialize_map(coords, $scope) {
        var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
        var myOptions = {
            zoom: 18,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapCreateNewSchnitzeljagd"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Dein Standort",
            icon: 'img/meMarker.png'
        });
    }

    navigator.geolocation.getCurrentPosition(function(position){
        initialize_map(position.coords);
    }, function(){
        document.getElementById('mapCreateNewSchnitzeljagd').innerHTML = 'Deine Position konnte leider nicht ermittelt werden';
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $scope.$apply(function() {
                $scope.latitude = position.coords.latitude;
                $scope.longitude = position.coords.longitude;
            });
        });
    }

    $scope.submitNewPoint = function() {
        var description = document.getElementById("description");
        var point = new Array(description.value, $scope.longitude, $scope.latitude);
        pointService.addPoint(point);
        alert("Punkt gespeichert");
        $('#newPointModal').modal('hide');
        $('#description').val('');
    };

    var gameInterval = window.setInterval(function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            initialize_map(position.coords);
        }, function() {
            document.getElementById('mapGoOnSchnitzeljagd').innerHTML = 'Deine Position konnte leider nicht ermittelt werden';
        });
    }, 5000);
});