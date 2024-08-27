import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfeedbackreportComponent } from './editfeedbackreport.component';

describe('EditfeedbackreportComponent', () => {
  let component: EditfeedbackreportComponent;
  let fixture: ComponentFixture<EditfeedbackreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditfeedbackreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditfeedbackreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
