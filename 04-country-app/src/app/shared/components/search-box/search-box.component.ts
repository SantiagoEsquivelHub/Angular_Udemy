import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe((value) => {
        this.onValue.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = 'Search by capital';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public initialValue?: string;


  emitValue(term: string): void {
    this.onValue.emit(term);
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }

}
