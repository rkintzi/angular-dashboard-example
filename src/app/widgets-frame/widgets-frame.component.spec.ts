import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsFrameComponent } from './widgets-frame.component';

describe('WidgetsFrameComponent', () => {
  let component: WidgetsFrameComponent;
  let fixture: ComponentFixture<WidgetsFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
