import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { SixMonth } from 'src/app/_models/six-month.model';
import { RequestProviders } from 'src/app/_services/request.providers';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input('') chartDataArray: number[] = [];
  @Input('') chartLabelArray: Label[] = [];
  lineChartData: ChartDataSets[] = [
    { data: this.chartDataArray, label: 'Tamamlanan İşler' },
  ];
  /**
   * EXAMPLE DATA
   */
  lineChartLabels: Label[] = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'];

  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        },
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
        },
      }]
    }
  };

  lineChartColors = [
    {
      borderColor: '#177dff',
      backgroundColor: '#1269db5c',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor(private api: RequestProviders) {
  }

  ngOnInit() {
  }

}
