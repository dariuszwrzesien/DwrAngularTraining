import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {IUser} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://demo8305388.mockable.io/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.userUrl).pipe(
      tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);

    // return [
    //   {
    //     'id': 1,
    //     'guid': 'GL-1A2C',
    //     'first_name': 'Giacomo',
    //     'last_name': 'Larrat',
    //     'email': 'glarrat0@bing.com',
    //     'gender': 'Male',
    //     'ip_address': '107.77.40.68',
    //     'bank_balance': 10485.00,
    //     'reputation': 3.8,
    //     'photo': 'https://picsum.photos/80/80/?323'
    //   },
    //   {
    //     'id': 2,
    //     'guid': 'SH-21DC',
    //     'first_name': 'Shurlocke',
    //     'last_name': 'Heymes',
    //     'email': 'sheymes1@toplist.cz',
    //     'gender': 'Male',
    //     'ip_address': '180.136.59.223',
    //     'bank_balance': 99.989,
    //     'reputation': 1.2,
    //     'photo': 'https://picsum.photos/80/80/?644'
    //   },
    //   {
    //     'id': 3,
    //     'guid': 'RP-3A33',
    //     'first_name': 'Robin',
    //     'last_name': 'Paydon',
    //     'email': 'rpaydon2@ucla.edu',
    //     'gender': 'Female',
    //     'ip_address': '36.8.49.45',
    //     'bank_balance': -10.90,
    //     'reputation': 2.9,
    //     'photo': 'https://picsum.photos/80/80/?346'
    //   },
    //   {
    //     'id': 4,
    //     'guid': 'GH-4A24',
    //     'first_name': 'Gibbie',
    //     'last_name': 'Hexam',
    //     'email': 'ghexam3@4shared.com',
    //     'gender': 'Male',
    //     'ip_address': '234.216.233.43',
    //     'bank_balance': 5499.878,
    //     'reputation': 4.3,
    //     'photo': 'https://picsum.photos/80/80/?785'
    //   }
    // ];
  }
}
