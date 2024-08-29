import { Component, OnInit } from '@angular/core';
import { FeedbackModel } from '../../../models/feedback.model';
import { FeedbackService } from '../../../services/feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createfeedback',
  templateUrl: './createfeedback.component.html',
  styleUrls: ['./createfeedback.component.css'],
})
export class CreatefeedbackComponent implements OnInit {
  feedback: FeedbackModel = new FeedbackModel('', '', '', 1, '', new Date());
  errorMessage: string = '';
  submitting: boolean = false;

  constructor(
    private feedbackService: FeedbackService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createFeedback(): void {
    if (this.feedback) {
      this.submitting = true;
      this.feedbackService.createFeedback(this.feedback).subscribe(
        () => this.router.navigate(['/feedbacks']),
        (error) => {
          this.errorMessage = 'Failed to create feedback.';
          console.error('Error creating feedback', error);
          this.submitting = false;
        }
      );
    } else {
      this.errorMessage = 'Feedback details are missing.';
    }
  }
}
