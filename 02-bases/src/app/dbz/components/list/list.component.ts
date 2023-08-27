import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter<string>;

  onDeleteCharacter(id?: string): void {
    this.onDelete.emit(id);
  }
}
