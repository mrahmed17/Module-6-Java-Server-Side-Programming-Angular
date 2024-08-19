import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedepartmentreportComponent } from './createdepartmentreport.component';

describe('CreatedepartmentreportComponent', () => {
  let component: CreatedepartmentreportComponent;
  let fixture: ComponentFixture<CreatedepartmentreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatedepartmentreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedepartmentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
