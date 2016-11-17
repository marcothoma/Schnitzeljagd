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
            gameService.setPoints(data);
        });

    }
    else {
        alert("Don't even Try it!");
        settingsService.changeReload(true);
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
                    window.location = "#home";
                }
            }, {
                icon: 'glyphicon glyphicon-ban-circle',
                label: 'Nein',
                title: 'Close Close Modal',
                cssClass: 'btn-warning',
                action: function(dialogItself) {
                    dialogItself.close();
                }
            }]
        });
    };

    $scope.showInfoModal = function() {
        BootstrapDialog.show({
            message: 'Gratuliere, Sie haben das Ziel erreicht. Hat Ihnen das Spiel gefallen?',
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
    }

    function initialize_map(coords, $scope) {
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
        initialize_map(position.coords);
    }, function(){
        document.getElementById('mapGoOnSchnitzeljagd').innerHTML = 'Deine Position konnte leider nicht ermittelt werden';
    });

});