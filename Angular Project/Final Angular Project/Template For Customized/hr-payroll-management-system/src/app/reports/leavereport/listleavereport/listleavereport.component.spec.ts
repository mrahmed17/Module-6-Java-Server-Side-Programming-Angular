import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListleavereportComponent } from './listleavereport.component';

describe('ListleavereportComponent', () => {
  let component: ListleavereportComponent;
  let fixture: ComponentFixture<ListleavereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListleavereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListleavereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
