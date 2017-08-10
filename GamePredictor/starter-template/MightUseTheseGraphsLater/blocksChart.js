function myFunction2(){
google.charts.load('current', {
  'packages': ['bar']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var jsonData = {
    "cols": [{
      "id": "type",
      "label": "Cavs and Warriors' Blocks",
      "type": "string"
    }, {
      "id": "hum",
      "label": "Cavs' Blocks",
      "type": "number"
    }, {
      "id": "temp",
      "label": "Warriors' Blocks",
      "type": "number"
    }],

    "rows": [{
      "c": [{
        "v": "Last Game"
      }, {
        "v": 15
      }, {
        "v": 10
      }]
    }, {
      "c": [{
        "v": "Two Games Ago"
      }, {
        "v": 20
      }, {
        "v": 5
      }]
    }, {
      "c": [{
        "v": "Three Games Ago"
      }, {
        "v": 15
      }, {
        "v": 20
      }]
    }]
  }

  var data = new google.visualization.DataTable(jsonData);

  var options = {
    chart: {
      title: "Chart: Cavs and Warriors' Blocks in Last Three Games",
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
          label: 'Blocks'
        }, // Bottom x-axis.

        BlocksWarriors: {
          side: 'top',
          label: 'Blocks'
        }, // Top x-axis.

       
      }
    }
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));
 chart.draw(data, options);
}
}