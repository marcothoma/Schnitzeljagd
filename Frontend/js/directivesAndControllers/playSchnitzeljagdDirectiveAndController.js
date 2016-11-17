/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjPlaySchnitzeljagd', function() {

    return {
        controller: 'playSchnitzeljagdController',
        templateUrl: '../Frontend/templates/playSchnitzeljagdView.html'
    };
});
myApp.controller('playSchnitzeljagdController', function($scope, $http, gameService) {
    console.log(gameService.getGame());
    console.log(gameService.getGame().id);
    $http({
        method: "post",
        url: '../Backend/index.php?action=playGame',
        data: {
            gameID: gameService.getGame.id
        }
    }).success(function(data) {
        console.log(data)
    });

    $scope.submit = function() {
        console.log(gameService.getGame());

        }

});