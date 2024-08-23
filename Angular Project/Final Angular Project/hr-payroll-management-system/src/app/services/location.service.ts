import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocationModel } from '../models/location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiUrl: string = 'http://localhost:3000/locations';

  constructor(private httpClient: HttpClient) {}

  // Method to get all locations
  getAllLocations(): Observable<LocationModel[]> {
    return this.httpClient
      .get<LocationModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Method to get locations filtered for a specific purpose
  getLocationForUser(): Observable<LocationModel[]> {
    return this.httpClient
      .get<LocationModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Method to create a new location
  createLocation(location: LocationModel): Observable<LocationModel> {
    return this.httpClient
      .post<LocationModel>(this.apiUrl, location)
      .pipe(catchError(this.handleError));
  }

  // Method to delete a location by ID
  deleteLocation(id: string): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
    //  http://localhost:3000/locations/id
    // return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  // Method to update a location by ID
  updateLocation(
    id: string,
    location: LocationModel
  ): Observable<LocationModel> {
    return this.httpClient
      .put<LocationModel>(`${this.apiUrl}/${id}`, location)
      .pipe(catchError(this.handleError));
  }

  // Method to get a location by ID
  getById(id: string): Observable<LocationModel> {
    return this.httpClient
      .get<LocationModel>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Error handling method
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(
      () =>
        new Error(
          'An error occurred while processing your request; please try again later.'
        )
    );
  }
}
