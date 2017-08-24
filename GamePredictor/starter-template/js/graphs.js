//graphs.js has the two functions used to display the graphs 
//in the website. Thus, there is d3 code, which can be found 
//in the second function, displayGraphOfTeams. 
//cat1String, cat2String, etc. represent the axis names. 

var cat1String;
var cat2String;
var cat3String;
var cat4String;
var color1String;
var color2String;
//The function initializeAxisName() initializes the 
//axis names based on which graph is being displayed.
//graphNum is a number from 1 to 3, and represents 
//one of the three graphs that are displayed.
function initializeAxisNames(graphNum) {
    if (graphNum == 1) {
        cat1String = "FourGames Ago";
        cat2String = "Three Games Ago";
        cat3String = "Two Games Ago";
        cat4String = "Last Game";
    } else if (graphNum == 2) {
        cat1String = "PPG";
        cat2String = "OPPG";
        cat3String = "RPG";
        cat4String = "APG";
    } else if (graphNum == 3) {
        cat1String = "Field Goal Percentage (FG PCT)";
        cat2String = "OPP FG PCT";
        cat3String = "3PT PCT";
        cat4String = "OPP 3PT PCT";
    }
}
//The function displayGraphOfTeams() has the d3 code
//used to display the graphs. num represents the team matchup
//that was chosen, and num2 represents which graph is being displayed.
//Thus, num2 is important because it determines which csv file to pull 
//data from. 
function displayGraphOfTeams(num, num2) {
	var color1String;
	var color2String;
	if (num == 1){
		color1String = "Maroon";
		color2String = "yellow";
	}else if (num == 2){
		color1String = "blue";
		color2String = "red";
	}else if (num == 3){
		color1String = "green";
		color2String = "blue";
	}
    var COLORS = [color1String, color2String],
        LABELS = [teamName1, teamName2],
        VALUES = ["val0", "val1"],
        CATEGORIES = {
            cat1: cat1String,
            cat2: cat2String,
            cat3: cat3String,
            cat4: cat4String
        },
        data;

    function wrap2(text, width, startingx) {
        text.each(function() {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.1, // ems
                y = text.attr("y"),
                dy = lineHeight * 1.2
            //dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", startingx).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", startingx).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
        });
    }

    function groupedChart() {
        var color = d3.scale.ordinal()
            .range(COLORS);

        var margin = {
            top: 70,
            right: 40,
            bottom: 45,
            left: 100
        };

        var width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
        var svg = d3.select("#graphic" + num2).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var legspacing = 25;
        var legend = svg.selectAll(".legend")
            .data(VALUES)
            .enter()
            .append("g")

        legend.append("rect")
            .attr("fill", color)
            .attr("width", 20)
            .attr("height", 20)
            .attr("y", function(d, i) {
                return i * legspacing - 60;
            })
            .attr("x", 0);

        legend.append("text")
            .attr("class", "label")
            .attr("y", function(d, i) {
                return i * legspacing - 46;
            })
            .attr("x", 30)
            .attr("text-anchor", "start")
            .text(function(d, i) {
                return LABELS[i];
            });


        data.forEach(function(d) {
            d[VALUES[0]] = +d[VALUES[0]];
            d[VALUES[1]] = +d[VALUES[1]];
            d.vals = VALUES.map(function(name) {
                return {
                    name: name,
                    value: +d[name]
                };
            });
        });

        var y0 = d3.scale.ordinal()
            .rangeRoundBands([height, 0], .14);

        var y1 = d3.scale.ordinal();

        var x = d3.scale.linear()
            .range([0, width])
            .domain([0, d3.max(
                [].concat(data.map(function(d) {
                    return (d[VALUES[0]]);
                }), data.map(function(d) {
                    return (d[VALUES[1]]);
                })))]);
        y0.domain(data.map(function(d) {
            return d.category;
        }));

        y1.domain(VALUES).rangeRoundBands([0, y0.rangeBand()]);

        x.domain([0, d3.max(data, function(d) {
            return d3.max(d.vals, function(d) {
                return d.value;
            });
        })]);

        var yAxis = d3.svg.axis()
            .scale(y0)
            .tickSize(0)
            .tickFormat(function(d) {
                return CATEGORIES[d];
            })
            .orient("left");

        var gy = svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .selectAll(".tick text")
            .attr("transform", function(d) {
                return "translate(0," + -0.25 * y0.rangeBand() + ")";
            })
            .call(wrap2, 90, -5);


        var bars = svg.selectAll(".bar")
            .data(data)
            .enter().append("g")
            .attr("class", "group")
            .attr("transform", function(d) {
                return "translate(0," + y0(d.category) + ")";
            });

        bars.selectAll("rect")
            .data(function(d) {
                return d.vals;
            })
            .enter().append("rect")
            .attr("height", y1.rangeBand())
            .attr("y", function(d) {
                return y1(d.name);
            })
            .attr("x", x(0))
            .attr("width", function(d) {
                return x(d.value);
            })
            .attr("fill", function(d) {
                return color(d.name);
            });

        bars.selectAll("text")
            .data(function(d) {
                return d.vals;
            })
            .enter().append("text")
            .attr("class", "label")
            .attr("y", function(d) {
                return y1(d.name) + y1.rangeBand() / 2 + 4;
            })
            .attr("x", function(d) {
                return x(d.value) + 6;
            })
            .attr("text-anchor", "start")
            .text(function(d) {
                return d.value;
            });
    }
    if (num2 == 1) {
        d3.csv("csv/data" + num + ".csv", function(rates) {
            data = rates;
            groupedChart();
        })
    } else if (num2 == 2) {
        d3.csv("csv/twodata" + num + ".csv", function(rates) {
            data = rates;
            groupedChart();
        })
    } else if (num2 == 3) {
        d3.csv("csv/fourdata" + num + ".csv", function(rates) {
            data = rates;
            groupedChart();
        })
    }
}