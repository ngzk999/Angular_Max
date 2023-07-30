import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  activeToInactiveEvent = new EventEmitter<number>();
  inactiveToActiveEvent = new EventEmitter<number>();

  constructor() { }

  incrementActiveToInactive() {
    this.activeToInactiveEvent.emit(++this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveEvent.emit(++this.inactiveToActiveCounter);
  }
}
