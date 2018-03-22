import { Component, OnInit, Input } from '@angular/core';

export interface PieChartConfig {
    pieChartData: string;
}
@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() config: PieChartConfig;
  constructor() { }

  ngOnInit() {
  }

}
