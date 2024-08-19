import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemployeereportComponent } from './listemployeereport.component';

describe('ListemployeereportComponent', () => {
  let component: ListemployeereportComponent;
  let fixture: ComponentFixture<ListemployeereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListemployeereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListemployeereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
