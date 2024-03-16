import { Component, EventEmitter, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  constructor(private countriesService: CountriesService) { }

  public countries: Country[] = [];
  public isLoading: boolean = false;

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;

      })
  }

}
