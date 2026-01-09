import { effect, Injectable, signal } from '@angular/core';
import { BCharacter } from '../interfaces/character.interface';

const localStorageKey = 'chrctrs';

const loadFromLocalStorage = () => {
  const characters = localStorage.getItem(localStorageKey);

  return characters ? JSON.parse(characters) : [];
};

// in 'root', is the module availabe or scope for the signal
@Injectable({ providedIn: 'root' })
export class DragonballsService {
  // characters = signal<BCharacter[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 8000 },
  // ]);

  characters = signal<BCharacter[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(this.characters()));
  });

  addCharacter(characterToAdd: BCharacter) {
    this.characters.update((list) => [...list, characterToAdd]);
  }
}
