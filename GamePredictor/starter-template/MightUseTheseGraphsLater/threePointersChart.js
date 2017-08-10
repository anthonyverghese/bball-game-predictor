function myFunction3(){
google.charts.load('current', {
  'packages': ['bar']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var jsonData = {
    "cols": [{
      "id": "type",
      "label": "Cavs and Warriors' Three-pointers",
      "type": "string"
    }, {
      "id": "hum",
      "label": "Cavs' Three-pointers",
      "type": "number"
    }, {
      "id": "temp",
      "label": "Warriors' Three-pointers",
      "type": "number"
    }],

    "rows": [{
      "c": [{
        "v": "Last Game"
      }, {
        "v": 5
      }, {
        "v": 8
      }]
    }, {
      "c": [{
        "v": "Two Games Ago"
      }, {
        "v": 4
      }, {
        "v": 10
      }]
    }, {
      "c": [{
        "v": "Three Games Ago"
      }, {
        "v": 7
      }, {
        "v": 5
      }]
    }]
  }

  var data = new google.visualization.DataTable(jsonData);

  var options = {
    chart: {
      title: "Chart: Cavs and Warriors' three-pointers in Last Three Games",
      subtitle: 'Total blocks by each team'
    },
    
    height: 300,

    bars: 'horizontal', // Required for Material Bar Charts.

    series: {

      0: {
        axis: 'Last Game'
      },

      1: {
        axis: 'Two Games Ago'
      },

      2: {
        axis: 'Three Games Ago'
      }

    },

    axes: {

      x: {

        BlocksCavs: {
          side: 'top',
          label: 'Three-pointers'
        }, // Bottom x-axis.

        BlocksWarriors: {
          side: 'top',
          label: 'Three-pointers'
        }, // Top x-axis.

       
      }
    }
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));
 chart.draw(data, options);
}
}