import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "./user";

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  pageTitle = 'User detail';
  user: IUser;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ' : id = ' + id;
  }

  onBack(): void {
    this.router.navigate(['/users']);
  }

}
