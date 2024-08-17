import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeereportComponent } from './employeereport.component';

describe('EmployeereportComponent', () => {
  let component: EmployeereportComponent;
  let fixture: ComponentFixture<EmployeereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
