'use strict';

var learnerLogCtrl = angular.module('learnerLogCtrl', []);

//controller for creating a new log
learnerLogCtrl.controller('newLogCtrl', ['$scope','$routeParams',function($scope, $routeParams){
	$scope.testvars = ['var1','var2'];
	$scope.gpsStatus = ['initialising','ready'];
	console.log("controller: newLogCtrl");
	
	$scope.startGpsRecord = function(){
		console.log("startGpsRecord clicked");
	}
	
	$scope.stopGpsRecord = function(){
		console.log("stopGpsRecord clicked");
	}
}]);

learnerLogCtrl.controller('homeCtrl', ['$scope','$routeParams',function($scope, $routeParams){
	$scope.testvarshome = ['var3','var4'];
	console.log("controller: homeCtrl");
}]);

learnerLogCtrl.controller('logDetailCtrl', ['$scope','$routeParams',function($scope, $routeParams){
	$scope.testvarslogdetail = ['detailvar1','detailvar2'];
	console.log("controller: logDetailCtrl");
}]);
