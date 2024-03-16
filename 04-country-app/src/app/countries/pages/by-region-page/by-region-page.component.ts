import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit{

  constructor(private countriesService: CountriesService) { }

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegions.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegions.region;

  }

  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.countriesService.searchRegion(region)
      .subscribe(countries => this.countries = countries)
  }

}
