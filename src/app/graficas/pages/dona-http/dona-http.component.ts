import { Component, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';

import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Hola Mundo', 'Other'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100, 150, 320],
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

  constructor(
    private graficasServices: GraficasService
  ) { }

  ngOnInit(): void {
    // this.graficasServices.getUsuariosRebeldesSociales()
    //   .subscribe(data => {
    //     const labels = Object.keys(data);
    //     const values = Object.values(data);

    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(values);
    //   });
    this.graficasServices.getUsuariosRebeldesSocialesDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }

}
