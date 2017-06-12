import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AsyncService {
  items: any[];

  notify$: BehaviorSubject<any[]>;

  constructor() {
    this.items = [];
    this.notify$ = new BehaviorSubject<any[]>(this.items);
  }

  notifications(): Observable<any> {
    return this.notify$.asObservable();
  }

  addItem(element: any) {
    this.items.push(element);
    this.notify$.next(this.items);
  }

  removeItem(index: any) {
    this.items = this.items.filter((item, i) => i !== index);
    this.notify$.next(this.items);
  }

}
