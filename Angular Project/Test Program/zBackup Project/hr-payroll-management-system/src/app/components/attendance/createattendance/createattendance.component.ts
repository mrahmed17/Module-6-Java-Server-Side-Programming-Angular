import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../../../services/attendance.service';
import { AttendanceModel } from '../../../models/attendance.model';
import { UserModel } from '../../../models/user.model';
import { UserprofileService } from '../../../services/userprofile.service';

@Component({
  selector: 'app-createattendance',
  templateUrl: './createattendance.component.html',
  styleUrls: ['./createattendance.component.css'],
})
export class CreateAttendanceComponent implements OnInit {
  attendanceForm!: FormGroup;
  attendances: AttendanceModel[] = [];
  employees: UserModel[] = [];
  isEditMode: boolean = false;
  errorMessage: string = '';

  constructor(
    private attendanceService: AttendanceService,
    private formBuilder: FormBuilder,
    private userService: UserprofileService // Inject UserService to fetch employees
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadAttendances();
    this.loadEmployees(); // Load employees when the component initializes
  }

  // Initialize the form
  initForm(): void {
    this.attendanceForm = this.formBuilder.group({
      id: [null],
      date: ['', Validators.required],
      status: ['', Validators.required],
      checkInTime: ['', Validators.required],
      checkOutTime: ['', Validators.required],
      employeeId: ['', Validators.required],
    });
  }

  // Load all attendance records
  loadAttendances(): void {
    this.attendanceService.getAllAttendances().subscribe(
      (data) => {
        this.attendances = data;
      },
      (error) => {
        console.error('Failed to load attendance records', error);
      }
    );
  }

  // Load all employees
  loadEmployees(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Failed to load employees', error);
      }
    );
  }

  // Submit the form (Create or Update)
  onSubmit(): void {
    if (this.attendanceForm.invalid) {
      return;
    }
    const attendanceData = this.attendanceForm.value;
    if (this.isEditMode) {
      this.attendanceService
        .updateAttendance(attendanceData.id, attendanceData)
        .subscribe(
          (response) => {
            this.loadAttendances();
            this.resetForm();
            this.isEditMode = false;
          },
          (error) => {
            console.error('Failed to update attendance', error);
            this.errorMessage =
              'Failed to update attendance. Please try again.';
          }
        );
    } else {
      this.attendanceService.createAttendance(attendanceData).subscribe(
        (response) => {
          this.loadAttendances();
          this.resetForm();
        },
        (error) => {
          console.error('Failed to create attendance', error);
          this.errorMessage = 'Failed to create attendance. Please try again.';
        }
      );
    }
  }

  // Edit an existing attendance record
  editAttendance(attendance: AttendanceModel): void {
    this.attendanceForm.patchValue(attendance);
    this.isEditMode = true;
  }

  // Delete an attendance record
  deleteAttendance(id: string): void {
    if (confirm('Are you sure you want to delete this attendance record?')) {
      this.attendanceService.deleteAttendance(id).subscribe(
        () => {
          this.loadAttendances();
        },
        (error) => {
          console.error('Failed to delete attendance', error);
          this.errorMessage = 'Failed to delete attendance. Please try again.';
        }
      );
    }
  }

  // Reset the form and state
  resetForm(): void {
    this.attendanceForm.reset();
    this.isEditMode = false;
    this.errorMessage = '';
  }
}
