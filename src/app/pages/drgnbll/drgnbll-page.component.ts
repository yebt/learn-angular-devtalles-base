import { Component, signal } from '@angular/core';

interface BCharacter {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './drgnbll-page.component.html',
})
export class DrgnbllPageComponent {
  characters = signal<BCharacter[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3000 },
  ]);
}
