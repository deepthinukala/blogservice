var myforumapp = angular.module('myforumApp',[]);
myforumapp.controller('ForumControl', [ '$scope', '$http', function($scope, $http) {
var BASE_URL = 'http://localhost:8083/backendcollab/';

$scope.getAllForum= function() {
console.log("get all forums")
$http({
method : 'GET',
url : BASE_URL+'/forum'
}).success(function(data, status, headers, config) {
$scope.forums=data;
//alert(data); 
}).error(function(data, status, headers, config) {
alert("Error");
});
};
$scope.submit = function() {
console.log("create forum")

$scope.forum = { 
id:$scope.id,
userid:$scope.userid,
topic:$scope.topic,
name : $scope.name,
description:$scope.description,
doc : $scope.doc,
}
$http({
method : 'POST',
url : BASE_URL + '/createforum',
data : $scope.forum
}).success(function(data, status, headers, config) {
$scope.id='';
$scope.topic=''
$scope.userid='';
$scope.name='';
$scope.description='';
$scope.doc='';
$scope.getAllForum();
}).error(function(data,status,headers,config){
alert("error");
});
};
$scope.deleteforum=function(id){
$http({
method:'DELETE',
url:BASE_URL+'/deleteforum/'+id
}).success(function(data,status,headers,config){
$scope.getAllForum();
})
};
$scope.editforum=function(id,name,topic,description){
$scope.id=id;
$scope.name=name;
$scope.topic=topic;
$scope.description=description;
}
}]);