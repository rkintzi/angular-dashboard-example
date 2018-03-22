import { Component, OnInit, Input } from '@angular/core';

import { Widget } from '../dashboard.service';

@Component({
  selector: 'widgets-frame',
  templateUrl: './widgets-frame.component.html',
  styleUrls: ['./widgets-frame.component.css']
})
export class WidgetsFrameComponent implements OnInit {

    @Input() widget: Widget;
    editMode: boolean;
    constructor() { }

    ngOnInit() {
    }

    edit(evt: Event) {
        this.editMode = true;
        evt.preventDefault();
    }

    cancel(evt: Event) {
        this.editMode = false;
        evt.preventDefault();
    }

    remove(evt: Event) {
        evt.preventDefault();
    }
}
