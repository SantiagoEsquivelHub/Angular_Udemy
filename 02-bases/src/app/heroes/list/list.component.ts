import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Thor', 'Hulk'];
  public lastDeletedHero?: string = '';

  deleteLastHeroe(): void {
    this.lastDeletedHero = this.heroes.pop()
  }
}
