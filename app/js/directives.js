// 'use strict';

/* Directives */


// angular.module('myApp.directives', []).
//   directive('appVersion', ['version', function(version) {
//     return function(scope, elm, attrs) {
//       elm.text(version);
//     };
//   }]);

// angular.module('appApp.directives')
//   .directive('d3Bars', ['d3Service', function(d3Service) {
//     return {
//       restrict: 'EA',
//       scope: {},
//       link: function(scope, element, attrs) {
//         d3Service.d3().then(function(d3) {
//           var svg = d3.select(ele[0])
//           .append('svg')
//           .style('width', '100%');

//           window.onresize = function() {
//             scope.$apply();
//           };

//            scope.data = [
//             {name: "Greg", score: 98},
//             {name: "Ari", score: 96},
//             {name: 'Q', score: 75},
//             {name: "Loser", score: 48}
//           ];

//            scope.$watch(function() {
//             return angular.element($window)[0].innerWidth;
//           }, function() {
//             scope.render(scope.data);
//           });

//            scope.render = function(data) {
//             // our custom d3 code
//           };

//         });
//       }};
//   }]);

// angular.module('myApp', []).

//    directive('bars', function ($parse) {
//       return {
//          restrict: 'E',
//          replace: true,
//          template: '<div id="chart"></div>',
//          link: function (scope, element, attrs) {
//            var data = attrs.data.split(','),
//            chart = d3.select('#chart')
//              .append("div").attr("class", "chart")
//              .selectAll('div')
//              .data(data).enter()
//              .append("div")
//              .transition().ease("elastic")
//              .style("width", function(d) { return d + "%"; })
//              .text(function(d) { return d + "%"; });
//          } 
//       };
//    });

