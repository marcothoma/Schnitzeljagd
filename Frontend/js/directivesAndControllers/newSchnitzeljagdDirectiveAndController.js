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
        console.log(pointService.getPoints());
        $http({
            method: "post",
            url: '../Backend/index.php?action=createSchnitzeljagd',
            data: {
                gameName: $scope.gameName.value,
                isPublic: $scope.isPublic,
                points: pointService.getPoints()
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
        location.reload();
    };
});