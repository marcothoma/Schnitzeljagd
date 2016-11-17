/**
 * Created by Anwender on 14.11.2016.
 */
myApp.directive('sjHome', function() {

    return {
        controller: 'homeController',
        templateUrl: '../Frontend/templates/homeView.html'
    };
});
myApp.controller('homeController', function(settingsService) {
    if (settingsService.getReload()) {
        window.location.reload()
    }
});