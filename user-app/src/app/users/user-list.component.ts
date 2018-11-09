import {Component, OnInit} from '@angular/core';
import {IUser} from './user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  _listFilter: string;
  _showPhoto: boolean;
  eventMessage = '';
  filteredUsers: IUser[];
  users: IUser[] = [
    {
      'id': 1,
      'guid': 'GL-1A2C',
      'first_name': 'Giacomo',
      'last_name': 'Larrat',
      'email': 'glarrat0@bing.com',
      'gender': 'Male',
      'ip_address': '107.77.40.68',
      'bank_balance': 10485.00,
      'reputation': 3.8,
      'photo': 'https://picsum.photos/80/80/?323'
    },
    {
      'id': 2,
      'guid': 'SH-21DC',
      'first_name': 'Shurlocke',
      'last_name': 'Heymes',
      'email': 'sheymes1@toplist.cz',
      'gender': 'Male',
      'ip_address': '180.136.59.223',
      'bank_balance': 99.989,
      'reputation': 1.2,
      'photo': 'https://picsum.photos/80/80/?644'
    },
    {
      'id': 3,
      'guid': 'RP-3A33',
      'first_name': 'Robin',
      'last_name': 'Paydon',
      'email': 'rpaydon2@ucla.edu',
      'gender': 'Female',
      'ip_address': '36.8.49.45',
      'bank_balance': -10.90,
      'reputation': 2.9,
      'photo': 'https://picsum.photos/80/80/?346'
    },
    {
      'id': 4,
      'guid': 'GH-4A24',
      'first_name': 'Gibbie',
      'last_name': 'Hexam',
      'email': 'ghexam3@4shared.com',
      'gender': 'Male',
      'ip_address': '234.216.233.43',
      'bank_balance': 5499.878,
      'reputation': 4.3,
      'photo': 'https://picsum.photos/80/80/?785'
    }
  ];

  constructor() {
    this.filteredUsers = this.users;
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

  ngOnInit(): void {
    console.log('Przykładowe użycie "Lifecycle Hook" o nazwie OnInit');
  }
}
