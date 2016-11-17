/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjPlaySchnitzeljagd', function() {

    return {
        controller: 'playSchnitzeljagdController',
        templateUrl: '../Frontend/templates/playSchnitzeljagdView.html'
    };
});
myApp.controller('playSchnitzeljagdController', function($scope, $http, pointService) {

    $scope.submit = function() {
        console.log(pointService.getPoints());
        if (pointService.getPoints().length != 0) {
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
        }
        else {
            alert("Keine Punkte vorhanden")
        }
    };

});