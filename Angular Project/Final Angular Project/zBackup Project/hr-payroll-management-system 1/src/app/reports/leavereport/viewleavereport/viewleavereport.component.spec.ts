import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleavereportComponent } from './viewleavereport.component';

describe('ViewleavereportComponent', () => {
  let component: ViewleavereportComponent;
  let fixture: ComponentFixture<ViewleavereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewleavereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewleavereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
