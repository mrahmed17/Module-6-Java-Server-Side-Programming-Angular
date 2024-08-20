import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlocationreportComponent } from './editlocationreport.component';

describe('EditlocationreportComponent', () => {
  let component: EditlocationreportComponent;
  let fixture: ComponentFixture<EditlocationreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditlocationreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditlocationreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
