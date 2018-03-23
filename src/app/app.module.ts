import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ConsoleComponent} from './console/console.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConsoleComponent,
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
