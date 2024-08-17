import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavereportComponent } from './leavereport.component';

describe('LeavereportComponent', () => {
  let component: LeavereportComponent;
  let fixture: ComponentFixture<LeavereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeavereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
