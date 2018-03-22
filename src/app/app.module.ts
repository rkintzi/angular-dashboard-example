import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetsFrameComponent } from './widgets-frame/widgets-frame.component';
import { DashboardService }  from './dashboard.service';
import { WidgetContentDirective } from './widgets-frame/widget-content.directive';
import { WidgetsModule } from './widgets/widgets.module';
import { AddWidgetButtonComponent } from './add-widget-button/add-widget-button.component';
import { ButtonDirective } from './button.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetsFrameComponent,
    WidgetContentDirective,
    AddWidgetButtonComponent,
    ButtonDirective
  ],
  imports: [
    BrowserModule,
    WidgetsModule,
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
