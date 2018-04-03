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

    ngOnInit() {
    }

}
