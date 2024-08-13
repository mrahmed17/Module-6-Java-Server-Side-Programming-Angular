import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrolldetailComponent } from './payrolldetail.component';

describe('PayrolldetailComponent', () => {
  let component: PayrolldetailComponent;
  let fixture: ComponentFixture<PayrolldetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrolldetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrolldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
