import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditperformancereportComponent } from './editperformancereport.component';

describe('EditperformancereportComponent', () => {
  let component: EditperformancereportComponent;
  let fixture: ComponentFixture<EditperformancereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditperformancereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditperformancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
