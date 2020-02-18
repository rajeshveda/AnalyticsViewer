import { Component } from '@angular/core';

declare var google: any;


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }


  drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['InProgress', 11],
      ['Completed', 2],
      ['Assigned', 2],
      ['Open', 2],
      ['Overdue', 7]
    ]);

    var options = {
      title: 'Your Sales Data'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }
}
