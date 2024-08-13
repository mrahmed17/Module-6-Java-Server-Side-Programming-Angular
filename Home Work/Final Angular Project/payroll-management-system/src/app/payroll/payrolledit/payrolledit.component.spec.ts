import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrolleditComponent } from './payrolledit.component';

describe('PayrolleditComponent', () => {
  let component: PayrolleditComponent;
  let fixture: ComponentFixture<PayrolleditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrolleditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrolleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
