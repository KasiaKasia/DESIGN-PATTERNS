import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cryptocurrency } from '../../observer/observer.component';
import { cryptocurrencies } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class ObserverRxJsCryptocurrencyService {
  cryptocurrencies = cryptocurrencies
 
   cryptocurrenciesSubject = new Subject<Cryptocurrency[]>();

  cryptocurrencies$ = this.cryptocurrenciesSubject.asObservable();

  toggleCryptocurrency(index: number, isActive: boolean): void {
    if (this.cryptocurrencies[index]) {
      this.cryptocurrencies[index].active = isActive;
      this.cryptocurrenciesSubject.next(this.cryptocurrencies);
    }
  }
}
