import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: <string>this.route.snapshot.params['name'],
    };

    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

}
