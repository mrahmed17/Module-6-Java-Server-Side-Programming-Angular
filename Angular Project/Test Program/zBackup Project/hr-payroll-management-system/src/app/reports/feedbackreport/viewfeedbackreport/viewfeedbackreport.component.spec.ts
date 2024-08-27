import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfeedbackreportComponent } from './viewfeedbackreport.component';

describe('ViewfeedbackreportComponent', () => {
  let component: ViewfeedbackreportComponent;
  let fixture: ComponentFixture<ViewfeedbackreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewfeedbackreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewfeedbackreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
