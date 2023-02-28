import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private value = 0

  constructor() {}

  getValue(): number {
    return this.value;
  }

  incrValue(): void {
    this.value++;
  }
  
}
