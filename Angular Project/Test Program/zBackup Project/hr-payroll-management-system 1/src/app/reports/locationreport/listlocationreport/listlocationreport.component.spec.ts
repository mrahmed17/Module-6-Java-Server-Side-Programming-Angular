import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlocationreportComponent } from './listlocationreport.component';

describe('ListlocationreportComponent', () => {
  let component: ListlocationreportComponent;
  let fixture: ComponentFixture<ListlocationreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListlocationreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListlocationreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
