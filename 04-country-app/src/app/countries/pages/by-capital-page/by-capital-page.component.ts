import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  constructor(private countriesService: CountriesService) { }

  public countries: Country[] = [];

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term)
      .subscribe(countries => this.countries = countries)
  }

}
