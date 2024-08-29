import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmanagerComponent } from './viewmanager.component';

describe('ViewmanagerComponent', () => {
  let component: ViewmanagerComponent;
  let fixture: ComponentFixture<ViewmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewmanagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
