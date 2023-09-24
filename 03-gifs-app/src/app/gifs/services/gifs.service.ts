import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory : string[] = [];

  constructor() { }

  get tagsHistory(){
    return this._tagsHistory;
  }

  searchTag(tag: string){
    this._tagsHistory.unshift(tag);
    console.log("🚀 ~ file: gifs.service.ts:18 ~ GifsService ~ searchTag ~ this._tagsHistory:", this._tagsHistory)

  }

}
