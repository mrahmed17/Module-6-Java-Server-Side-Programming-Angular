import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateattendancereportComponent } from './createattendancereport.component';

describe('CreateattendancereportComponent', () => {
  let component: CreateattendancereportComponent;
  let fixture: ComponentFixture<CreateattendancereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateattendancereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateattendancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
