/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjSavePoint', function() {

    return {
        controller: 'savePointController',
        templateUrl: '../Frontend/templates/savePointView.html'
    };
});
myApp.controller('savePointController', function($scope, $http, pointService) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            $scope.$apply(function(){
                $scope.latitude = position.coords.latitude;
                $scope.longitude = position.coords.longitude;
            });
        });
    }

    $scope.submit = function() {
        var description = document.getElementById("description");
        var point = new Array(description.value, $scope.longitude, $scope.latitude);
        pointService.addPoint(point);
        console.log(pointService.getPoints());
        console.log(point);
        console.log(description.value);
        alert("Punkt gespeichert");
        window.location = "#newSchnitzeljagd";
    }
});
