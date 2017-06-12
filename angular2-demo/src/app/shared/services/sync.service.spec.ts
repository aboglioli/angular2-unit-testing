import { TestBed, inject } from '@angular/core/testing';

import { SyncService } from './sync.service';

describe('SyncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SyncService]
    });
  });

  it('should be created', inject([SyncService], (service: SyncService) => {
    expect(service).toBeTruthy();
  }));

  it('should start with 0 size', inject([SyncService], (service: SyncService) => {
    expect(service.size()).toBe(0);
  }));

  it('should allow add an element', inject([SyncService], (service: SyncService) => {
    service.addElement('123', {name: 'Hola'});
    expect(service.hasElement('123')).toBeTruthy();
    expect(service.getElement('123')).toEqual({name: 'Hola'});
  }));
});
