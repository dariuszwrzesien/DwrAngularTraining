import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  users = [
    {
      'id': 1,
      'first_name': 'Giacomo',
      'last_name': 'Larrat',
      'email': 'glarrat0@bing.com',
      'gender': 'Male',
      'ip_address': '107.77.40.68'
    },
    {
      'id': 2,
      'first_name': 'Shurlocke',
      'last_name': 'Heymes',
      'email': 'sheymes1@toplist.cz',
      'gender': 'Male',
      'ip_address': '180.136.59.223'
    },
    {
      'id': 3,
      'first_name': 'Robin',
      'last_name': 'Paydon',
      'email': 'rpaydon2@ucla.edu',
      'gender': 'Female',
      'ip_address': '36.8.49.45'
    },
    {
      'id': 4,
      'first_name': 'Gibbie',
      'last_name': 'Hexam',
      'email': 'ghexam3@4shared.com',
      'gender': 'Male',
      'ip_address': '234.216.233.43'
    }
  ];
}
