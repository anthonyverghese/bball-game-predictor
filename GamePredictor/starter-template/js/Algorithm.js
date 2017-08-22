var sum = 0;
            var sum2 = 0;

            function displayAlgorithm() {
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
                                    sum2 += (parseFloat(rowCells[rowCell]) / 10);
                                    console.log("sum2" + sum2);
                                } else {
                                    sum += (parseFloat(rowCells[rowCell]) / 10);
                                    console.log("sum" + sum);
                                }
                            }
                        }
                    }
                }
                $.ajax({
                    url: "csv/twodata" + num + ".csv",
                    dataType: 'text',
                }).done(successFunction2);

                function successFunction2(data) {
                    console.log('yo');
                    var allRows = data.split(/\r?\n|\r/);
                    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
                        var rowCells = allRows[singleRow].split(',');
                        for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
                            if (singleRow != 0 && rowCell != 0) {
                                if (rowCell % 2 == 0) {
                                    console.log('hi');
                                    if (singleRow == 1 || singleRow == 3) {
                                        sum2 += parseFloat(rowCells[rowCell]);
                                        console.log("sum2" + sum2);
                                    } else if (singleRow == 2) {
                                        sum2 -= parseFloat(rowCells[rowCell]);
                                        console.log("sum2" + sum2);
                                    } else if (singleRow == 4) {
                                        sum2 += (2 * parseFloat(rowCells[rowCell]));
                                        console.log("sum2" + sum2);
                                    }

                                } else {
                                    if (singleRow == 1 || singleRow == 3) {
                                        sum += parseFloat(rowCells[rowCell]);
                                        console.log("sum" + sum);
                                    } else if (singleRow == 2) {
                                        sum -= parseFloat(rowCells[rowCell]);
                                        console.log("sum" + sum);
                                    } else if (singleRow == 4) {
                                        sum += (2 * parseFloat(rowCells[rowCell]));
                                        console.log("sum" + sum);
                                    }
                                }
                            }
                        }
                        if (sum > sum2) {
                            document.getElementById("algorithmDisplayed").innerHTML = ("And the winner is...." + teamName1);
                        } else {
                            document.getElementById("algorithmDisplayed").innerHTML = ("And the winner is...." + teamName2);
                        }
                    }

                }
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
                                    console.log(sum2);
                                    sum2 = (1 - ((rowCells[rowCell] * rowCells[rowCell]) / (100))) * sum2;
                                    console.log(sum2);
                                } else {
                                    console.log(sum);
                                    sum = (1 - ((rowCells[rowCell] * rowCells[rowCell]) / (100))) * sum;
                                    console.log(sum);
                                }
                            }
                        }
                        if (sum > sum2) {
                            document.getElementById("algorithmDisplayed").innerHTML = ("And the winner is...." + teamName1);
                        } else {
                            document.getElementById("algorithmDisplayed").innerHTML = ("And the winner is...." + teamName2);
                        }
                    }

                }
            };