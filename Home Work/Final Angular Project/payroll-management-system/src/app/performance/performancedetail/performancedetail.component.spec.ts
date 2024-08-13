import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancedetailComponent } from './performancedetail.component';

describe('PerformancedetailComponent', () => {
  let component: PerformancedetailComponent;
  let fixture: ComponentFixture<PerformancedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformancedetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformancedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
