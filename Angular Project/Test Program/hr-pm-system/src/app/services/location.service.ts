import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationModel } from '../models/location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private baseUrl = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) {}

  createLocation(location: LocationModel): Observable<LocationModel> {
    return this.http.post<LocationModel>(`${this.baseUrl}`, location);
  }

  getLocations(): Observable<LocationModel[]> {
    return this.http.get<LocationModel[]>(`${this.baseUrl}`);
  }

  getLocationById(id: number): Observable<LocationModel> {
    return this.http.get<LocationModel>(`${this.baseUrl}/${id}`);
  }

  updateLocation(
    id: number,
    location: LocationModel
  ): Observable<LocationModel> {
    return this.http.put<LocationModel>(`${this.baseUrl}/${id}`, location);
  }

  deleteLocation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Additional method to get locations by city
  getLocationsByCity(city: string): Observable<LocationModel[]> {
    return this.http.get<LocationModel[]>(`${this.baseUrl}?city=${city}`);
  }
}
