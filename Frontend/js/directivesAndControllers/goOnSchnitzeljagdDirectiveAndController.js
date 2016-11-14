/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjGoOnSchnitzeljagd', function() {

    return {
        controller: 'goOnSchnitzeljagdController',
        templateUrl: '../Frontend/templates/goOnSchnitzeljagdView.html'
    };
});
myApp.controller('goOnSchnitzeljagdController', function($scope) {
    $scope.games = [{name: "Test1", points: "5", upvotes: "40"}, {name: "Test2", points: "8", upvotes: "20"}, {name: "Test3", points: "9", upvotes: "77"}]
});
