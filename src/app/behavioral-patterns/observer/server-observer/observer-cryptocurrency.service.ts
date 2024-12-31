import { Injectable } from '@angular/core';
import { Cryptocurrency, Observer, SubjectForCryptocurrency } from '../observer/observer.component';

@Injectable({
  providedIn: 'root'
})
export class ObserverCryptocurrencyService implements SubjectForCryptocurrency {
  observers: Observer[] = [];

  cryptocurrencies: Cryptocurrency[] = [
    { name: 'Bitcoin', code: 'BTC', active: false, price: this.generateRandomPrice() },
    { name: 'Ethereum', code: 'ETH', active: false, price: this.generateRandomPrice() },
    { name: 'Tether', code: 'USDT', active: false, price: this.generateRandomPrice() },
    { name: 'Binance Coin', code: 'BNB', active: false, price: this.generateRandomPrice() },
    { name: 'Ripple', code: 'XRP', active: false, price: this.generateRandomPrice() },
    { name: 'Cardano', code: 'ADA', active: false, price: this.generateRandomPrice() },
    { name: 'Solana', code: 'SOL', active: false, price: this.generateRandomPrice() },
    { name: 'Polkadot', code: 'DOT', active: false, price: this.generateRandomPrice() },
    { name: 'Dogecoin', code: 'DOGE', active: false, price: this.generateRandomPrice() },
    { name: 'USD Coin', code: 'USDC', active: false, price: this.generateRandomPrice() }
  ];

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
      observer.update(this.cryptocurrencies);
    }
  }

  updateCryptocurrencyStatus(index: number, isActive: boolean): void {
    if (this.cryptocurrencies[index]) {
      this.cryptocurrencies[index].active = isActive;
      this.notifyObservers();
    }
  }

  private generateRandomPrice(): number {
    return Math.floor(Math.random() * 1000000) / 100;
  }
}
