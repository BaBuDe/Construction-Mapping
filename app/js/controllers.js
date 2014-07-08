// 'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('d3Controller', function($scope) {
  });

angular.module('myApp.controllers', []).
	controller('menuController', function($scope) {
		$scope.neighborhoods = [
		"Richmond",
		"Inner Sunset",
		"Treasure Island",
		"Outer Sunset",
		"Market Octavia",
		"Downtown",
		"Mission",
		"East SoMa",
		"Rincon Hill",
		"WSoMa",
		"TB Combo",
		"Showpl/Potrero",
		"Central Waterfront",
		"India Basin",
		"Bernal Heights",
		"Candlestick",
		"Bayshore"
		];

		// $scope.selectedHood = "Bayshore";

		$scope.selectAction = function() {
    console.log($scope.selectedHood);
		};
	});



