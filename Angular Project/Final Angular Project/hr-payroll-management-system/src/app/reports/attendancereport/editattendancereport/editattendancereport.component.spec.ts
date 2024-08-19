import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditattendancereportComponent } from './editattendancereport.component';

describe('EditattendancereportComponent', () => {
  let component: EditattendancereportComponent;
  let fixture: ComponentFixture<EditattendancereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditattendancereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditattendancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
