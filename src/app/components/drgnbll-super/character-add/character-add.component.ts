import { Component, input, output, signal } from '@angular/core';
import { BCharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  newCharacterName = signal('');
  newCharacterPower = signal(0);

  // Emiter
  onNewCharacter = output<BCharacter>();

  addCharacter() {

    const newCharacter: BCharacter = {
      id: 100,
      name: this.newCharacterName(),
      power: this.newCharacterPower(),
    };

    // output the data from the action
    this.onNewCharacter.emit(newCharacter);
    this.reseteFields();
  }

  reseteFields() {
    this.newCharacterPower.set(0);
    this.newCharacterName.set('');
  }
  resetFields() {
    this.newCharacterPower.set(0);
    this.newCharacterName.set('');
  }
}
