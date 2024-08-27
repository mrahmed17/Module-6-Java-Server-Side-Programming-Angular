import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../../services/attendance.service';

import { Attendance } from '../../models/attendance.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendancecreate',
  templateUrl: './attendancecreate.component.html',
  styleUrl: './attendancecreate.component.css'
})
export class AttendancecreateComponent implements OnInit {

  attendanceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private attendanceService: AttendanceService,
    private router: Router
  ) {
    this.attendanceForm = this.fb.group({
      // Define form controls here
      date: ['', Validators.required],
      status: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.attendanceForm = this.fb.group({
      // Initialize form controls with validators
    });
  }


  onSubmit(): void {
    if (this.attendanceForm.valid) {
      const newAttendance: Attendance = this.attendanceForm.value;
      this.attendanceService.createAttendance(newAttendance).subscribe({
        next: (response: any) => {
          console.log('Attendance created:', response);
          alert('Attendance added successfully!');
          this.router.navigate(['/attendances']);
        },
        error: (error: any) => {
          console.error('Error creating attendance:', error);
          alert('Failed to add attendance. Please try again.');
        }
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }


}
