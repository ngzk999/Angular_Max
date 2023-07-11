import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assign_4_property_event_binding_view_encapsulation';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() {}

  ngOnInit(): void {

  }

  onIntervalFired(counter: number) {
    if (counter % 2 == 0) {
      this.evenNumbers.push(counter);
    } else {
      this.oddNumbers.push(counter);
    }
  }
}
