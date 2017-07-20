function myFunction1(){
google.charts.load('current', {
  'packages': ['bar']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var jsonData = {
    "cols": [{
      "id": "type",
      "label": "Cavs and Warriors' Points",
      "type": "string"
    }, {
      "id": "hum",
      "label": "Points Cavs scored",
      "type": "number"
    }, {
      "id": "temp",
      "label": "Points Warriors scored",
      "type": "number"
    }],

    "rows": [{
      "c": [{
        "v": "Last Game"
      }, {
        "v": 80
      }, {
        "v": 95
      }]
    }, {
      "c": [{
        "v": "Two Games Ago"
      }, {
        "v": 85
      }, {
        "v": 105
      }]
    }, {
      "c": [{
        "v": "Three Games Ago"
      }, {
        "v": 90
      }, {
        "v": 100
      }]
    }]
  }

  var data = new google.visualization.DataTable(jsonData);

  var options = {
    chart: {
      title: "Chart: Cavs and Warriors' Points in Last Three Games",
      subtitle: 'Total points scored by each team'
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

        PointsCavs: {
          side: 'top',
          label: 'Points'
        }, // Bottom x-axis.

        PointsWarriors: {
          side: 'top',
          label: 'Points'
        }, // Top x-axis.

       
      }
    }
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));
 chart.draw(data, options);
}
}