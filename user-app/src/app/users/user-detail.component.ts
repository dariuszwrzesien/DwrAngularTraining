import { Component, OnInit } from '@angular/core';
import {IUser} from "./user";

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  pageTitle: string = 'User detail';
  user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
