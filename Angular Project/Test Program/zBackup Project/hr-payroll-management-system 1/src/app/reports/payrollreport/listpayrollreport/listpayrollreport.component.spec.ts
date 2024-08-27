import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpayrollreportComponent } from './listpayrollreport.component';

describe('ListpayrollreportComponent', () => {
  let component: ListpayrollreportComponent;
  let fixture: ComponentFixture<ListpayrollreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListpayrollreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpayrollreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
