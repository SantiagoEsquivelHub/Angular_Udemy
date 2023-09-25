import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = environment.api_key;
  private serviceUrl: string = "https://api.giphy.com/v1/gifs/";

  constructor(private http: HttpClient) { }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private orginizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag != tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.orginizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}search`, { params })
      .subscribe(resp => {
        console.log("🚀 ~ file: gifs.service.ts:36 ~ GifsService ~ searchTag ~ resp:", resp)
        return
      })
  }

}
