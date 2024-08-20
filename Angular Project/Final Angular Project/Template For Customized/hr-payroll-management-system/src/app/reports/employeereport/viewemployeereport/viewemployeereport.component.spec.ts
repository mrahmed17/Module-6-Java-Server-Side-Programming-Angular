import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeereportComponent } from './viewemployeereport.component';

describe('ViewemployeereportComponent', () => {
  let component: ViewemployeereportComponent;
  let fixture: ComponentFixture<ViewemployeereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewemployeereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewemployeereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
