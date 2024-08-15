import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditEmployeeComponent } from './create-edit-employee.component';

describe('CreateEditEmployeeComponent', () => {
  let component: CreateEditEmployeeComponent;
  let fixture: ComponentFixture<CreateEditEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEditEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
