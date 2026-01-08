import { Component, input } from '@angular/core';
import { BCharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.components.html',
})
export class CharacterList {
  characters = input.required<BCharacter[]>()
}
