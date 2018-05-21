import { Injectable, EventEmitter, Type } from '@angular/core';

export interface ViewWidget {
    config: any;
}

export interface EditWidget {
    config: any;
    save: EventEmitter<any>;
    cancel: EventEmitter<void>;
}

export class WidgetDescriptor {
    constructor(public type: string, public viewComponent: Type<ViewWidget>,
        public editComponent: Type<EditWidget>, public menuItemText: string) {}
}

export function registerWidgetDescriptor(d: WidgetDescriptor) {
    WidgetRegistryService.widgets[d.type] = d;
}

@Injectable()
export class WidgetRegistryService {
    static widgets: { [type: string]: WidgetDescriptor } = {};


    constructor() { }
    getDescriptor(type: string): WidgetDescriptor {
        const desc = WidgetRegistryService.widgets[type];
        if (!desc) {
            return;
        }
        return desc;
    }
    getAll(): WidgetDescriptor[] {
        const ds = [];
        for (const type in WidgetRegistryService.widgets) {
            ds.push(WidgetRegistryService.widgets[type]);
        }
        return ds;
    }
}
