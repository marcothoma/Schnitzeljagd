/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjGoOnSchnitzeljagd', function() {

    return {
        controller: 'goOnSchnitzeljagdController',
        templateUrl: '../Frontend/templates/goOnSchnitzeljagdView.html'
    };
});
myApp.controller('goOnSchnitzeljagdController', function($scope,$http, gameService, settingsService) {

    settingsService.changeReload(true);

    $http.get("../Backend/index.php?action=gameList").success(function(games){
        $scope.games = games;
        console.log(games);
    });

    $scope.setClicked = function(game) {
        console.log("radio_" + game.id);
        gameService.setGame(game);
        console.log(gameService.getGame());
        var radioButtonToSelect = document.getElementById("radio_" + game.id);
        radioButtonToSelect.checked = true;
    };

    $scope.playPrivateGame = function() {
        var id = document.getElementById("searchField");
      console.log("Private Game");
        $http({
            method: "post",
            url: '../Backend/index.php?action=getPrivateGame',
            data: {
                gameID: parseInt(id.value)
            }
        }).success(function(data) {
            gameService.setGame(data);
            console.log(gameService.getGame());
        });
    };

    $scope.submit = function() {
        settingsService.changeCanChange(true);
        console.log("submit");
        window.location = "#playSchnitzeljagd";
    }
});
