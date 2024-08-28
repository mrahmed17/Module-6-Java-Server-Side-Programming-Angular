import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FeedbackModel } from '../models/feedback.model'; // Adjust import path as necessary

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private baseUrl: string = 'http://localhost:3000/feedback'; // Base URL for feedback API
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // Method to get all feedbacks
  getFeedbacks(): Observable<FeedbackModel[]> {
    return this.http
      .get<FeedbackModel[]>(this.baseUrl)
      .pipe(catchError(this.handleError<FeedbackModel[]>('getFeedbacks', [])));
  }

  // Method to get feedback by ID
  getFeedbackById(feedbackId: string): Observable<FeedbackModel> {
    const url = `${this.baseUrl}/${feedbackId}`;
    return this.http
      .get<FeedbackModel>(url)
      .pipe(catchError(this.handleError<FeedbackModel>('getFeedbackById')));
  }

  // Method to create new feedback
  createFeedback(feedback: FeedbackModel): Observable<FeedbackModel> {
    return this.http
      .post<FeedbackModel>(this.baseUrl, feedback, { headers: this.headers })
      .pipe(catchError(this.handleError<FeedbackModel>('createFeedback')));
  }

  // Method to update existing feedback
  updateFeedback(
    feedbackId: string,
    updatedDetails: Partial<FeedbackModel>
  ): Observable<FeedbackModel> {
    const url = `${this.baseUrl}/${feedbackId}`;
    return this.http
      .put<FeedbackModel>(url, updatedDetails, { headers: this.headers })
      .pipe(catchError(this.handleError<FeedbackModel>('updateFeedback')));
  }

  // Method to delete feedback
  deleteFeedback(feedbackId: string): Observable<boolean> {
    const url = `${this.baseUrl}/${feedbackId}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      map(() => true),
      catchError(this.handleError<boolean>('deleteFeedback', false))
    );
  }

  // Error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(
        () => new Error('Something went wrong; please try again later.')
      );
    };
  }
}
