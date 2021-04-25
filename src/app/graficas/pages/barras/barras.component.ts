import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#48FAF9', hoverBackgroundColor: 'red' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#6939E0', hoverBackgroundColor: 'red' },
    { data: [8, 38, 70, 59, 66, 80, 100], label: 'Series C', backgroundColor: '#85FF3D', hoverBackgroundColor: 'red' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100)
    ];
    this.barChartData[1].data = [
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100)
    ];
    this.barChartData[2].data = [
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100)
    ];
  }
}
