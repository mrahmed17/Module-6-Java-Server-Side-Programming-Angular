import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDepartmentComponent } from './view-department.component';

describe('ViewDepartmentComponent', () => {
  let component: ViewDepartmentComponent;
  let fixture: ComponentFixture<ViewDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
