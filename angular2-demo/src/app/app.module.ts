import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { MultiplesComponent } from './multiples/multiples.component';
import { SubComponent } from './multiples/sub/sub.component';

import './operators';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    MultiplesComponent,
    SubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
