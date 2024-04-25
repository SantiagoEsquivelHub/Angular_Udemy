import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = environments.baseUrl;

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(error => of(undefined)) // Return (Observable) undefined if the hero is not found
      );
  }

  getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw new Error('Hero ID is required to update a hero');
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHerobyId(id: string): Observable<boolean> {
    if (!id) throw new Error('Hero ID is required to delete a hero');
    return this.http.delete<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(error => of(false)), // Return (Observable) false if the hero is not found
        map(() => true) // Return (Observable) true if the hero is deleted
      )
  }
}
