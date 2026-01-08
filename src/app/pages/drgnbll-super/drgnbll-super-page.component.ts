import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterList } from "../../components/drgnbll-super/character-list/character-list.components";
import { BCharacter } from '../../interfaces/character.interface';


@Component({
  templateUrl: './drgnbll-super-page.component.html',
  imports: [CharacterList]
})
export class DrgnbllPageSuperComponent {
  newCharacterName = signal('');
  newCharacterPower = signal(0);

  characters = signal<BCharacter[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter() {
    if (
      //
      !this.newCharacterName() ||
      !this.newCharacterPower() ||
      this.newCharacterPower() <= 0
    ) {
      return;
    }

    const newCharacter: BCharacter = {
      id: this.characters().length + 1,
      name: this.newCharacterName(),
      power: this.newCharacterPower(),
    };

    // this.characters().push(newCharacter);
    this.characters.update((lst) => [...lst, newCharacter]);
    this.reseteFields();
  }

  reseteFields() {
    this.newCharacterPower.set(0);
    this.newCharacterName.set('');
  }
}
