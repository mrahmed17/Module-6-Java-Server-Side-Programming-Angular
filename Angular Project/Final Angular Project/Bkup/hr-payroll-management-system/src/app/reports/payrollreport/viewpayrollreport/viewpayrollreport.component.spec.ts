import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpayrollreportComponent } from './viewpayrollreport.component';

describe('ViewpayrollreportComponent', () => {
  let component: ViewpayrollreportComponent;
  let fixture: ComponentFixture<ViewpayrollreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewpayrollreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpayrollreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
