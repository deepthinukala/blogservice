app.controller('commentControl', [ '$scope', '$http','$rootScope', function($scope, $http,$rootScope) {
	var BASE_URL = 'http://localhost:8083/backendcollab/';
	$scope.iforum=$rootScope.individualforums;
	//console.log(individualforums)
	$scope.submit=function(id){
		$scope.forumcomment={
				comment:$scope.comment
		}
		console.log("into forum comment")
		$http({
			method:'POST',
			url:BASE_URL+'/commentforum/'+id ,
			data:$scope.forumcomment
		}).success(function(data, status, headers, config) {
			$scope.comment='';
			console.log("able to comment")
		})
	}
	$scope.getcomment=function(id){
		console.log("into getcomment")
		$http({
			method:'GET',
			url:BASE_URL+'/getforumcomment/'+id
		}).success(function(data,status,headers,config){
			$scope.comments=data;
			console.log("retrieve through getcomment")
		})
	}
	$scope.getuser=function(id){
		$http({
			method: 'GET',
			url: BASE_URL+'/oneuser/'+id
		}).success(function(data,status,headers,config){
			$scope.users=data;
		})
	}
}])