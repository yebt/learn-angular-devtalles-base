import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface BCharacter {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './drgnbll-page.component.html',
  imports: [
    // NgClass
  ],
})
export class DrgnbllPageComponent {
  newCharacterName = signal('');
  newCharacterPower = signal(0);

  characters = signal<BCharacter[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3000 },
    { id: 4, name: 'Yamcha', power: 900 },
  ]);

  // powerClasses = computed(()=>{
  //   return {
  //     'pico-color-pink-500': true
  //   }
  // })
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
    this.reseteFields()
  }

  reseteFields(){
    this.newCharacterPower.set(0)
    this.newCharacterName.set("")
  }
}
