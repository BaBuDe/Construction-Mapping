// 'use strict';


// Declare app level module which depends on filters, and services

// Define an angular module for our app
angular.module('myApp', [
	'd3',
	'ngRoute',
  // 'myApp.filters',
  // 'myApp.services',
  'myApp.controllers',
  'myApp.directives'
])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: 'menuController'});
//   // $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
//   $routeProvider.otherwise({redirectTo: '/'});
// }]);



