import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlocationreportComponent } from './viewlocationreport.component';

describe('ViewlocationreportComponent', () => {
  let component: ViewlocationreportComponent;
  let fixture: ComponentFixture<ViewlocationreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewlocationreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewlocationreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
