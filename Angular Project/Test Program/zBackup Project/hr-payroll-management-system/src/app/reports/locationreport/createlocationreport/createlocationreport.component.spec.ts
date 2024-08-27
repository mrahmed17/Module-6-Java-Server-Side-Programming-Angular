import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelocationreportComponent } from './createlocationreport.component';

describe('CreatelocationreportComponent', () => {
  let component: CreatelocationreportComponent;
  let fixture: ComponentFixture<CreatelocationreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatelocationreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatelocationreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
