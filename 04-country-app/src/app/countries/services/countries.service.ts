import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(err => {
          console.log("🚀 ~ file: countries.service.ts:18 ~ CountriesService ~ searchCapital ~ err:", err)
          return of([])
        }),
      )
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(err => {
          console.log("🚀 ~ file: countries.service.ts:29 ~ CountriesService ~ searchCountry ~ err:", err)
          return of([])
        }),
      )
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(err => {
          console.log("🚀 ~ file: countries.service.ts:40 ~ CountriesService ~ searchRegion ~ err:", err)
          return of([])
        }),
      )
  }

}
