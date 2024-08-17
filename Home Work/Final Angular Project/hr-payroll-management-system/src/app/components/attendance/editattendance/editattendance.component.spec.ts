import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditattendanceComponent } from './editattendance.component';

describe('EditattendanceComponent', () => {
  let component: EditattendanceComponent;
  let fixture: ComponentFixture<EditattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditattendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
