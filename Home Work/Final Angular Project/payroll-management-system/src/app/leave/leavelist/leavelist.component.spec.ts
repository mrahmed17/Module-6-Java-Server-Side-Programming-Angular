import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavelistComponent } from './leavelist.component';

describe('LeavelistComponent', () => {
  let component: LeavelistComponent;
  let fixture: ComponentFixture<LeavelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeavelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
