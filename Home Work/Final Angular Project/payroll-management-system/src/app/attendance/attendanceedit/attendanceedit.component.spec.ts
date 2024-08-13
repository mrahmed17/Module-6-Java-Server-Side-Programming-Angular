import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceeditComponent } from './attendanceedit.component';

describe('AttendanceeditComponent', () => {
  let component: AttendanceeditComponent;
  let fixture: ComponentFixture<AttendanceeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendanceeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
