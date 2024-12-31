import { TestBed } from '@angular/core/testing';

import { ObserverCryptocurrencyService } from './observer-cryptocurrency.service';

describe('ObserverCryptocurrencyService', () => {
  let service: ObserverCryptocurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserverCryptocurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
