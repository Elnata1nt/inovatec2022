google.charts.load('current', {'packages':['geochart'], }); //maps//
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.load("current", {packages:["corechart"]}); //rosquinha//
google.charts.setOnLoadCallback(drawChart); 
google.charts.setOnLoadCallback(ttt); 
google.charts.setOnLoadCallback(regionsMaps); //maps//
google.charts.setOnLoadCallback(rosquinha);





function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'kg', 'Media'],
        ['Jan', 53, 56.15],
        ['Fev', 40, 56.15 ],
        ['Mar', 70, 56.15 ],
        ['Abr', 60.2, 56.15 ],
        ['Mai', 45, 56.15 ],
        ['Jun', 50.6, 56.15 ],
        ['Jul', 67.3, 56.15 ],
        ['Ago', 32.9, 56.15 ],
        ['Set', 52.9, 56.15 ],
        ['Out', 48.4, 56.15 ],
        ['Nov', 63.5, 56.15 ],
        ['Dez', 90, 56.15 ]

    ]); 

    var options = {
        title: 'PESO ANUAL',
        hAxis: { title: 'MESES', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 100 }
        
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}




function ttt() {
    var data = google.visualization.arrayToDataTable([
        ['days', 'kg', 'Media'],
        ['1-SEMANA', 12, 13.25 ],
        ['2-SEMANA', 9, 13.25],
        ['3-SEMANA', 18, 13.25 ],
        ['4-SEMANA', 14, 13.25 ],
       

    ]); 

    var options = {
        title: 'PESO MENSAL',
        hAxis: { title: 'SEMANA', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 30 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

// graficos do mapa

function regionsMaps() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'TONELADAS DE LIXO'],
          ['Germany', 90146792311],
          ['United States', 99902405890],
          ['Brazil', 80978794100],
          ['INDIA', 80121950200],
          ['France', 9005781230],
          ['China', 100011748900],
          ['RU', 80078239110],
          ['Canada', 79088391410],
        ]);

        var options = {
           
            
        };
            

        var chart = new google.visualization.GeoChart(document.getElementById('regionsMaps'));

        chart.draw(data, options);
      }

//Rosquinha

function rosquinha() {
    var data = google.visualization.arrayToDataTable([
      ['Plastico','materiais'],
      ['Papelão',  8],
      ['Vidro',      1],
      ['Aluminho',   1],
      [ 'Plastico',  8],
      ['Oleo Mineral', 5],
      ['oleo Vegetal', 2],
      ['Lixo Eletronico', 2]

    ]);

    var options = {
      title: 'Materiais coletados',
      pieHole: 0.2,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data);
  }

