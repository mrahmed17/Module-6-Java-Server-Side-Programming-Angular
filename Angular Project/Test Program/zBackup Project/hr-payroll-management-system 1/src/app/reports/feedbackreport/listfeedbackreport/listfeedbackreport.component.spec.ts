import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfeedbackreportComponent } from './listfeedbackreport.component';

describe('ListfeedbackreportComponent', () => {
  let component: ListfeedbackreportComponent;
  let fixture: ComponentFixture<ListfeedbackreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListfeedbackreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListfeedbackreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
