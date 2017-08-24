//There are two functions in initColorAndMatch.js. The first function, changeColor(), updates the background color as well as 
//the colors of various buttons and texts, after a favorite team has been chosen. 
function changeColor(myFavTeam){
	if (myFavTeam=="warriors" || myFavTeam==="wizards" || myFavTeam==="knicks" || myFavTeam==="thunder" || myFavTeam==="sixers" || myFavTeam==="clippers" || myFavTeam==="mavs" || myFavTeam==="pistons" || myFavTeam==="magic" || myFavTeam==="hornets"){
		document.getElementById("navBarColor").style.backgroundColor = "blue";
		var x = document.getElementsByClassName("btn2");
		for (var i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "blue";
		}	
		document.getElementById("footerColor").style.backgroundColor="blue";
		var y = document.getElementsByClassName("titleText");
		for (var j = 0; j < y.length; j++) {
			y[j].style.color = "blue";
		}
		var z = document.getElementsByClassName("activeText");
		for (var k = 0; k < z.length; k++) {
			z[k].style.backgroundColor = "blue";
		}			
	}
	if (myFavTeam==="nuggets"){
	document.getElementById("navBarColor").style.backgroundColor = "#6495ED";
		var x = document.getElementsByClassName("btn2");
		for (var i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "#6495ED";
		}	
		document.getElementById("footerColor").style.backgroundColor="#6495ED";
		var y = document.getElementsByClassName("titleText");
		for (var j = 0; j < y.length; j++) {
			y[j].style.color = "#6495ED";
		}
		var z = document.getElementsByClassName("activeText");
		for (var k = 0; k < z.length; k++) {
			z[k].style.backgroundColor = "#6495ED";
		}			
	}
	if (myFavTeam==="lakers" || myFavTeam==="kings"){
		document.getElementById("navBarColor").style.backgroundColor = "purple";
		var x = document.getElementsByClassName("btn2");
		for (var i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "purple";
		}
		document.getElementById("footerColor").style.backgroundColor="purple";
		var y = document.getElementsByClassName("titleText");
		for (var j = 0; j < y.length; j++) {
			y[j].style.color = "purple";
		}	
		var z = document.getElementsByClassName("activeText");
		for (var k = 0; k < z.length; k++) {
			z[k].style.backgroundColor = "purple";
		}	
	}
	if (myFavTeam==="rockets" || myFavTeam==="trailblazers" || myFavTeam==="magic" || myFavTeam==="heat" || myFavTeam==="raptors" || myFavTeam==="spurs" || myFavTeam==="nets" || myFavTeam==="bulls" ){
		document.getElementById("navBarColor").style.backgroundColor = "black";
		var x = document.getElementsByClassName("btn2");
		for (var i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "black";
		}
		document.getElementById("footerColor").style.backgroundColor="black";
		var y = document.getElementsByClassName("titleText");
		for (var j = 0; j < y.length; j++) {
			y[j].style.color = "black";
		}	
		var z = document.getElementsByClassName("activeText");
		for (var k = 0; k < z.length; k++) {
			z[k].style.backgroundColor = "black";
		}	
	}
	if (myFavTeam==="pelicans" || myFavTeam==="cavs" || myFavTeam==="hawks" || myFavTeam==="jazz" || myFavTeam==="grizzlies" || myFavTeam==="pacers"){
		document.getElementById("navBarColor").style.backgroundColor = "#000080";
		var x = document.getElementsByClassName("btn2");
		for (var i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "#000080";
		}
		document.getElementById("footerColor").style.backgroundColor="#000080";
		var y = document.getElementsByClassName("titleText");
		for (var j = 0; j < y.length; j++) {
			y[j].style.color = "#000080";
		}	
		var z = document.getElementsByClassName("activeText");
		for (var k = 0; k < z.length; k++) {
			z[k].style.backgroundColor = "#000080";
		}	
	}
	if (myFavTeam==="bucks" || myFavTeam==="celtics"){
		document.getElementById("navBarColor").style.backgroundColor = "green";
		var x = document.getElementsByClassName("btn2");
		for (var i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "green";
		}
		document.getElementById("footerColor").style.backgroundColor="green";
		var y = document.getElementsByClassName("titleText");
		for (var j = 0; j < y.length; j++) {
			y[j].style.color = "green";
		}
		var z = document.getElementsByClassName("activeText");
		for (var k = 0; k < z.length; k++) {
			z[k].style.backgroundColor = "green";
		}
	}
	if (myFavTeam==="pelicans" || myFavTeam==="mavs" || myFavTeam==="timberwolves" || myFavTeam==="spurs" || myFavTeam==="nets"){
		document.body.style.backgroundColor = "#e6e6e6";
	}
	if (myFavTeam==="grizzlies" || myFavTeam==="warriors" || myFavTeam==="lakers" || myFavTeam==="pacers" || myFavTeam==="nuggets"){
		document.body.style.backgroundColor = "yellow";
	}
	if (myFavTeam==="knicks" || myFavTeam==="thunder" || myFavTeam==="suns"){
		document.body.style.backgroundColor = "#ffa64d";
	}
	if (myFavTeam==="heat" || myFavTeam==="cavs" || myFavTeam==="raptors" || myFavTeam==="bulls" || myFavTeam==="rockets" || myFavTeam==="sixers" || myFavTeam==="hawks" || myFavTeam==="pistons" || myFavTeam==="clippers" || myFavTeam==="trailblazers" || myFavTeam==="wizards"){
		document.body.style.backgroundColor = "#ff6666";
	}		
}
var num;
var teamName1;
var teamName2;
//initializeTeamNum() is the second function in InitColorAndMatch.js. This function initializes the global variable num, as well 
//as the global variables teamName1 and teamName2. These values are used in the d3 code, to determine which data to take and display
//in the graphs. num=1 corresponds to the first matchup displayed, num=2 corresponds to the second matchup displayed, etc. 
function initializeTeamNum(teamNum){
	num = teamNum;
	if (num == 1){
		teamName1 = "Cavaliers";
		teamName2 = "Warriors";
}else if (num == 2){
	teamName1 = "Knicks";
		teamName2 = "Raptors";
}else{
	teamName1 = "Celtics";
		teamName2 = "Wizards";
}
};