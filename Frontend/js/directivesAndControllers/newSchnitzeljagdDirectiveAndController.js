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


    $scope.submit = function() {
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
            }).success(function () {
                window.location = "#/";
                location.reload();
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
            title: "Dein Standort"
        });
    }

    navigator.geolocation.getCurrentPosition(function(position){
        initialize_map(position.coords);
    }, function(){
        document.getElementById('mapCreateNewSchnitzeljagd').innerHTML = 'Deine Position konnte leider nicht ermittelt werden';
    });

});