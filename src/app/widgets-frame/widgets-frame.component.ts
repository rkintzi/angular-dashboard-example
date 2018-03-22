import { Component, OnInit, Input } from '@angular/core';

import { Widget, DashboardService } from '../dashboard.service';


@Component({
  selector: 'widgets-frame',
  templateUrl: './widgets-frame.component.html',
  styleUrls: ['./widgets-frame.component.css']
})
export class WidgetsFrameComponent implements OnInit {

    @Input() widget: Widget;
    editMode: boolean;
    newMode: boolean;
    private config: any;
    constructor(private service: DashboardService) { }

    ngOnInit() {
        this.newMode = this.widget.config == undefined;
        if (this.newMode) {
            this.edit();
        }
    }

    edit() {
        this.config = {...this.widget.config};
        this.editMode = true;
    }

    cancel() {
        if (this.newMode) {
            this.remove();
        }
        this.editMode = false;
    }

    remove() {
        this.service.remove(this.widget);
    }

    save(config: any) {
        this.service.update(this.widget, config);
        this.newMode = this.editMode = false;
    }
}
