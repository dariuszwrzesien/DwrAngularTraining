import {Injectable} from '@angular/core';
import {IUser} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): IUser[] {
    return [
      {
        'id': 1,
        'first_name': 'Giacomo',
        'last_name': 'Larrat',
        'email': 'glarrat0@bing.com',
        'gender': 'Male',
        'ip_address': '107.77.40.68',
        'bank_balance': 10485.00,
        'photo': 'https://picsum.photos/80/80/?323'
      },
      {
        'id': 2,
        'first_name': 'Shurlocke',
        'last_name': 'Heymes',
        'email': 'sheymes1@toplist.cz',
        'gender': 'Male',
        'ip_address': '180.136.59.223',
        'bank_balance': 99.989,
        'photo': 'https://picsum.photos/80/80/?644'
      },
      {
        'id': 3,
        'first_name': 'Robin',
        'last_name': 'Paydon',
        'email': 'rpaydon2@ucla.edu',
        'gender': 'Female',
        'ip_address': '36.8.49.45',
        'bank_balance': -10.90,
        'photo': 'https://picsum.photos/80/80/?346'
      },
      {
        'id': 4,
        'first_name': 'Gibbie',
        'last_name': 'Hexam',
        'email': 'ghexam3@4shared.com',
        'gender': 'Male',
        'ip_address': '234.216.233.43',
        'bank_balance': 5499.878,
        'photo': 'https://picsum.photos/80/80/?785'
      }
    ];
  }
}
