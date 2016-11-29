var app = angular.module('myApp', []);
app.controller('jobController', ['JobService', function(JobService){
	var self = this;
	self.job = {id : '',title : '',company : '',jobdetails : '',
			doc : '',status : '',lastdate : '',userid : ''
				};
	self.jobs=[]
	self.getAllJobs = function(){
		console.log('calling the method getAllJobs');
		JobService
		.getAllJobs()
		.then(
				function(data){
					self.jobs = data;
				}
				);
	};
	self.getAllJobs();
}]);
	
		
