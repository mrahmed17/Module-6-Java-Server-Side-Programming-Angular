import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewperformancereportComponent } from './viewperformancereport.component';

describe('ViewperformancereportComponent', () => {
  let component: ViewperformancereportComponent;
  let fixture: ComponentFixture<ViewperformancereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewperformancereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewperformancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
