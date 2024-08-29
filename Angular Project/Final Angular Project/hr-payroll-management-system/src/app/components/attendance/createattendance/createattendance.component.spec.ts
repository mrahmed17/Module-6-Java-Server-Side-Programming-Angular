import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateattendanceComponent } from './createattendance.component';

describe('CreateattendanceComponent', () => {
  let component: CreateattendanceComponent;
  let fixture: ComponentFixture<CreateattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateattendanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
