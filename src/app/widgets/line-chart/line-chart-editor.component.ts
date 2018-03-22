import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { LineChartConfig } from './line-chart.component';

@Component({
  selector: 'line-chart-editor',
  templateUrl: './line-chart-editor.component.html',
  styleUrls: ['./line-chart-editor.component.css']
})
export class LineChartEditorComponent implements OnInit {

  @Input() config: LineChartConfig;
    @Output() save = new EventEmitter<LineChartConfig>();
    @Output() cancel = new EventEmitter<void>();
    edited: LineChartConfig;
    constructor() { }

    ngOnInit() {
        this.edited = {...this.config};
    }

    onSave($event) {
        if (this.edited.line_chart != this.config.line_chart) {
            this.save.emit(this.edited);
        } else {
            this.cancel.emit();
        }
    }

}
