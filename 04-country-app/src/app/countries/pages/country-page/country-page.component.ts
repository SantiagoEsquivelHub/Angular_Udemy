import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { switchMap } from "rxjs"

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) { }

  public country?: Country | null;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryAlphaCode(id))
      )
      .subscribe(country => {
        if (!country) this.router.navigateByUrl(""); // If the country is not found, redirect to the home page
        this.country = country;
      });
  }


}
