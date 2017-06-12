import { TestBed, inject, async } from '@angular/core/testing';

import { AsyncService } from './async.service';

describe('AsyncService', () => {
  let service: AsyncService;

  beforeEach(() => {
    service = new AsyncService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item and notify', (done) => {
    service.addItem('Nuevo item');

    service.notifications().subscribe(items => {
      expect(items.length).toBe(1);
      expect(items).toEqual(['Nuevo item']);
      done();
    });
  });

  it('should remove item and notify', (done) => {
    service.addItem('Item 1');
    service.addItem('Item 2');
    service.removeItem(0);

    service.notifications().subscribe(items => {
      expect(items.length).toBe(1);
      expect(items).toEqual(['Item 2']);
      done();
    });
  });
});
