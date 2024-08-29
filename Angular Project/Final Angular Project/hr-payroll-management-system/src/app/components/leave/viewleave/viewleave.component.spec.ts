import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleaveComponent } from './viewleave.component';

describe('ViewleaveComponent', () => {
  let component: ViewleaveComponent;
  let fixture: ComponentFixture<ViewleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewleaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
