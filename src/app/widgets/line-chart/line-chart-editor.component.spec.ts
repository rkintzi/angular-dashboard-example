import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartEditorComponent } from './line-chart-editor.component';

describe('LineChartEditorComponent', () => {
  let component: LineChartEditorComponent;
  let fixture: ComponentFixture<LineChartEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
