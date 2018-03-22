import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-widget-button',
  templateUrl: './add-widget-button.component.html',
  styleUrls: ['./add-widget-button.component.css']
})
export class AddWidgetButtonComponent implements OnInit {

    @Output() addWidget = new EventEmitter<string>();

    widgetsTypes: { name: string, type: string}[];
    showMenu: boolean;

    constructor() {

        this.widgetsTypes = [
            { name: 'Pie Chart', type: 'pie-chart', },
            { name: 'Table Widget', type: 'table', },
            { name: 'Line Chart', type: 'line-chart', },
        ];
    }

    ngOnInit() {
    }
    add(evt: Event, type: string) {
        this.addWidget.emit(type);
        this.showMenu = false;
        evt.preventDefault();
    }
    toggleMenu(evt: Event) {
        this.showMenu = !this.showMenu;
        evt.preventDefault();
    }

}
