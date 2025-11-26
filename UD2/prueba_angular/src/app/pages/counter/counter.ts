import { Component } from "@angular/core";

@Component({
  templateUrl: './counter.html'
})
export class Counter {
  count: number = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  reset(): void {
    this.count = 0;
  }
}
