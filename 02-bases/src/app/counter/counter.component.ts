import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public counter: number = 10;

  constructor() { }

  ngOnInit() { }

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10
  }
}
