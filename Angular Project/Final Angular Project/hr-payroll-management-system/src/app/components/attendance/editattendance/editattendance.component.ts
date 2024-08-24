import { Component, OnInit } from '@angular/core';
import { AttendanceModel } from '../../../models/attendance.model';
import { AttendanceService } from '../../../services/attendance.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editattendance',
  templateUrl: './editattendance.component.html',
  styleUrls: ['./editattendance.component.css'],
})
export class EditattendanceComponent implements OnInit {
  attendanceForm: FormGroup;
  attendanceId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private attendanceService: AttendanceService
  ) {
    this.attendanceForm = this.fb.group({
      date: [''],
      status: [''],
      checkInTime: [''],
      checkOutTime: [''],
    });
  }

  ngOnInit(): void {
    // Get the ID from the route
    this.attendanceId = this.route.snapshot.paramMap.get('id');

    if (this.attendanceId) {
      // Load the attendance data
      this.attendanceService.getAttendance(this.attendanceId).subscribe({
        next: (attendance) => {
          this.attendanceForm.patchValue(attendance);
        },
        error: (error) => {
          console.error('Failed to load attendance:', error);
          alert('Failed to load attendance data. Please try again.');
        },
      });
    }
  }

  onSubmit(): void {
    if (this.attendanceForm.valid && this.attendanceId) {
      const updatedAttendance: AttendanceModel = this.attendanceForm.value;
      this.attendanceService
        .updateAttendance(this.attendanceId, updatedAttendance)
        .subscribe({
          next: (response) => {
            console.log('Attendance updated:', response);
            alert('Attendance updated successfully!');
            this.router.navigate(['/attendances']);
          },
          error: (error) => {
            console.error('Error updating attendance:', error);
            alert('Failed to update attendance. Please try again.');
          },
        });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
