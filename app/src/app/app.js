(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("hmhSearch", [
    'hmhSearch.home',
    'hmhSearch.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));
