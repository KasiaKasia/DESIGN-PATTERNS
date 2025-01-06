import { Injectable } from '@angular/core';
import { cryptocurrencies } from '../data/data';

export interface Observer {
  update(cryptocurrencies: Cryptocurrency[]): void;
}

export interface SubjectForCryptocurrency {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

export interface Cryptocurrency {
  readonly name: string;
  readonly code: string;
  active: boolean;
  price: number;
}


@Injectable({
  providedIn: 'root'
})
export class ObserverCryptocurrencyService implements SubjectForCryptocurrency {
  private observers: Observer[] = [];

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
