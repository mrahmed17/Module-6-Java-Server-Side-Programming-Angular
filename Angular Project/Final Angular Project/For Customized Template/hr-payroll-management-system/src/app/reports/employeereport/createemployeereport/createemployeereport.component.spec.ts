import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployeereportComponent } from './createemployeereport.component';

describe('CreateemployeereportComponent', () => {
  let component: CreateemployeereportComponent;
  let fixture: ComponentFixture<CreateemployeereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateemployeereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateemployeereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
