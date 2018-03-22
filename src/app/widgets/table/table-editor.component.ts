import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableConfig } from './table.component';

@Component({
  selector: 'table-widget-editor',
  templateUrl: './table-editor.component.html',
  styleUrls: ['./table-editor.component.css']
})
export class TableEditorComponent implements OnInit {

    @Input() config: TableConfig;
    @Output() save = new EventEmitter<TableConfig>();
    @Output() cancel = new EventEmitter<void>();
    edited: TableConfig;
    constructor() { }

    ngOnInit() {
        this.edited = {...this.config};
    }

    onSave($event) {
        if (this.edited.table != this.config.table) {
            this.save.emit(this.edited);
        } else {
            this.cancel.emit();
        }
    }

}
