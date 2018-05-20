import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TableComponent } from './table/table.component';
import { PieChartEditorComponent } from './pie-chart/pie-chart-editor.component';
import { LineChartEditorComponent } from './line-chart/line-chart-editor.component';
import { TableEditorComponent } from './table/table-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  entryComponents: [PieChartComponent, LineChartComponent, TableComponent, PieChartEditorComponent, LineChartEditorComponent, TableEditorComponent],
  exports: [PieChartComponent, LineChartComponent, TableComponent, PieChartEditorComponent, LineChartEditorComponent, TableEditorComponent],
  declarations: [PieChartComponent, LineChartComponent, TableComponent, PieChartEditorComponent, LineChartEditorComponent, TableEditorComponent]
})
export class WidgetsModule { }
