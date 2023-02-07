import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  increment(): void {
    this.counter++;
  }
  decrement(): void {
    this.counter--;
  }
  counter: number = 0;
}
