import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditleaveComponent } from './editleave.component';

describe('EditleaveComponent', () => {
  let component: EditleaveComponent;
  let fixture: ComponentFixture<EditleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditleaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
