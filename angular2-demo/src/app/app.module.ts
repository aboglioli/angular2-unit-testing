import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { MultiplesComponent } from './multiples/multiples.component';
import { SubComponent } from './multiples/sub/sub.component';

import './operators';
import { IOComponent } from './io/io.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    MultiplesComponent,
    SubComponent,
    IOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
