import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveeditComponent } from './leaveedit.component';

describe('LeaveeditComponent', () => {
  let component: LeaveeditComponent;
  let fixture: ComponentFixture<LeaveeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
