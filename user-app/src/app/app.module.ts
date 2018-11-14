import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserListComponent} from './users/user-list.component';
import {ConvertToSpacesPipe} from './shared/pipes/convert-to-spaces.pipe';
import {StarComponent} from './shared/components/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
