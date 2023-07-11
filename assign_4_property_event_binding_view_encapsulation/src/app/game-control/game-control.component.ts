import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalId: any;
  counter = 0;
  @Output() startEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartClick() {
    this.intervalId = setInterval(() => {
      this.counter = this.counter + 1;
      this.startEvent.emit(this.counter);
    }, 1000);
  }

  onStopClick() {
    clearInterval(this.intervalId);
  }

}
