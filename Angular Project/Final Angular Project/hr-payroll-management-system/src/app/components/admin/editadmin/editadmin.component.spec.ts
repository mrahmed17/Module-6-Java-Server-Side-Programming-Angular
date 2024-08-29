import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminComponent } from './editadmin.component';

describe('EditadminComponent', () => {
  let component: EditadminComponent;
  let fixture: ComponentFixture<EditadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
