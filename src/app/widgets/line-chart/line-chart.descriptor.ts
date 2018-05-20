import { registerWidgetDescriptor, WidgetDescriptor } from '../../widget-registry.service'
import { LineChartComponent } from './line-chart.component';
import { LineChartEditorComponent } from './line-chart-editor.component';

registerWidgetDescriptor(new WidgetDescriptor('line-chart', LineChartComponent, LineChartEditorComponent, 'Line Chart'));
