import {Component, OnInit} from '@angular/core';
import {IUser} from './user';
import {UserService} from "./user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  showPhoto = false;
  listFilter = 'cart';
  users: IUser[] = [];

  constructor(private userService: UserService) {}

  togglePhoto(): void {
    this.showPhoto = !this.showPhoto;
  }

  ngOnInit(): void {
    console.log('Przykładowe użycie "Lifecycle Hook" o nazwie OnInit');
  }
}
