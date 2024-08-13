import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancelistComponent } from './performancelist.component';

describe('PerformancelistComponent', () => {
  let component: PerformancelistComponent;
  let fixture: ComponentFixture<PerformancelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformancelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
