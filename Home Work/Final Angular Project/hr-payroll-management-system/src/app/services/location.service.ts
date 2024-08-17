import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocationModel } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})

export class LocationService {
  private apiUrl: string = "http://localhost:3000/locations";

  constructor(private httpClient: HttpClient) { }

  getAllLocation(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  getLocationForStudent(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('An error occurred while processing your request; please try again later.'));
  }

  createLocation(location: LocationModel): Observable<LocationModel> {
    return this.httpClient.post<LocationModel>(this.apiUrl, location)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteLocation(id: string): Observable<any> {
    return this.httpClient.delete(this.apiUrl + "/" + id);
    //  http://localhost:3000/locations/id
    // return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  updateLocation(id: string, location: LocationModel): Observable<any> {
    return this.httpClient.put(this.apiUrl + "/" + id, location);
  }

  getById(id: string): Observable<any> {
    return this.httpClient.get(this.apiUrl + "/" + id);
  }

}