import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Search: </h5>
    <input
      type="text"
      class="form-control"
      placeholder="Search gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `,
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor() { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log("🚀 ~ file: search-box.component.ts:25 ~ SearchBoxComponent ~ searchTag ~ newTag:", newTag)
  }
}
