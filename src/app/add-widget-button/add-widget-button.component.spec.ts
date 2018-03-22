import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWidgetButtonComponent } from './add-widget-button.component';

describe('AddWidgetButtonComponent', () => {
  let component: AddWidgetButtonComponent;
  let fixture: ComponentFixture<AddWidgetButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWidgetButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWidgetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
