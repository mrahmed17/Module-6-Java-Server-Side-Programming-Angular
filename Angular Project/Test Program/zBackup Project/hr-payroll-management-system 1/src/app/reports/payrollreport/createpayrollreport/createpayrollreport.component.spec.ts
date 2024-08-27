import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepayrollreportComponent } from './createpayrollreport.component';

describe('CreatepayrollreportComponent', () => {
  let component: CreatepayrollreportComponent;
  let fixture: ComponentFixture<CreatepayrollreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatepayrollreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepayrollreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
