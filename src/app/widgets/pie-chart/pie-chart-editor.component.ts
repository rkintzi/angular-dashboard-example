import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PieChartConfig } from './pie-chart.component';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'pie-chart-editor',
  templateUrl: './pie-chart-editor.component.html',
  styleUrls: ['./pie-chart-editor.component.css']
})
export class PieChartEditorComponent implements OnInit {

    @Input() config: PieChartConfig;
    @Output() done = new EventEmitter<void>();
    edited: PieChartConfig;
    constructor(private service: DashboardService) { }

    ngOnInit() {
        this.edited = {...this.config};
    }

    onSave($event) {
        if (this.edited.pie_chart != this.config.pie_chart) {
            this.done.emit();
        } else {
            this.done.emit();
        }
    }
}
