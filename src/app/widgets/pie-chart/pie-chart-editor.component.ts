import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PieChartConfig } from './pie-chart.component';

@Component({
  selector: 'pie-chart-editor',
  templateUrl: './pie-chart-editor.component.html',
  styleUrls: ['./pie-chart-editor.component.css']
})
export class PieChartEditorComponent implements OnInit {

    @Input() config: PieChartConfig;
    @Output() save = new EventEmitter<PieChartConfig>();
    @Output() cancel = new EventEmitter<void>();
    constructor() { }

    ngOnInit() {
    }

}
