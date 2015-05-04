(function(app) {

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }]);

    app.run(function () {});

    app.controller('AppController', ['$scope', function ($scope) {

    }]);

}(angular.module("hmhSearch", [
    'hmhSearch.home',
    'hmhSearch.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));
