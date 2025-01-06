import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { cryptocurrencies } from '../data/data';
import { Cryptocurrency } from '../service-observer/observer-cryptocurrency.service';

@Injectable({
  providedIn: 'root'
})
export class ObserverRxJsCryptocurrencyService {
  private cryptocurrencies = cryptocurrencies
  private cryptocurrenciesSubject = new Subject<Cryptocurrency[]>();
  cryptocurrencies$ = this.cryptocurrenciesSubject.asObservable();

  toggleCryptocurrency(index: number, isActive: boolean): void {
    if (this.cryptocurrencies[index]) {
      this.cryptocurrencies[index].active = isActive;
      this.cryptocurrenciesSubject.next(this.cryptocurrencies);
    }
  }
}
