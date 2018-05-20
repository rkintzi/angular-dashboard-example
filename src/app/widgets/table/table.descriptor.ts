import { registerWidgetDescriptor, WidgetDescriptor } from '../../widget-registry.service'
import { TableComponent } from './table.component';
import { TableEditorComponent } from './table-editor.component';

registerWidgetDescriptor(new WidgetDescriptor('table', TableComponent, TableEditorComponent, 'Table Widget'));
