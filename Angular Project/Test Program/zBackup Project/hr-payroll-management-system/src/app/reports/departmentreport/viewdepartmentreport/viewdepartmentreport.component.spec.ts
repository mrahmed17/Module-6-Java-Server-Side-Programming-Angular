import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdepartmentreportComponent } from './viewdepartmentreport.component';

describe('ViewdepartmentreportComponent', () => {
  let component: ViewdepartmentreportComponent;
  let fixture: ComponentFixture<ViewdepartmentreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewdepartmentreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdepartmentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
