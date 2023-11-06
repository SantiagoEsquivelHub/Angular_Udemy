import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = 'Search by capital';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  emitValue(term: string): void {
    this.onValue.emit(term);
  }

}
