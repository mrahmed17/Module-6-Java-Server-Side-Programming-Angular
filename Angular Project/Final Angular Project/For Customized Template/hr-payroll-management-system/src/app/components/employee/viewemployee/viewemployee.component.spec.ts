import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeeComponent } from './viewemployee.component';

describe('ViewemployeeComponent', () => {
  let component: ViewemployeeComponent;
  let fixture: ComponentFixture<ViewemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewemployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
