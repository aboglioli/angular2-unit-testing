import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SyncService } from './services/sync.service';
import { AsyncService } from './services/async.service';
import { HttpService } from './services/http.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    SyncService,
    AsyncService,
    HttpService
  ]
})
export class SharedModule { }
