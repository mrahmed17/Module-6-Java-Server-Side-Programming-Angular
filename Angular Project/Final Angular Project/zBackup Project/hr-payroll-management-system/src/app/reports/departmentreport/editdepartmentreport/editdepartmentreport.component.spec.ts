import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdepartmentreportComponent } from './editdepartmentreport.component';

describe('EditdepartmentreportComponent', () => {
  let component: EditdepartmentreportComponent;
  let fixture: ComponentFixture<EditdepartmentreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditdepartmentreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdepartmentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
