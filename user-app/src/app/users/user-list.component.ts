import {Component, OnInit} from '@angular/core';
import {IUser} from './user';
import {UserService} from './user.service';
import {Router} from "@angular/router";

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  _listFilter: string;
  _showPhoto: boolean;
  eventMessage = '';
  filteredUsers: IUser[];
  users: IUser[] = [];
  errorMessage: '';

  constructor(private userService: UserService,
              private router: Router) {
    this.listFilter = ''; //brak domyślnego filtrowania na starcie
    this._showPhoto = false;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
  }

  get showPhoto(): boolean {
    return this._showPhoto;
  }
  set showPhoto(value: boolean) {
    this._showPhoto = value;
  }

  togglePhoto(): void {
    this.showPhoto = !this.showPhoto;
  }

  performFilter(filterBy: string): IUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: IUser) => user.first_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.eventMessage = 'I\'ve just clicked on stars and have result:' + message;
  }

  onBack(): void {
    this.router.navigate(['/welcome']);
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
        this.filteredUsers = this.users;
      },
      error => this.errorMessage = <any>error
    );
    this.filteredUsers = this.users;
  }
}
