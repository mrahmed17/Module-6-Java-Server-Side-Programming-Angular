import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListperformanceComponent } from './listperformance.component';

describe('ListperformanceComponent', () => {
  let component: ListperformanceComponent;
  let fixture: ComponentFixture<ListperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListperformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
