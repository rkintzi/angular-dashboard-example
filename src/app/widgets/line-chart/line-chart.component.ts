import { Component, OnInit, Input } from '@angular/core';

export interface LineChartConfig {
    line_chart: string;
}

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() config: LineChartConfig;
  constructor() { }

  ngOnInit() {
  }

}
