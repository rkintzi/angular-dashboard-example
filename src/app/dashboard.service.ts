import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
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

    private widgets: Widget[];
    private subject: Subject<Dashboard>;

    constructor() {
        this.widgets = [
            {
                type: "pie-chart",
                config: {pieChartData: "PieChart"},
            },
            {
                type: "table",
                config: {tableData: "Table"},
            },
            {
                type: "line-chart",
                config: {lineChartData: "LineChart"},
            }
        ];
        this.subject = new ReplaySubject<Dashboard>(1);
        this.subject.next({ widgets: this.widgets.slice() });
    }

    fetchDashboard(): Observable<Dashboard> {
        return this.subject.asObservable();
    }

    update(w: Widget, config: any): Observable<void> {
        let i = this.widgets.indexOf(w);
        if (i == -1) {
            this.widgets.push(w);
        }
        w.config = { ...config};
        this.subject.next({widgets: this.widgets.slice() });
        return Observable.of();
    }

    remove(w: Widget): Observable<void> {
        let i = this.widgets.indexOf(w);
        if (i != -1) {
            this.widgets.splice(i, 1);
        }
        this.subject.next({widgets: this.widgets.slice() });
        return Observable.of();
    }
}
