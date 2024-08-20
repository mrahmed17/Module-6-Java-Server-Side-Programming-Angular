import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeereportComponent } from './editemployeereport.component';

describe('EditemployeereportComponent', () => {
  let component: EditemployeereportComponent;
  let fixture: ComponentFixture<EditemployeereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditemployeereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditemployeereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
