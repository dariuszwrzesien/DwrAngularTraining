import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserDetailGuard } from './user-detail.guard';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'users', component: UserListComponent },
      { path: 'users/:id', canActivate: [UserDetailGuard], component: UserDetailComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
