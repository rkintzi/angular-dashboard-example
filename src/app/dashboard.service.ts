import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'


export interface Dashboard {
    widgets: Widget[];
}

export interface Widget {
    type: string
    config: any;
}

@Injectable()
export class DashboardService {

    constructor() { }

    fetchDashboard(): Observable<Dashboard> {
        return Observable.of({
            widgets: [{
                type: "pie-chart",
                config: {pie_chart: "PieChart"},
            }, {
                type: "table",
                config: {table: "Table"},
            }, {
                type: "line-chart",
                config: {line_chart: "LineChart"},
            }
            ]
        });
    }
}
