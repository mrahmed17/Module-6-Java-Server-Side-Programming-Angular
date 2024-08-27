import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavecreateComponent } from './leavecreate.component';

describe('LeavecreateComponent', () => {
  let component: LeavecreateComponent;
  let fixture: ComponentFixture<LeavecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeavecreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
