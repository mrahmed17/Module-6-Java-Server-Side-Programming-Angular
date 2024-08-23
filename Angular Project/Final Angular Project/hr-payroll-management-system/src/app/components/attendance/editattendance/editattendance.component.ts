import { Component, OnInit } from '@angular/core';
import { AttendanceModel } from '../../../models/attendance.model';
import { AttendanceService } from '../../../services/attendance.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editattendance',
  templateUrl: './editattendance.component.html',
  styleUrl: './editattendance.component.css',
})
export class EditattendanceComponent implements OnInit {
  attendanceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private attendanceService: AttendanceService
  ) {
    this.attendanceForm = this.fb.group({
      // Define form controls here
      date: [''],
      status: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.attendanceForm.valid) {
      const newAttendance: AttendanceModel = this.attendanceForm.value;
      this.attendanceService.updateAttendance(newAttendance).subscribe({
        next: (response: any) => {
          console.log('Attendance created:', response);
          alert('Attendance added successfully!');
          this.router.navigate(['/attendances']);
        },
        error: (error: any) => {
          console.error('Error creating attendance:', error);
          alert('Failed to add attendance. Please try again.');
        },
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
