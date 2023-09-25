import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = environment.api_key;

  constructor() { }

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
  }

}
