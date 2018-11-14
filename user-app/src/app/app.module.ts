import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserListComponent} from './users/user-list.component';
import {ConvertToSpacesPipe} from './shared/pipes/convert-to-spaces.pipe';
import {StarComponent} from './shared/components/star/star.component';
import { UserDetailComponent } from './users/user-detail.component';
import { WelcomeComponent } from './home/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    UserDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'users', component: UserListComponent },
      { path: 'users/:id', component: UserDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
