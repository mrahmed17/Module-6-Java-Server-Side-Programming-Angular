import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateleavereportComponent } from './createleavereport.component';

describe('CreateleavereportComponent', () => {
  let component: CreateleavereportComponent;
  let fixture: ComponentFixture<CreateleavereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateleavereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateleavereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
