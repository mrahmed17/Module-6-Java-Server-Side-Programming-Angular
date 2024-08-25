import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefeedbackComponent } from './createfeedback.component';

describe('CreatefeedbackComponent', () => {
  let component: CreatefeedbackComponent;
  let fixture: ComponentFixture<CreatefeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatefeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatefeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
