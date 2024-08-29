import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../../services/feedback.service';
import { FeedbackModel } from '../../../models/feedback.model';

@Component({
  selector: 'app-editfeedback',
  templateUrl: './editfeedback.component.html',
  styleUrls: ['./editfeedback.component.css'],
})
export class EditfeedbackComponent implements OnInit {
  feedback: FeedbackModel | null = null;
  errorMessage: string = '';
  submitting: boolean = false;
  feedbackId: string | null = null;

  constructor(
    private feedbackService: FeedbackService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.feedbackId = this.route.snapshot.paramMap.get('id');
    if (this.feedbackId) {
      this.feedbackService.getFeedback(this.feedbackId).subscribe(
        (feedback) => (this.feedback = feedback),
        (error) => (this.errorMessage = 'Failed to load feedback details.')
      );
    }
  }

  updateFeedback(): void {
    if (this.feedback && this.feedbackId) {
      this.submitting = true;
      this.feedbackService
        .updateFeedback(this.feedbackId, this.feedback)
        .subscribe(
          () => this.router.navigate(['/feedbacks']),
          (error) => {
            this.errorMessage = 'Failed to update feedback.';
            console.error('Error updating feedback', error);
            this.submitting = false;
          }
        );
    } else {
      this.errorMessage = 'Feedback details or ID is missing.';
    }
  }
}
