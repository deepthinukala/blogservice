var mainApp = angular.module("mainApp", ['ngRoute','registerApp','myblogApp','myforumApp']);

mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/login', {
      templateUrl: 'UI/login.html', 
      controller: 'LoginController'
   }).
   
   when('/register', {
      templateUrl: 'UI/register.html', 
      controller: 'RegisterController'
   }).
   when('/Blog', {
	      templateUrl: 'UI/Blog.html', 
	      controller: 'BlogController'
	   }).
	   when('/Forum', {
		      templateUrl: 'UI/Forum.html', 
		      controller: 'ForumControl'
		   }).
   
   otherwise({
      redirectTo: '/'
   });
	
}]);

/*var app = angular.module('myApp', []);*/

mainApp.controller('myController', function($scope) {
    $scope.message = "Volvo";
});
mainApp.controller("Logincontroller", function ($scope) {
	$scope.username = "deepthi";
	$scope.password = "deepthi"

	 
});