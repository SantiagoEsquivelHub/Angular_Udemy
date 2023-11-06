import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {


  searchByCapital(term: string): void {
    console.log("From ByCapitalPage")
    console.log("🚀 ~ file: search-box.component.ts:14 ~ SearchBoxComponent ~ searchByCapital ~ term:", term)

  }

}
