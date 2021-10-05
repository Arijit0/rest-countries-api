import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from './app-constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  allCountries(): Observable<any> {
    return this.http.get(`${AppConstants.baseUrl}all`);
  }

  CountriesByRegion(region: any): Observable<any> {
    return this.http.get(`${AppConstants.baseUrl}region/${region}`);
  }
 
  searchByCountryName(CountryName: any): Observable<any> {
    return this.http.get(`${AppConstants.baseUrl}name/${CountryName}`);
  }
}
