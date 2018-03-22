import { Component, OnInit, Input } from '@angular/core';

import { Dashboard } from '../dashboard.service';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    @Input() dashboard: Dashboard;

    constructor() { }

    ngOnInit() {
        console.log(this.dashboard);
    }

    addWidget(type:string) {
        this.dashboard.widgets.push({
            type:type,
            config: undefined,
        })
    }

}
