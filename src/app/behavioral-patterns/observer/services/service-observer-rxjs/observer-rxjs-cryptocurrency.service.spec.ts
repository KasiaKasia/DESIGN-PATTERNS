import { TestBed } from '@angular/core/testing';
import { ObserverRxJsCryptocurrencyService } from './observer-rxjs-cryptocurrency.service';

describe('ObserverRxJsCryptocurrencyService', () => {
  let service: ObserverRxJsCryptocurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserverRxJsCryptocurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
