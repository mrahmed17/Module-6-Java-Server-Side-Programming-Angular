import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LocationModel } from '../models/location.model'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private baseUrl: string = 'http://localhost:3000/locations'; // Base URL for locations API
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // Method to get all locations
  getLocations(): Observable<LocationModel[]> {
    return this.http
      .get<LocationModel[]>(this.baseUrl)
      .pipe(catchError(this.handleError<LocationModel[]>('getLocations', [])));
  }

  // Method to get a location by ID
  getLocationById(locationId: string): Observable<LocationModel> {
    const url = `${this.baseUrl}/${locationId}`;
    return this.http
      .get<LocationModel>(url)
      .pipe(catchError(this.handleError<LocationModel>('getLocationById')));
  }

  // Method to create a new location
  createLocation(location: LocationModel): Observable<LocationModel> {
    return this.http
      .post<LocationModel>(this.baseUrl, location, { headers: this.headers })
      .pipe(catchError(this.handleError<LocationModel>('createLocation')));
  }

  // Method to update an existing location
  updateLocation(
    locationId: string,
    updatedDetails: Partial<LocationModel>
  ): Observable<LocationModel> {
    const url = `${this.baseUrl}/${locationId}`;
    return this.http
      .put<LocationModel>(url, updatedDetails, { headers: this.headers })
      .pipe(catchError(this.handleError<LocationModel>('updateLocation')));
  }

  // Method to delete a location
  deleteLocation(locationId: string): Observable<boolean> {
    const url = `${this.baseUrl}/${locationId}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      map(() => true),
      catchError(this.handleError<boolean>('deleteLocation', false))
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
