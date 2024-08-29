import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewperformanceComponent } from './viewperformance.component';

describe('ViewperformanceComponent', () => {
  let component: ViewperformanceComponent;
  let fixture: ComponentFixture<ViewperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewperformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
