import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceeditComponent } from './performanceedit.component';

describe('PerformanceeditComponent', () => {
  let component: PerformanceeditComponent;
  let fixture: ComponentFixture<PerformanceeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformanceeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
