import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateleaveComponent } from './createleave.component';

describe('CreateleaveComponent', () => {
  let component: CreateleaveComponent;
  let fixture: ComponentFixture<CreateleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateleaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
