import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrolllistComponent } from './payrolllist.component';

describe('PayrolllistComponent', () => {
  let component: PayrolllistComponent;
  let fixture: ComponentFixture<PayrolllistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrolllistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrolllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
