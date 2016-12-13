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

$scope.currentuser=function(){
		console.log("oneuser")
		$http({
			method:'GET',
			url:BASE_URL+'/oneuser'
		}).success(function(data,status,headers,config){
			console.log("inside oneuser");
			$scope.oneuser=data;
			$scope.img = data.image
		})
	};
	$scope.uploadFile = function(files) {
	    var image = new FormData();
	    //Take the first selected file
	    image.append("file", files[0]);

	    $http.post(BASE_URL+'/imageUpload', image, {
	        withCredentials: true,
	        headers: {'Content-Type': undefined },
	        transformRequest: angular.identity
	    }).success(function(data, status, headers, config) {
			alert("success")
			 $scope.reloadPage = function()                                                
                   {
                     $window.location.reload();
                   }
			console.log(image)
		}).error(function(data, status, headers, config) {
			alert("error")
		});

	};
	$(function() {
		   console.log("edit")
		    $('#profile-image1').on('click', function() {
		        $('#profile-image-upload').click();
		    });
		});       
}]);