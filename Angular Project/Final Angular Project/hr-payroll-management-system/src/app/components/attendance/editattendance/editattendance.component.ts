import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceService } from '../../../services/attendance.service';
import { AttendanceModel } from '../../../models/attendance.model';

@Component({
  selector: 'app-editattendance',
  templateUrl: './editattendance.component.html',
  styleUrls: ['./editattendance.component.css'],
})
export class EditattendanceComponent implements OnInit {
  attendanceForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;
  attendanceId: string ="";

  constructor(
    private fb: FormBuilder,
    private attendanceService: AttendanceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.attendanceForm = this.fb.group({
      userId: [{ value: '', disabled: true }, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['Employee', Validators.required],
      profilePhoto: ['', Validators.required],
      date: ['', Validators.required],
      clockInTime: [null],
      clockOutTime: [null],
      status: ['Present', Validators.required],
    });
  }

  ngOnInit(): void {
    this.attendanceId = this.route.snapshot.paramMap.get('id')!;
    this.loadAttendance();
  }

  loadAttendance(): void {
    this.loading = true;
    this.attendanceService.getAttendanceById(this.attendanceId).subscribe(
      (attendance) => {
        this.loading = false;
        this.attendanceForm.patchValue({
          userId: attendance.user.id,
          firstName: attendance.user.firstName,
          lastName: attendance.user.lastName,
          role: attendance.user.role,
          profilePhoto: attendance.user.profilePhoto,
          date: attendance.date.toISOString().substring(0, 10),
          clockInTime: attendance.clockInTime
            ? attendance.clockInTime.toISOString().substring(11, 16)
            : '',
          clockOutTime: attendance.clockOutTime
            ? attendance.clockOutTime.toISOString().substring(11, 16)
            : '',
          status: attendance.status,
        });
      },
      (error) => {
        this.errorMessage = 'Failed to load attendance record.';
        this.loading = false;
        console.error('Failed to load attendance', error);
      }
    );
  }

  onSubmit(): void {
    if (this.attendanceForm.valid) {
      this.loading = true;
      const updatedAttendance: AttendanceModel = {
        ...this.attendanceForm.value,
        id: this.attendanceId,
        totalHours: 0, // To be calculated if needed
      };

      this.attendanceService
        .updateAttendance(this.attendanceId, updatedAttendance)
        .subscribe(
          () => {
            this.loading = false;
            this.router.navigate(['/attendances/list']);
          },
          (error) => {
            this.errorMessage = 'Failed to update attendance record.';
            this.loading = false;
            console.error('Failed to update attendance', error);
          }
        );
    }
  }

  cancel(): void {
    this.router.navigate(['/attendances/list']);
  }
}