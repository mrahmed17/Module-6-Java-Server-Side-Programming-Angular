import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateperformanceComponent } from './createperformance.component';

describe('CreateperformanceComponent', () => {
  let component: CreateperformanceComponent;
  let fixture: ComponentFixture<CreateperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateperformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
