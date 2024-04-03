import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.black
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Green Lantern',
      canFly: false,
      color: Color.green
    },
  ];

  public sortBy: keyof Hero | null = null;

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void {
    this.sortBy = value;
  }
}
