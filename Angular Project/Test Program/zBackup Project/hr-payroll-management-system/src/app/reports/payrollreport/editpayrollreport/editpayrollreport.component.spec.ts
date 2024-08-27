import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpayrollreportComponent } from './editpayrollreport.component';

describe('EditpayrollreportComponent', () => {
  let component: EditpayrollreportComponent;
  let fixture: ComponentFixture<EditpayrollreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditpayrollreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpayrollreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
