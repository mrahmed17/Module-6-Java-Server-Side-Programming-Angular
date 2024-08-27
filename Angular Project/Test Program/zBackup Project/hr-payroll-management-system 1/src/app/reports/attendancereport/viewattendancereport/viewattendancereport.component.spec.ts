import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewattendancereportComponent } from './viewattendancereport.component';

describe('ViewattendancereportComponent', () => {
  let component: ViewattendancereportComponent;
  let fixture: ComponentFixture<ViewattendancereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewattendancereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewattendancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
