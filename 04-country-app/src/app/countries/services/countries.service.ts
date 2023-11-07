import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, of, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }


  searchCountryAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(err => {
          console.log("🚀 ~ file: countries.service.ts:19 ~ CountriesService ~ searchCountryAlphaCode ~ err:", err)
          return of(null)
        }),
      )
  }

  searchCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(err => {
          console.log("🚀 ~ file: countries.service.ts:18 ~ CountriesService ~ searchCapital ~ err:", err)
          return of([])
        }),
      )
  }

  searchCountry(country: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${country}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(err => {
          console.log("🚀 ~ file: countries.service.ts:29 ~ CountriesService ~ searchCountry ~ err:", err)
          return of([])
        }),
      )
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(err => {
          console.log("🚀 ~ file: countries.service.ts:40 ~ CountriesService ~ searchRegion ~ err:", err)
          return of([])
        }),
      )
  }

}
