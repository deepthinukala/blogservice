app.controller('likeControl', [ '$scope', '$http','$rootScope', function($scope, $http,$rootScope) {
	var BASE_URL = 'http://localhost:8083/backendcollab/';
	$scope.iblog=$rootScope.individualblogs;
	//console.log(individualforums)
	$scope.submit=function(id){
		$scope.bloglike={
				likes:$scope.likes
		}
		console.log("into blog like")
		$http({
			method:'POST',
			url:BASE_URL+'/likeblog/'+id,
			data:$scope.forumcomment
		}).success(function(data, status, headers, config) {
			$scope.like='';
			console.log("able to like")
		})
	}
	$scope.getlikes=function(id){
		console.log("into getcomment")
		$http({
			method:'GET',
			url:BASE_URL+'/getlikes/'+id
		}).success(function(data,status,headers,config){
			$scope.likes=data;
			console.log("retrieve through likes")
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