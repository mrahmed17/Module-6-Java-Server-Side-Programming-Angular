import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpayrollComponent } from './viewpayroll.component';

describe('ViewpayrollComponent', () => {
  let component: ViewpayrollComponent;
  let fixture: ComponentFixture<ViewpayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewpayrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
