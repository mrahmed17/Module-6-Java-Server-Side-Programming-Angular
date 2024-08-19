import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackModel } from '../feedback/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'https://localhost:3000/feedbacks';

  constructor(private http: HttpClient) { }

  // Method to create feedback
  createFeedback(feedback: FeedbackModel): Observable<FeedbackModel> {
    return this.http.post<FeedbackModel>(this.apiUrl, feedback);
  }

  // Method to get a single feedback by ID
  getFeedback(id: string): Observable<FeedbackModel> {
    return this.http.get<FeedbackModel>(`${this.apiUrl}/${id}`);
  }

  // Method to list all feedbacks
  getFeedbacks(): Observable<FeedbackModel[]> {
    return this.http.get<FeedbackModel[]>(this.apiUrl);
  }

  // Method to update feedback
  updateFeedback(id: string, feedback: FeedbackModel): Observable<FeedbackModel> {
    return this.http.put<FeedbackModel>(`${this.apiUrl}/${id}`, feedback);
  }

  // Method to delete feedback
  deleteFeedback(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
