import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { FeedbackModel } from '../models/feedback.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl: string = 'http://localhost:3000/feedbacks';

  constructor(private http: HttpClient) {}

  // Method to create feedback
  createFeedback(feedback: FeedbackModel): Observable<FeedbackModel> {
    return this.http
      .post<FeedbackModel>(this.apiUrl, feedback)
      .pipe(catchError(this.handleError));
  }

  // Method to get a single feedback by ID
  getFeedback(id: string): Observable<FeedbackModel> {
    return this.http
      .get<FeedbackModel>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Method to list all feedbacks
  getFeedbacks(): Observable<FeedbackModel[]> {
    return this.http
      .get<FeedbackModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Method to update feedback
  updateFeedback(
    id: string,
    feedback: FeedbackModel
  ): Observable<FeedbackModel> {
    return this.http
      .put<FeedbackModel>(`${this.apiUrl}/${id}`, feedback)
      .pipe(catchError(this.handleError));
  }

  // Method to delete feedback
  deleteFeedback(id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(
      () => new Error('An error occurred while processing the request.')
    );
  }
}
