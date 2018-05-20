import { Injectable, EventEmitter, Type } from '@angular/core';

export interface ViewWidget {
    config: any
}

export interface EditWidget {
    config: any
    save: EventEmitter<any>;
    cancel: EventEmitter<void>;
}

export class WidgetDescriptor {
    constructor(public type: string, public viewComponent: Type<ViewWidget>, public editComponent: Type<EditWidget>, public menuItemText: string) {}
}

export function registerWidgetDescriptor(d: WidgetDescriptor) {
    WidgetRegistryService.widgets[d.type] = d;
}

@Injectable()
export class WidgetRegistryService {
    static widgets: { [type: string]: WidgetDescriptor } = {};


    constructor() { }
    getViewWidget(type: string): Type<ViewWidget> {
        let desc = WidgetRegistryService.widgets[type];
        if (!desc) {
            return;
        }
        return desc.viewComponent;
    };
    getEditWidget(type: string): Type<EditWidget> {
        let desc = WidgetRegistryService.widgets[type];
        if (!desc) {
            return;
        }
        return desc.editComponent;
    }
    getMenuItemText(type: string): string {
        let desc = WidgetRegistryService.widgets[type];
        if (!desc) {
            return;
        }
        return desc.menuItemText;
    }

}
