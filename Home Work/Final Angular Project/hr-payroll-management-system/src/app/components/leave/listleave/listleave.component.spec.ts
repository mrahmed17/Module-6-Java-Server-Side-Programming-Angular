import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListleaveComponent } from './listleave.component';

describe('ListleaveComponent', () => {
  let component: ListleaveComponent;
  let fixture: ComponentFixture<ListleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListleaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
