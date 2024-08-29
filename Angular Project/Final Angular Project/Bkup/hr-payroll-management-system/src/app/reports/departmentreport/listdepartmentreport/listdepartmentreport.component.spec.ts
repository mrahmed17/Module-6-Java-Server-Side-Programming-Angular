import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdepartmentreportComponent } from './listdepartmentreport.component';

describe('ListdepartmentreportComponent', () => {
  let component: ListdepartmentreportComponent;
  let fixture: ComponentFixture<ListdepartmentreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListdepartmentreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdepartmentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
