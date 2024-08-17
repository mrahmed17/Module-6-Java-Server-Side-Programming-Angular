import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollreportComponent } from './payrollreport.component';

describe('PayrollreportComponent', () => {
  let component: PayrollreportComponent;
  let fixture: ComponentFixture<PayrollreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrollreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
