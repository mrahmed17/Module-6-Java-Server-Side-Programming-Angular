import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditperformanceComponent } from './editperformance.component';

describe('EditperformanceComponent', () => {
  let component: EditperformanceComponent;
  let fixture: ComponentFixture<EditperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditperformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
