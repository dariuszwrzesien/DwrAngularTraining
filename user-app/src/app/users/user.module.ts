import { NgModule } from '@angular/core';
import {UserListComponent} from './user-list.component';
import {UserDetailComponent} from './user-detail.component';
import {ConvertToSpacesPipe} from '../shared/pipes/convert-to-spaces.pipe';
import {SharedModule} from '../shared/shared.module';
import {UserRoutingModule} from './user-routing.module';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
