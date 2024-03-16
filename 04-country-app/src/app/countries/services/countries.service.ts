import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, of, map, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private keyLocalStorage = 'cacheStore';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegions: { region: '', countries: [] },
  }

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  public saveToLocalStorage(): void {
    localStorage.setItem("cacheStore", JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): any {
    if (!localStorage.getItem(this.keyLocalStorage)) return;

    this.cacheStore = JSON.parse(localStorage.getItem(this.keyLocalStorage)!);
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(err => {
          console.log("🚀 ~ CountriesService ~ getCountriesRequest ~ err:", err)
          return of([])
        }),
      )
  }

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
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCapital = { term: capital, countries }),
        tap(() => this.saveToLocalStorage())
      )
  }

  searchCountry(country: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${country}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCountries = { term: country, countries }),
        tap(() => this.saveToLocalStorage())
      )
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byRegions = { region: region, countries }),
      tap(() => this.saveToLocalStorage())
    )
  }

}
