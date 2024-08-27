import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedbackModel } from '../models/feedback.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private baseUrl = 'http://localhost:3000/feedbacks'; // Replace 'API_URL' with your actual API endpoint

  constructor(private http: HttpClient) {}

  // Create new feedback
  createFeedback(feedback: FeedbackModel): Observable<FeedbackModel> {
    return this.http.post<FeedbackModel>(`${this.baseUrl}`, feedback);
  }

  // Get all feedbacks
  getFeedbacks(): Observable<FeedbackModel[]> {
    return this.http.get<FeedbackModel[]>(`${this.baseUrl}`);
  }

  // Get feedback by ID
  getFeedbackById(id: number): Observable<FeedbackModel> {
    return this.http.get<FeedbackModel>(`${this.baseUrl}/${id}`);
  }

  // Update feedback
  updateFeedback(
    id: number,
    feedback: FeedbackModel
  ): Observable<FeedbackModel> {
    return this.http.put<FeedbackModel>(`${this.baseUrl}/${id}`, feedback);
  }

  // Delete feedback
  deleteFeedback(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Additional method to get feedback by employee ID
  getFeedbacksByEmployee(employeeId: number): Observable<FeedbackModel[]> {
    return this.http.get<FeedbackModel[]>(
      `${this.baseUrl}?employeeId=${employeeId}`
    );
  }
}
