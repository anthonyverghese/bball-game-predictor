 <!--When the bottom-left corner refresh button is pressed, it refreshes the page and moves to the beginning of the survey-->
            function Restart() {
                location.reload();
                window.location.hash = '#predictGameDiv';
            }

            function displayExplanation(questionNum) {
                document.getElementById("helpInfo").innerHTML = "";
                var headerAnswer = document.createElement("h3");
                var headerVal = document.createTextNode("Why display this information?\n");
                headerAnswer.appendChild(headerVal);
                if (questionNum == 1) {
                    var newPar = document.createTextNode("If you want to have a strong understanding of how teams are doing, always look at their most recent games.");
                } else if (questionNum == 2) {
                    var newPar = document.createTextNode("You do not only want to look at recent history, because short-term injuries or simple losing streaks can cause anomalies. Thus, these season statistics are very useful for comparison.");
                } else if (questionNum == 3) {
                    var newPar = document.createTextNode("Field Goal Percentages are important, because it shows how efficient teams are. If a team has a low field goal percentage, they are wasting a lot of energy running up and down the court without successful outcomes");
                }
                document.getElementById("helpInfo").appendChild(headerAnswer);
                document.getElementById("helpInfo").appendChild(newPar);
                $('.tap-target').tapTarget('open');

            }