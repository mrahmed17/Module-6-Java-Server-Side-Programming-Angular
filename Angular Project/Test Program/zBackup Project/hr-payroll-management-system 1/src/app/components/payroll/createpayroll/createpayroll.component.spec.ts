import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePayrollComponent } from './createpayroll.component';

describe('CreatepayrollComponent', () => {
  let component: CreatePayrollComponent;
  let fixture: ComponentFixture<CreatePayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePayrollComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreatePayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
