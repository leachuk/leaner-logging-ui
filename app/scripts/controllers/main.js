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
	var runOnceSet = false;
	$scope.logItemData = itemData[0];
	$scope.mapOptions = {
      center: new google.maps.LatLng(-33.8738362136655, 151.18457794189453),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    console.log("controller: logDetailCtrl");
    //console.log(itemData.coords);
	//console.log($routeParams);
	//console.log($rootScope.logData);
	//console.log(itemData);
    var mapPolyLine = [];
    for (var i=0; i < itemData[0].coords.length; i++){
    	var lat = itemData[0].coords[i].lat;
    	var lon = itemData[0].coords[i].lon;
    	var latLon = new google.maps.LatLng(lat,lon);
    	mapPolyLine.push(latLon);
    }
 
  	$scope.onMapIdle = function() {
        if (runOnceSet === false){
            new google.maps.Marker({
                map: $scope.myMap,
                position: new google.maps.LatLng(-33.8738362136655, 151.18457794189453)
            });    
       
        	new google.maps.Polyline({
				map: $scope.myMap,
				path: mapPolyLine,
				geodesic: true,
				strokeColor: '#000FFF',
				strokeOpacity: 1.0,
				strokeWeight: 2
			});
			runOnceSet = true;
			console.log("run once idle");
        }  
    };
      	
}]);

