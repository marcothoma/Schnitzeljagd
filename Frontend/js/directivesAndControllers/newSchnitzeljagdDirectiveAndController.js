/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjNewSchnitzeljagd', function() {

    return {
        controller: 'newSchnitzeljagdController',
        templateUrl: '../Frontend/templates/newSchnitzeljagdView.html'
    };
});
myApp.controller('newSchnitzeljagdController', function($scope,$http, pointService) {

    $scope.submit = function () {
        $http({
            method: "post",
            url: '../Backend/index.php?action=createSchnitzeljagd',
            data: {
                gameName: $scope.gameName,
                isPublic: $scope.isPublic,
                points: pointService.getPoints()
            }
        }).success(function () {
            window.location = "#/";
            location.reload();
        });
    };
});