import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListattendancereportComponent } from './listattendancereport.component';

describe('ListattendancereportComponent', () => {
  let component: ListattendancereportComponent;
  let fixture: ComponentFixture<ListattendancereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListattendancereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListattendancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
