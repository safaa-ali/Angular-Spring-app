import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }