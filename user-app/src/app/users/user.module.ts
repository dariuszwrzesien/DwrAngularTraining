import { NgModule } from '@angular/core';
import {UserListComponent} from "./user-list.component";
import {UserDetailComponent} from "./user-detail.component";
import {ConvertToSpacesPipe} from "../shared/pipes/convert-to-spaces.pipe";
import {RouterModule} from "@angular/router";
import {UserDetailGuard} from "./user-detail.guard";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'users', component: UserListComponent },
      { path: 'users/:id', canActivate: [UserDetailGuard], component: UserDetailComponent }
    ])
  ]
})
export class UserModule { }
