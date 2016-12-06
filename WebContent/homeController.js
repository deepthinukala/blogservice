var mainApp = angular.module("mainApp", ['ngRoute','registerApp','myblogApp','myforumApp','myfriendapp','loginApp','ngCookies']);

mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   when("/home", {
       templateUrl : "home.html",
       controller:'loginController',
   	controllerAs:'vm'
   }).
   when('/login', {
      templateUrl: 'UI/login.html', 
      controller: 'loginController',
      controllerAs:'vm'
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
		when('/Friend', {
			    templateUrl: 'UI/Friend.html', 
			    controller: 'FriendController'
			   }).
   
   otherwise({
      redirectTo: '/'
   });
	
}]);

var app = angular.module('myApp', []);

mainApp.controller('myController', function($scope) {
    $scope.message = "Volvo";
});
/*mainApp.controller("Logincontroller", function ($scope) {
	$scope.username = "deepthi";
	$scope.password = "deepthi"

	 
});*/