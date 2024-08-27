import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListperformancereportComponent } from './listperformancereport.component';

describe('ListperformancereportComponent', () => {
  let component: ListperformancereportComponent;
  let fixture: ComponentFixture<ListperformancereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListperformancereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListperformancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
