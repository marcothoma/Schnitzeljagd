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

});