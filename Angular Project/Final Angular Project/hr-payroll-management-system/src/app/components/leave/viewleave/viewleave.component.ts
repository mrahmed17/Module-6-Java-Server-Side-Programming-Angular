import { Component, OnInit } from '@angular/core';
import { LeaveModel } from '../../../models/leave.model';
import { LeaveService } from '../../../services/leave.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.css'],
})
export class ViewleaveComponent implements OnInit {
  leave: LeaveModel | null = null;
  errorMessage: string = '';

  constructor(
    private leaveService: LeaveService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const leaveId = this.route.snapshot.paramMap.get('id');
    if (leaveId) {
      this.leaveService.getLeave(leaveId).subscribe(
        (leave) => (this.leave = leave),
        (error) => (this.errorMessage = 'Failed to load leave details.')
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/leaves']);
  }
}
