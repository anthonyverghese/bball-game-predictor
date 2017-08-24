//Algorithm.js has one function, displayAlgorithm(), which has subfunctions within it. 
//The subfunctions pull data from the individual csv files and use the data to associate 
//a sum with each team. The team with the higher sum after the three subfunctions are 
//carried out, is chosen as the predicted winner. sum is the value associated with 
//the first team in the matchup, and sum2 is the value associated with the second team in the matchup.
var sum = 0;
var sum2 = 0;

function displayAlgorithm() {
	//This csv file gives the points scored by the two teams in their last four respective games.
    $.ajax({
        url: "csv/data" + num + ".csv",
        dataType: 'text',
    }).done(successFunction);

    function successFunction(data) {
        var allRows = data.split(/\r?\n|\r/);
        for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
            var rowCells = allRows[singleRow].split(',');
            for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
                if (singleRow != 0 && rowCell != 0) {
                    if (rowCell % 2 == 0) {
						//Divide by 10, because the points scored in the last
						//four games should not be too heavily weighted
                        sum2 += (parseFloat(rowCells[rowCell]) / 10);
                    } else {
						//Divide by 10, because the points scored in the last
						//four games should not be too heavily weighted
                        sum += (parseFloat(rowCells[rowCell]) / 10);
                    }
                }
            }
        }
    }
	//The statistics in this csv file gives the PPG, OPP PPG, RPG, and APG of the two teams
    $.ajax({
        url: "csv/twodata" + num + ".csv",
        dataType: 'text',
    }).done(successFunction2);

    function successFunction2(data) {
        var allRows = data.split(/\r?\n|\r/);
        for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
            var rowCells = allRows[singleRow].split(',');
            for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
                if (singleRow != 0 && rowCell != 0) {
                    if (rowCell % 2 == 0) {
						//If the statistic is PPG or RPG, then simply add it to sum.
						//I did not divide by 10 because PPG and RPG are overall statistics
						//and should have much heavier weight than scores of last four games
                        if (singleRow == 1 || singleRow == 3) {
                            sum2 += parseFloat(rowCells[rowCell]);
                        } 
						//If the statistic is OPP PPG, then the value should be subtracted 
						//from the sum.
						else if (singleRow == 2) {
                            sum2 -= parseFloat(rowCells[rowCell]);
                        } 
						//If the statistic is APG, then 2*APG should be added
						//to the sum. APG is a very important statistic because
						//it indicates how cohesive the team is and how often it 
						//passes, displaying how there is more than one person who 
						//is doing well on the court. Thus, the weight is increased
						//for this statistic.
						else if (singleRow == 4) {
                            sum2 += (2 * parseFloat(rowCells[rowCell]));
                        }
                    } 
					//If we are dealing with team 2's stats, then do the following.
					else {
                        if (singleRow == 1 || singleRow == 3) {
                            sum += parseFloat(rowCells[rowCell]);
                        } else if (singleRow == 2) {
                            sum -= parseFloat(rowCells[rowCell]);
                        } else if (singleRow == 4) {
                            sum += (2 * parseFloat(rowCells[rowCell]));
                        }
                    }
                }
            }
        }

    }
	//The statistics in this csv file give the overall ranking of each team. 
    $.ajax({
        url: "csv/threedata" + num + ".csv",
        dataType: 'text',
    }).done(successFunction3);

    function successFunction3(data) {
        var allRows = data.split(/\r?\n|\r/);
        for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
            var rowCells = allRows[singleRow].split(',');
            for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
                if (singleRow == 1 && rowCell != 0) {
                    if (rowCell % 2 == 0) {
                        sum2 = (1 - ((rowCells[rowCell] * rowCells[rowCell]) / (100))) * sum2;
                    } else {
                        sum = (1 - ((rowCells[rowCell] * rowCells[rowCell]) / (100))) * sum;
                    }
                }
            }
			//If sum is greater than sum2, then say that team 1 will be the winner and vice versa.
            if (sum > sum2) {
                document.getElementById("algorithmDisplayed").innerHTML = ("And the winner is...." + teamName1);
            } else {
                document.getElementById("algorithmDisplayed").innerHTML = ("And the winner is...." + teamName2);
            }
        }

    }
};