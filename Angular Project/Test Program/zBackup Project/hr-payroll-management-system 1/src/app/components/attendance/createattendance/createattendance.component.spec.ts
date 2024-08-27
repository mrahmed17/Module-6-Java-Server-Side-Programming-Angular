import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAttendanceComponent } from './createattendance.component';


describe('CreateattendanceComponent', () => {
  let component: CreateAttendanceComponent;
  let fixture: ComponentFixture<CreateAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAttendanceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
