import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../../services/feedback.service';
import { FeedbackModel } from '../../../models/feedback.model';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css'],
})
export class ViewfeedbackComponent implements OnInit {
  feedback: FeedbackModel | null = null;
  errorMessage: string = '';

  constructor(
    private feedbackService: FeedbackService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const feedbackId = this.route.snapshot.paramMap.get('id');
    if (feedbackId) {
      this.feedbackService.getFeedback(feedbackId).subscribe(
        (feedback) => (this.feedback = feedback),
        (error) => (this.errorMessage = 'Failed to load feedback details.')
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/feedbacks']);
  }
}
