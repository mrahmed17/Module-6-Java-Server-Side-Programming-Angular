import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdepartmentComponent } from './listdepartment.component';

describe('ListdepartmentComponent', () => {
  let component: ListdepartmentComponent;
  let fixture: ComponentFixture<ListdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListdepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
