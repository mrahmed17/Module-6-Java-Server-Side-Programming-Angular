import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../../../services/attendance.service';
import { Router } from '@angular/router';
import { AttendanceModel } from '../../../models/attendance.model';

@Component({
  selector: 'app-createattendance',
  templateUrl: './createattendance.component.html',
  styleUrls: ['./createattendance.component.css'],
})
export class CreateAttendanceComponent implements OnInit {
  attendanceForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private attendanceService: AttendanceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.attendanceForm = this.formBuilder.group({
      date: ['', Validators.required],
      status: ['', Validators.required],
      checkInTime: [''],
      checkOutTime: [''],
      employee: this.formBuilder.group({
        id: [''],
        name: ['', Validators.required],
        position: ['', Validators.required],
        firstName: [''],
        lastName: [''],
        email: ['', [Validators.email]],
        joiningDate: [''],
        gender: [''],
        contact: [''],
        salary: [''],
        departmentId: [''],
        locationId: [''],
      }),
    });
  }

  onSubmit(): void {
    if (this.attendanceForm.valid) {
      const newAttendance: AttendanceModel = this.attendanceForm.value;
      this.attendanceService.createAttendance(newAttendance).subscribe({
        next: (res) => {
          console.log('Attendance created successfully:', res);
          this.router.navigate(['/attendances']); // Navigate to the attendance list
        },
        error: (err) => {
          console.error('Error creating attendance:', err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm(): void {
    this.attendanceForm.reset();
  }
}
