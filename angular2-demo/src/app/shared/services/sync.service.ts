import { Injectable } from '@angular/core';

@Injectable()
export class SyncService {
  cache: Map<string, any>;

  constructor() {
    this.cache = new Map<string, any>();
  }

  addElement(key: string, element: any): void {
    this.cache.set(key, element);
  }

  getElement(key: string): any {
    return this.cache.get(key);
  }

  hasElement(key: string): boolean {
    return this.cache.has(key);
  }

  size() {
    return this.cache.size;
  }

  clear(): void {
    this.cache.clear();
  }

}
