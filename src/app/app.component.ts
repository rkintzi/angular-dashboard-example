import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Dashboard, DashboardService } from './dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    dashboard: Observable<Dashboard>;
    constructor(private service: DashboardService) {
        this.dashboard = service.fetchDashboard();
    }
}
