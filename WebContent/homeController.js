var app= angular.module("mainApp", ['ngRoute','registerApp','myblogApp','myforumApp','app1','myfriendapp','loginApp','ngCookies'])
.run(run)
app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   when("/home", {
       templateUrl : 'UI/home.html',
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
   when('/UserProfile', {
	      templateUrl: 'UI/UserProfile.html', 
	      controller: 'RegisterController'
	   }).
   when('/Blog', {
	      templateUrl: 'UI/Blog.html', 
	      controller: 'BlogController'
	   }).
	   when('/likes', {
		      templateUrl: 'UI/likes.html', 
		      controller: 'likeControl'
		   }).
	   when('/Forum', {
		      templateUrl: 'UI/Forum.html', 
		      controller: 'ForumControl'
		   }).
		   when('/individualforum', {
			      templateUrl: 'UI/IndividualForum.html', 
			      controller: 'commentControl'
			   }).
		when('/Friend', {
			    templateUrl: 'UI/Friend.html', 
			    controller: 'FriendController'
			   }).
		when('/newrequests', {
				 templateUrl: 'UI/newrequests.html', 
				 controller: 'myfrndsCntrl'
				   }).
		when('/myfriends', {
				templateUrl: 'UI/myfriends.html', 
				controller: 'myfrndsCntrl'
				}).
		when('/chat', {
			templateUrl: 'UI/chat.html', 
			controller: 'chatController'
			}).
		when('/job', {
			templateUrl: 'UI/job.html', 
			controller: 'jobctrl'
				}).	
   
   otherwise({
      redirectTo: '/'
   });
	
   
}]);
console.log("route");    
run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    $rootScope.currentuser = $cookieStore.get('currentuser') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register','/home','/job']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
}

/*var app = angular.module('myApp', []);*/

//mainApp.controller('myController', function($scope) {
  //  $scope.message = "Volvo";
//});
/*mainApp.controller("Logincontroller", function ($scope) {
	$scope.username = "deepthi";
	$scope.password = "deepthi"

	 
});*/