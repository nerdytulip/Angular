import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-components-demo',
  templateUrl: './components-demo.component.html',
  styleUrls: ['./components-demo.component.scss']
})
export class ComponentsDemoComponent implements OnInit {
  headers=["name","username","email"];
  users :User[]=[
    {
      "name":"Mike",
      "username":"mikey",
      "email":"mike@jhds.com"
    },
   
    {
      "name":"Harvey",
      "username":"harv",
      "email":"harvey@jhds.com"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
