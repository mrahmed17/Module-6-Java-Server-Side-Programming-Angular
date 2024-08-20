import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateperformancereportComponent } from './createperformancereport.component';

describe('CreateperformancereportComponent', () => {
  let component: CreateperformancereportComponent;
  let fixture: ComponentFixture<CreateperformancereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateperformancereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateperformancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
