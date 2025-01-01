import { Injectable } from '@angular/core';
import { Observer, SubjectForCryptocurrency } from '../../observer/observer.component';
import { cryptocurrencies } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class ObserverCryptocurrencyService implements SubjectForCryptocurrency {
  observers: Observer[] = [];

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(cryptocurrencies);
    }
  }

  updateCryptocurrencyStatus(index: number, isActive: boolean): void {
    if (cryptocurrencies[index]) {
      cryptocurrencies[index].active = isActive;
      this.notifyObservers();
    }
  }

}
