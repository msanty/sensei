var sensei = angular.module('sensei', ['ngRoute', 'ui.materialize']);


sensei.config(function($routeProvider) {
	$routeProvider	
	.when('/', {
		templateUrl : 'views/homePage.html'
	})
	.when('/login', {
		templateUrl : 'views/loginView.html'
	})
	.when('/signup', {
		templateUrl : 'views/signupView.html'
	})
	.when('/findasensei', {
		templateUrl : 'views/findASensei.html'
	})
	.otherwise({
		redirectTo: '/login'
	});
});