import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.activeToInactiveEvent.subscribe(
      (activeToInactiveCounter: number) => this.activeToInactiveCounter = activeToInactiveCounter
    );

    this.counterService.inactiveToActiveEvent.subscribe({
      next: (inactiveToActiveCounter: number) => {
        this.inactiveToActiveCounter = inactiveToActiveCounter;
      }
    })
  }

}
