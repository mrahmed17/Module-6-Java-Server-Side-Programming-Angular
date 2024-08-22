import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdepartmentComponent } from './editdepartment.component';

describe('EditdepartmentComponent', () => {
  let component: EditdepartmentComponent;
  let fixture: ComponentFixture<EditdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditdepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
