import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WidgetRegistryService } from '../widget-registry.service';

@Component({
  selector: 'add-widget-button',
  templateUrl: './add-widget-button.component.html',
  styleUrls: ['./add-widget-button.component.css']
})
export class AddWidgetButtonComponent implements OnInit {

    @Output() addWidget = new EventEmitter<string>();

    widgetsTypes: { name: string, type: string}[];
    showMenu: boolean;

    constructor(registry: WidgetRegistryService) {
        this.widgetsTypes = registry.getAll().map(d => (
            { name: d.menuItemText, type: d.type }
        ));
        console.log(this.widgetsTypes);
    }

    ngOnInit() {
    }

    add(type: string) {
        this.addWidget.emit(type);
        this.showMenu = false;
    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }

}
