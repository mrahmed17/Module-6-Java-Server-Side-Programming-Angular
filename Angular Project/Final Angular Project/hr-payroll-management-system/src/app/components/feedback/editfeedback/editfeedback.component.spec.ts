import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfeedbackComponent } from './editfeedback.component';

describe('EditfeedbackComponent', () => {
  let component: EditfeedbackComponent;
  let fixture: ComponentFixture<EditfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditfeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
