import { registerWidgetDescriptor, WidgetDescriptor } from '../../widget-registry.service'
import { PieChartComponent } from './pie-chart.component';
import { PieChartEditorComponent } from './pie-chart-editor.component';

registerWidgetDescriptor(new WidgetDescriptor('pie-chart', PieChartComponent, PieChartEditorComponent, 'Pie Chart'));
