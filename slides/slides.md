class:  middle

# Dynamic components in Angular.io 
When, how and why?

<br>
<br>
<br>
<br>
<br>


---
class:  middle

# Dynamic components in Angular.io 
When, how and why?
<br>
<br>
<br>
<br>

**Radosław Kintzi**<br>
@r_kintzi


---

# Agenda

---

# Agenda 

* When it's worth to reach for dynamic components
    
* Example application (a dashboard)

* Implementation with no dynamic components

* Implementation using dynamic components


---

# Agenda 

* When it's worth to reach for dynamic components
    
* Example application (a dashboard)

* Implementation with no dynamic components

* Implementation using dynamic components

# &#172; Agenda
---

# Agenda 

* When it's worth to reach for dynamic components
    
* Example application (a dashboard)

* Implementation with no dynamic components

* Implementation using dynamic components

# &#172; Agenda

* We won't cover dynamic components mechanics


---

# Dynamic components 

Must read:

* https://angular.io/guide/dynamic-component-loader

---

class: middle

# Demo

---
class:middle

# Implementation with no dynamic components

---

# Simple widget frame implementation

`widget-frame.component.html:`
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

`add-widget-button.component.ts:`
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

# Why/when this is a poor solution?

---

# Why/when this is a poor solution?

What has to be done to add new kind of widget to the system?

---

# Why/when this is a poor solution?

What has to be done to add new kind of widget to the system?

* Implement a new components


---

# Why/when this is a poor solution?

What has to be done to add new kind of widget to the system?

* Implement a new component

* Update ngSwitch-es

* Update a menu

---

# Why/when this is a poor solution?

What has to be done to add new kind of widget to the system?

* Implement a new component

* Update ngSwitch-es

* Update a menu

* Update tests (for menu and WidgetFrame components)


---

# Why/when this is a poor solution?

What if you need to implement two widgets at the same time?


---

# Why/when this is a poor solution?

What if you need to implement two widgets at the same time?

* Conflicts, conflicts, conflicts...


---
class:middle

# Dynamic components to rescue


---

# Better menu implementation

`add-widget-button.component.ts:`
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
        this.widgetsTypes = registry.getAllDescriptors().map(descriptor => (
            { name: descriptor.menuItemText, type: descriptor.type }
        ));
    }
        
    (...)
}
```

---

# Better widget frame

`widget-frame.component.ts:`
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
`widget-frame.component.html:`
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


`line-chart.descriptor.ts:`
```typescript
registerWidgetDescriptor(new WidgetDescriptor(
    'line-chart', LineChartComponent, LineChartEditorComponent, 'Line Chart'));
```


<br>
`pie-chart.descriptor.ts:`
```typescript
registerWidgetDescriptor(new WidgetDescriptor(
    'pie-chart', PieChartComponent, PieChartEditorComponent, 'Pie Chart'));
```

<br>
`table.descriptor.ts:`
```typescript

registerWidgetDescriptor(new WidgetDescriptor(
    'table', TableComponent, TableEditorComponent, 'Table Widget'));
```

---

# Widget structure
```
widgets/pie-chart/
├── pie-chart.component.css
├── pie-chart.component.html
├── pie-chart.component.spec.ts
├── pie-chart.component.ts
├── pie-chart-editor.component.css
├── pie-chart-editor.component.html
├── pie-chart-editor.component.spec.ts
├── pie-chart-editor.component.ts
└── pie-chart.descriptor.ts
```

---
# Configuration

`plugin-config.ts:`
```typescript
import './widgets/line-chart/line-chart.descriptor';
import './widgets/pie-chart/pie-chart.descriptor';
import './widgets/table/table.descriptor';
```

---

# Summary

When, how and why to use dynamic componets?

---

# Summary

When, how and why to use dynamic componets?

* When you have to select a component at runtime
---

# Summary

When, how and why to use dynamic componets?

* When you have to select a component at runtime

* If the number of available options is not fixed and change over time

---

# Summary

When, how and why to use dynamic componets?

* When you have to select a component at runtime

* If the number of available options is not fixed and change over time

* Together with other design patterns 

---

# Summary

When, how and why to use dynamic componets?

* When you have to select a component at runtime

* If the number of available options is not fixed and change over time

* Together with other design patterns 

* To improve code maintainability

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
