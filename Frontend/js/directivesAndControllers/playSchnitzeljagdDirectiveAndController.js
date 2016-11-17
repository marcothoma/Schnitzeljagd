/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjPlaySchnitzeljagd', function () {

    return {
        controller: 'playSchnitzeljagdController',
        templateUrl: '../Frontend/templates/playSchnitzeljagdView.html'
    };
});
myApp.controller('playSchnitzeljagdController', function($scope, $http, gameService, settingsService) {
    if (settingsService.getCanChange()) {

        console.log(gameService.getGame());
        console.log(gameService.getGame().id);
        $http({
            method: "post",
            url: '../Backend/index.php?action=playGame',
            data: {
                gameID: gameService.getGame().id
            }
        }).success(function(data) {
            console.log(data)
        });

        $scope.submit = function() {
            console.log(gameService.getGame());

        }
    }
    else {
        alert("Don't even Try it!");
        settingsService.changeReload(true);
        window.location = "#home";
    }

    function initialize(coords, $scope) {
        var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
        var myOptions = {
            zoom: 18,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapGoOnSchnitzeljagd"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Dein Standort"
        });
    }

    navigator.geolocation.getCurrentPosition(function(position){
        initialize(position.coords);
    }, function(){
        document.getElementById('mapGoOnSchnitzeljagd').innerHTML = 'Deine Position konnte leider nicht ermittelt werden';
    });


});