import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Tony Stark');
  age = signal(45);

  heroDescription = computed(() => `${this.name()} #${this.age()}`);

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(23);
  }

  changeAge(){
    this.age.set(99)
  }

  resetForm() {
    this.name.set('Tony Stark');
    this.age.set(45);
  }
}
