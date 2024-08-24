import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../services/attendance.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../../models/user.model';
import { UserprofileService } from '../../../services/userprofile.service';

@Component({
  selector: 'app-editattendance',
  templateUrl: './editattendance.component.html',
  styleUrls: ['./editattendance.component.css'],
})
export class EditattendanceComponent implements OnInit {
  attendanceForm!: FormGroup;
  attendanceId!: string;
  employees: UserModel[] = [];
  errorMessage: string = '';

  constructor(
    private attendanceService: AttendanceService,
    private formBuilder: FormBuilder,
    private userService: UserprofileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadEmployees();
    this.route.params.subscribe((params) => {
      this.attendanceId = params['id'];
      this.loadAttendance(this.attendanceId);
    });
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

  // Load the attendance record to edit
  loadAttendance(id: string): void {
    this.attendanceService.getAttendance(id).subscribe(
      (attendance) => {
        this.attendanceForm.patchValue(attendance);
      },
      (error) => {
        console.error('Failed to load attendance', error);
        this.errorMessage = 'Failed to load attendance. Please try again.';
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

  // Submit the form to update the attendance record
  onSubmit(): void {
    if (this.attendanceForm.invalid) {
      return;
    }
    const attendanceData = this.attendanceForm.value;
    this.attendanceService
      .updateAttendance(this.attendanceId, attendanceData)
      .subscribe(
        (response) => {
          this.router.navigate(['/attendances']);
        },
        (error) => {
          console.error('Failed to update attendance', error);
          this.errorMessage = 'Failed to update attendance. Please try again.';
        }
      );
  }

  // Reset the form and clear the state
  resetForm(): void {
    this.attendanceForm.reset();
    this.errorMessage = '';
  }
}
