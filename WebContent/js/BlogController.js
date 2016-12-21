var app = angular.module('myblogApp',[]);
app.controller('BlogController', [ '$scope', '$http',function($scope, $http) {
var BASE_URL = 'http://localhost:8083/backendcollab/';

$scope.getAllBlogs= function() {
console.log("get all blogs")
$http({
method : 'GET', 
url : BASE_URL+'/blog'
}).success(function(data, status, headers, config) {
$scope.blogs=data;
//alert(data); 
}).error(function(data, status, headers, config) {
alert("Error");
});
};
$scope.submit = function() {
console.log("create blog")

$scope.blog = { 
blogid:$scope.blogid,
userid:$scope.userid,
blogName : $scope.blogName,
blogDesc:$scope.blogDesc,
blogtime : $scope.blogtime,
}
$http({
method : 'POST',
url : BASE_URL + '/createblog',
data : $scope.blog
}).success(function(data, status, headers, config) {
$scope.blogid='';
$scope.userid='';
$scope.blogName='';
$scope.blogDesc='';
$scope.blogtime='';
$scope.getAllBlogs();
}).error(function(data,status,headers,config){
alert("error");
});
};
$scope.deleteblog=function(blogid){
$http({
method:'DELETE',
url:BASE_URL+'/deleteblog/'+blogid
}).success(function(data,status,headers,config){
$scope.getAllBlogs();
})
};
$scope.editblog=function(blogid,blogName,blogDesc){
$scope.blogid=blogid;
$scope.blogName=blogName;
$scope.blogDesc=blogDesc;
}


$scope.getblog=function(id){
	
	console.log("likeb")
	$http({
		method: "GET",
		url:BASE_URL+'/individualblog/'+id,
	}).success(function(data,status,headers,config){
		console.log("fetch likes")
		$location.path('/likes');
		console.log("after inside the forum")
		$rootScope.individualblogs=data;
		console.log(data)
	}).error(function(data, status, headers, config) {
		alert("Error");
	});
}

/*$scope.getAlllikes= function(id) {
	console.log("fetch likes")
	$http({
	method : 'GET', 
	url : BASE_URL+'/getlikes/'+id
	}).success(function(data, status, headers, config) {
	$scope.likes=data;
	$Scope
	//alert(data); 
	}).error(function(data, status, headers, config) {
	alert("Error");
	});
	};

$scope.postlikes=function(id){
	console.log("save likes")
	$http({
		method : 'POST',
		url : BASE_URL + '/likeblog/'+id,
	}).success(function(data, status, headers, config) {
		alert("success")
	})
	}*/

$scope.like=function(id){
	console.log("like and save it in db")
	$http({
		method : 'POST',
		url : BASE_URL + '/likeblog/'+id,
	}).success(function(data, status, headers, config) {
		alert("success")
	})
	
}

}]);