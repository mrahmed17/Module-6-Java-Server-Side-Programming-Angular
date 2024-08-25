import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListattendanceComponent } from './listattendance.component';

describe('ListattendanceComponent', () => {
  let component: ListattendanceComponent;
  let fixture: ComponentFixture<ListattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListattendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
