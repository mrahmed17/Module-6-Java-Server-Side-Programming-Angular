import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollcreateComponent } from './payrollcreate.component';

describe('PayrollcreateComponent', () => {
  let component: PayrollcreateComponent;
  let fixture: ComponentFixture<PayrollcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrollcreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
