import { Injectable, signal } from '@angular/core';
import { BCharacter } from '../interfaces/character.interface';

// in 'root', is the module availabe or scope for the signal
@Injectable({ providedIn: 'root' })
export class DragonballsService {

  characters = signal<BCharacter[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter(characterToAdd: BCharacter) {
    this.characters.update((list) => [...list, characterToAdd]);
  }
}
