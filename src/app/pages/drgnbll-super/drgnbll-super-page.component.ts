import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterList } from '../../components/drgnbll-super/character-list/character-list.components';
import { BCharacter } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/drgnbll-super/character-add/character-add.component';

@Component({
  templateUrl: './drgnbll-super-page.component.html',
  imports: [CharacterList, CharacterAddComponent],
})
export class DrgnbllPageSuperComponent {
  newCharacterName = signal('');
  newCharacterPower = signal(0);

  characters = signal<BCharacter[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter(characterToAdd: BCharacter) {
    this.characters.update((list) => [...list, characterToAdd]);
  }
}
