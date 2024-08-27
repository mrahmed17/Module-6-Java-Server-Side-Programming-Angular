import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefeedbackreportComponent } from './createfeedbackreport.component';

describe('CreatefeedbackreportComponent', () => {
  let component: CreatefeedbackreportComponent;
  let fixture: ComponentFixture<CreatefeedbackreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatefeedbackreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatefeedbackreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
