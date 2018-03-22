import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartEditorComponent } from './pie-chart-editor.component';

describe('PieChartEditorComponent', () => {
  let component: PieChartEditorComponent;
  let fixture: ComponentFixture<PieChartEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
