d3.csv("Book1.csv").get(function(error,data){
	var height = 400;
	var width = 600;
	
	var maxLon = d3.max(data, function(d){ return d.lon});
	console.log(maxLon);
	
	var y = d3.scaleLinear()
.domain([0,maxLon])
.range([height,0]);
var x = d3.scaleTime()
			.domain([minLat, maxLat])
			.range([
});