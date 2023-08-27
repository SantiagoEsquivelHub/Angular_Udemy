import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Gokú',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 10,
    },
  ];

  deleteCharacterById(id?: string | undefined): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  addCharacter(character: Character): void {
    const newCharacter = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter)
  }
}
