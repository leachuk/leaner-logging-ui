'use strict';

var learnerLogCtrl = angular.module('learnerLogCtrl', []);

//controller for creating a new log
learnerLogCtrl.controller('newLogCtrl', ['$scope', '$http', '$routeParams',function($scope, $http, $routeParams){
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

learnerLogCtrl.controller('homeCtrl', ['$scope', '$rootScope', '$http', '$routeParams', 'GetAllLogDataJsonService', function($scope, $rootScope, $http, $routeParams, GetAllLogDataJsonService){
	$scope.testvarshome = ['var3','var4'];
	console.log("controller: homeCtrl");
	GetAllLogDataJsonService.query(function(data){
		console.log(data);
		$rootScope.logData = data;
	})
}]);

learnerLogCtrl.controller('logDetailCtrl', ['$scope', '$rootScope', '$routeParams', '$filter',function($scope, $rootScope, $routeParams, $filter){
	$scope.testvarslogdetail = ['detailvar1','detailvar2'];
	$scope.logItemId = $routeParams.logid;
	var itemData = $filter('filter')($rootScope.logData, {id: $routeParams.logid});
	$scope.logItemData = itemData[0];
	$scope.mapOptions = {
      center: new google.maps.LatLng(35.784, -78.670),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	console.log("controller: logDetailCtrl");
	console.log($routeParams);
	console.log($rootScope.logData);
	console.log(itemData);
}]);

