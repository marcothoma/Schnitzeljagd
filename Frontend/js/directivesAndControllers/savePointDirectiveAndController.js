/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjSavePoint', function() {

    return {
        controller: 'savePointController',
        templateUrl: '../Frontend/templates/savePointView.html'
    };
});
myApp.controller('savePointController', function($scope) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            $scope.$apply(function(){
                $scope.latitude = position.coords.latitude;
                $scope.longitude = position.coords.longitude;
            });
        });
    }
    $scope.submit = function() {
        console.log($scope.description);
    }

});
