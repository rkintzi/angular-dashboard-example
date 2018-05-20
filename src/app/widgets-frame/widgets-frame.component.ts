import { Component, OnInit, Input, ComponentFactoryResolver, EventEmitter, ViewChild } from '@angular/core';

import { Widget, DashboardService } from '../dashboard.service';
import { WidgetContentDirective } from './widget-content.directive';
import { WidgetRegistryService, EditWidget, ViewWidget } from '../widget-registry.service';

@Component({
  selector: 'widgets-frame',
  templateUrl: './widgets-frame.component.html',
  styleUrls: ['./widgets-frame.component.css']
})
export class WidgetsFrameComponent implements OnInit {

    @Input() widget: Widget;
    @ViewChild(WidgetContentDirective) widgetHost: WidgetContentDirective;
    editMode: boolean;
    newMode: boolean;
    private config: any;
    constructor(
        private service: DashboardService,
        private componentFactoryResolver: ComponentFactoryResolver,
        private registry: WidgetRegistryService,
    ) { }

    ngOnInit() {
        this.newMode = this.widget.config == undefined;
        if (this.newMode) {
            this.edit();
        }
        this.loadComponent();
    }

    edit() {
        this.config = {...this.widget.config};
        this.editMode = true;
        this.loadComponent();
    }

    cancel() {
        if (this.newMode) {
            this.remove();
        }
        this.editMode = false;
        this.loadComponent();
    }

    remove() {
        this.service.remove(this.widget);
    }

    save(config: any) {
        this.service.update(this.widget, config);
        this.newMode = this.editMode = false;
        this.loadComponent();
    }

    loadComponent() {
        let component: any;
        if (this.editMode) {
            component = this.registry.getEditWidget(this.widget.type);
        } else {
            component = this.registry.getViewWidget(this.widget.type);
        }
        if (!component) {
            console.log("Unknown component for " + (this.edit ? "edit" : "view") + " for " + this.widget.type);
            return;
        }

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

        let viewContainerRef = this.widgetHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        if (this.editMode) {
            (<EditWidget>componentRef.instance).config = this.widget.config;
            (<EditWidget>componentRef.instance).save.subscribe(this.save);
            (<EditWidget>componentRef.instance).cancel.subscribe(this.cancel);
        } else {
            (<ViewWidget>componentRef.instance).config = this.widget.config;
        }
    }
}
