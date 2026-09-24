import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // 1. Import RouterModule

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { GroupCustomersComponent } from './group-customers/group-customers';

@NgModule({
  declarations: [
    App,
    GroupCustomersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule // 2. Thêm RouterModule vào đây
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }