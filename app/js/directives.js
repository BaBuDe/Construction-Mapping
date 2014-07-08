angular.module('myApp.directives', ['d3'])
    .directive('d3Bars', ['d3',
      function (d3) {
        console.log("ASDFadsf");
        return {
            restrict: 'E',
            // scope: {
            //   data: '=',
            //   label: '@',
            //   onClick: '&'
            // },
            link: function (scope, ele, attrs) {
                console.log("starting d3");
        
                // d3.then(function(d3) {

                    var margin = {
                        top: 20,
                        right: 20,
                        bottom: 30,
                        left: 60
                    },
                    width = 960 - margin.left - margin.right,
                        height = 500 - margin.top - margin.bottom;

                    // Our X scale
                    var x = d3.scale.ordinal()
                        .rangeRoundBands([0, width], .1);

                    // Our Y scale
                    var y = d3.scale.linear()
                        .rangeRound([height, 0]);

                    // Our color bands
                    var color = d3.scale.ordinal()
                        .range(["#308fef", "#5fa9f3", "#1176db"]);

                    // Use our X scale to set a bottom axis
                    var xAxis = d3.svg.axis()
                        .scale(x)
                        .orient("bottom");

                    // Smae for our left axis
                    var yAxis = d3.svg.axis()
                        .scale(y)
                        .orient("left")
                        .tickFormat(d3.format(".2s"));

                    // Add our chart to the document body
                    var svg = d3.select("body").append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                        var neighborhoodSelected = "Richmond";

                    // Fetch data via SODA from the Chicago data site
                    d3.csv("http://data.sfgov.org/resource/g383-7xmf.csv?planning_neighborhood=" + neighborhoodSelected + "&$select=units,best_stat", function (error, data) {

                        console.log(data);

                        // Use our values to set our color bands
                        color.domain(d3.keys(data[0]).filter(function (key) {
                            return key !== "planning_neighborhood";
                        }));

                        data.forEach(function (d) {
                            var y0 = 0;
                            d.types = color.domain().map(function (name) {
                                return {
                                    name: name,
                                    y0: y0,
                                    y1: y0 += +d[name]
                                };
                            });
                            d.total = d.types[d.types.length - 1].y1;
                        });

                        constructionData = [];
                        plApprovedData = [];
                        for (var i = 0; i < data.length; i++) {
                          if(data[i]['Best Stat'] === "CONSTRUCTION") {
                            constructionData.push(data[i]);
                          } 
                          if (data[i]['Best Stat'] === "PL Approved") {
                            plApprovedData.push(data[i]);
                          }
                        }
                        console.log(constructionData);

                        x.domain(data.map(function (d) {
                            // return d.planning_neighborhood;
                            return d['Best Stat'];
                        }));


                        // Our Y domain is from zero to our highest total
                        y.domain([0, d3.max(data, function (d) {
                            return d.Units;
                        })]);

                        svg.append("g")
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(xAxis);

                        svg.append("g")
                            .attr("class", "y axis")
                            .call(yAxis)
                            .append("text")
                            .attr("transform", "rotate(-90)")
                            .attr("y", 6)
                            .attr("dy", ".71em")
                            .style("text-anchor", "end")
                            .text("Housing Units");

                        var bestStat = svg.selectAll(".bestStat")
                            .data(data)
                            .enter().append("g")
                            .attr("class", "g")
                            .attr("transform", function (d) {
                            return "translate(" + x(d['Best Stat']) + ",0)";
                        });

                        bestStat.selectAll("rect")
                            .data(function (d) {
                            return d.types;
                        })
                            .enter().append("rect")
                            .attr("width", x.rangeBand())
                            .attr("y", function (d) {
                            return y(d.y1);
                        })
                            .attr("height", function (d) {
                            return y(d.y0) - y(d.y1);
                        })
                            .style("fill", function (d) {
                            return color(d.name);
                        });

                        var legend = svg.selectAll(".legend")
                            .data(color.domain().slice().reverse())
                            .enter().append("g")
                            .attr("class", "legend")
                            .attr("transform", function (d, i) {
                            return "translate(0," + i * 20 + ")";
                        });

                        legend.append("rect")
                            .attr("x", width - 18)
                            .attr("width", 18)
                            .attr("height", 18)
                            .style("fill", color);

                        legend.append("text")
                            .attr("x", width - 24)
                            .attr("y", 9)
                            .attr("dy", ".35em")
                            .style("text-anchor", "end")
                            .text(function (d) {
                            return d;
                        });
                    });
                // })
            }
        }
}]);

