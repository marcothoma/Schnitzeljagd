/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjSavePoint', function() {

    return {
        controller: 'savePointController',
        templateUrl: '../Frontend/templates/savePointView.html'
    };
});
myApp.controller('savePointController', function($scope, $http) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            $scope.$apply(function(){
                $scope.latitude = position.coords.latitude;
                $scope.longitude = position.coords.longitude;
            });
        });
    }

    $scope.submit = function() {
        $http({
            method: "post",
            url: '../Backend/index.php?action=addPoint',
            data: {
                description: $scope.description,
                xCoordinate: $scope.longitude,
                yCoordinate: $scope.latitude
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }

});
