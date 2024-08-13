import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancecreateComponent } from './performancecreate.component';

describe('PerformancecreateComponent', () => {
  let component: PerformancecreateComponent;
  let fixture: ComponentFixture<PerformancecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformancecreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformancecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
