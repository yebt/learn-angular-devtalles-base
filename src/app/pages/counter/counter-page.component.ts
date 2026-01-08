import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {
  counter = signal(0);

  incrementBy(value: number) {
    this.counter.update((currVal) => currVal + value);
  }

  decrementBy(value: number) {
    this.counter.update((currVal) => currVal - value);
  }

  resetCounter() {
    this.counter.set(0);
  }
}
