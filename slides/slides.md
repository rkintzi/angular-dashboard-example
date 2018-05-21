class:  middle

# Dynamic components in Angular.io 

<br>
<br>


---
class:  middle

# Dynamic components in Angular.io 

**Radosław Kintzi**<br>
@r_kintzi


---

# Agenda

---

# Agenda 

* When, how and why to use dynamic components

---

# Dynamic components 

https://angular.io/guide/dynamic-component-loader

---

class: middle

# Demo

---
class:middle

# Implementation with no dynamic components

---

# Simple widget frame implementation

`widget-frame.component.html`
```html
    <ng-container *ngIf="!editMode" [ngSwitch]="widget.type">
        <table-widget *ngSwitchCase="'table'" 
            [config]="widget.config"></table-widget>
        <line-chart *ngSwitchCase="'line-chart'" 
            [config]="widget.config"></line-chart>
        <pie-chart *ngSwitchCase="'pie-chart'" 
            [config]="widget.config"></pie-chart>
    </ng-container>
    <ng-container *ngIf="editMode" [ngSwitch]="widget.type">
        <table-widget-editor *ngSwitchCase="'table'" 
            [config]="config" 
            (save)="save($event)" (cancel)="cancel()"
        ></table-widget-editor>
        <line-chart-editor *ngSwitchCase="'line-chart'" 
            [config]="config"
            (save)="save($event)" (cancel)="cancel()"
        ></line-chart-editor>
        <pie-chart-editor *ngSwitchCase="'pie-chart'"
            [config]="config"
            (save)="save($event)" (cancel)="cancel()"
        ></pie-chart-editor>
    </ng-container>
```
---

# Simple menu implementation

`add-widget-button.component.ts`
```typescript
@Component({
  selector: 'add-widget-button',
  templateUrl: './add-widget-button.component.html',
  styleUrls: ['./add-widget-button.component.css']
})
export class AddWidgetButtonComponent implements OnInit {
    
    (...)

    widgetsTypes: { name: string, type: string}[];
    constructor() {

        this.widgetsTypes = [
            { name: 'Pie Chart', type: 'pie-chart', },
            { name: 'Table Widget', type: 'table', },
            { name: 'Line Chart', type: 'line-chart', },
        ];
    }
        
    (...)
}
```

---

# Naive implementation

To add a new widget to the system we need to:

* Implement a new component


---

# Naive implementation

To add a new widget to the system we need to:

* Implement a new component

* Update ngSwitch-es

* Update a menu

* Update tests (for Menu and WidgetFrame components)


---

# Naive implementation

To add a new widget to the system we need to:

* Implement a new component

* Update ngSwitch-es

* Update a menu

* Update tests (for Menu and WidgetFrame components)

<br>

A nightmare of conflict resolution


---
class:middle

# Dynamic components to rescue


---

# Better menu implementation

`add-widget-button.component.ts`
```typescript
@Component({
  selector: 'add-widget-button',
  templateUrl: './add-widget-button.component.html',
  styleUrls: ['./add-widget-button.component.css']
})
export class AddWidgetButtonComponent implements OnInit {
    
    (...)

    widgetsTypes: { name: string, type: string}[];

    constructor(registry: WidgetRegistryService) {
        this.widgetsTypes = registry.getWidgetDescriptors().map(descriptor => (
            { name: descriptor.menuItemText, type: descriptor.type }
        ));
        console.log(this.widgetsTypes);
    }
        
    (...)
}
```

---

# Better widget frame

`widget-frame.component.ts`
```typescripe
loadComponent() {
    const descriptor = this.registry.getDescriptor(this.widget.type);
    const component = this.editMode ? descriptor.editComponent 
                                    : descriptor.viewComponent;

    const componentRef = this.instantiateComponent(component);

    if (this.editMode) {
        (<EditWidget>componentRef.instance).config = this.widget.config;
        (<EditWidget>componentRef.instance).save.subscribe((e)=>this.save(e));
        (<EditWidget>componentRef.instance).cancel.subscribe(()=>this.cancel());
    } else {
        (<ViewWidget>componentRef.instance).config = this.widget.config;
    }
}
```
`widget-frame.component.html`
```html
<ng-template dynamic-component-host></ng-template>
```


---

# Registry

```typescript
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
    getDescriptor(type: string): WidgetDescriptor { ... }
    getAllDescriptors(): WidgetDescriptor[] { ... }
}
```

---
# Registration

```typescript
registerWidgetDescriptor(new WidgetDescriptor(
    'line-chart', LineChartComponent, LineChartEditorComponent, 'Line Chart'));

registerWidgetDescriptor(new WidgetDescriptor(
    'pie-chart', PieChartComponent, PieChartEditorComponent, 'Pie Chart'));

registerWidgetDescriptor(new WidgetDescriptor(
    'table', TableComponent, TableEditorComponent, 'Table Widget'));
```
---

# Summary

* Dynamic components are useful when you have to select a component at runtime

* Should be used when the number of available options is not fixed and  change over time

* When used together with design patterns they improve code maintainability

---
class:middle

# Questions?

---

class: middle

# Thanks


---

class: middle

# Thanks

Radosław Kintzi (@r_kintzi)
