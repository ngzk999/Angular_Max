import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  displaySecret = true;
  logs: Date[] = [];

  toggleDisplay() {
    this.displaySecret = !this.displaySecret;
    this.logs.push(new Date());
  }
}