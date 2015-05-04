(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {

		/*
		$stateProvider
		.state('home',{
			url: '/home',
			controller: 'HomeCtrl as ctrl',
			template:"<div>haluz</div>"
			//templateUrl: 'home/home.tpl.html'
		});
		*/
        $urlRouterProvider.otherwise('/home');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("hmhSearch", [
    'hmhSearch.home',
    'hmhSearch.about',
    'hmhSearch.Data',
    'templates-app',
    'templates-common',
	'Modals',
    'ui.router.state',
    'ui.router',
])));
