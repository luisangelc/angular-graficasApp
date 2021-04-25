import { Component } from '@angular/core';

import { ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Hola Mundo', 'Other'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150, 320],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Colors[] = [
    {
      backgroundColor: [
        '#8C05FD',
        '#4105E3',
        '#053FE3',
        '#05DCE3',
        '#06FF05',
      ]
    }
  ]

}
