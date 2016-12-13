var regapp = angular.module('registerApp',[]);
regapp.controller('RegisterController', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8083/backendcollab/';
	console.log("register started");
	$scope.submit = function() {
		console.log("end");
		$scope.users = {	
			username : $scope.username,
			mail:$scope.mail,
			password:$scope.password,
			mobile : $scope.mobile,
			dob:$scope.dob,
			role:$scope.role,
			address:$scope.address,
			gender:$scope.gender,
			status:$scope.status
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/register',
			data : $scope.users
		}).success(function(data, status, headers, config) {
			$scope.username='';
			$scope.mail='';
			$scope.password='';
			$scope.mobile='';
			$scope.dob='';
			$scope.role='';
			$scope.address='';
			$scope.gender='';
			$scope.status='';
		}).error(function(data,status,headers,config){
			alert("error");
		});
	};

$scope.currentuser=function(id){
		
		console.log("oneuser")
		$http({
			method:'GET',
			url:BASE_URL+'/oneuser/'+id
		}).success(function(data,status,headers,config){
			$scope.oneuser=data;
		})
	}
}]);