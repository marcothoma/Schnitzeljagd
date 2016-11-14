/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjGoOnSchnitzeljagd', function() {

    return {
        controller: 'goOnSchnitzeljagdController',
        templateUrl: '../Frontend/templates/goOnSchnitzeljagdView.html'
    };
});
myApp.controller('goOnSchnitzeljagdController', function($scope, $http) {
    $http.get("../Backend/index.php?action=gameList").success(function(games){
        $scope.games = games;
    });
});
