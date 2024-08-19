import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditleavereportComponent } from './editleavereport.component';

describe('EditleavereportComponent', () => {
  let component: EditleavereportComponent;
  let fixture: ComponentFixture<EditleavereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditleavereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditleavereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
