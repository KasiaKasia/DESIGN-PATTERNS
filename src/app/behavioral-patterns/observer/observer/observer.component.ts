import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ObserverCryptocurrencyService } from '../services/service-observer/observer-cryptocurrency.service';
import { CryptoComponent } from '../components/observer/crypto/crypto.component';
import { cryptocurrencies } from '../services/data/data';
import { ObserverRxJsCryptocurrencyService } from '../services/service-observer-rxjs/observer-rxjs-cryptocurrency.service';
import { ObserverRxJsComponent } from '../components/observer-rxjs/observer-rxjs.component';

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

@Component({
  selector: 'app-observer',
  standalone: true,
  imports: [FormsModule, CryptoComponent, ObserverRxJsComponent],
  providers: [ObserverCryptocurrencyService],
  templateUrl: './observer.component.html',
  styleUrl: './observer.component.scss'
})
export class ObserverComponent implements Observer {
  cryptocurrencies = cryptocurrencies

  constructor(private observerCryptocurrencyService: ObserverCryptocurrencyService,
              private observerRxJsCryptocurrencyService: ObserverRxJsCryptocurrencyService
  ) { }
  
  ngOnInit(): void {
    this.observerCryptocurrencyService.registerObserver(this);   
  }
 
  ngOnDestroy(): void {
    this.observerCryptocurrencyService.removeObserver(this);
  }
  
  update(cryptocurrencies: Cryptocurrency[]): void {
    this.cryptocurrencies = cryptocurrencies;
  }
  
  onCheckboxChange(event: Event, index: number) {
    const inputElement = event.target as HTMLInputElement;
    const isChecked = inputElement.checked;
    this.observerCryptocurrencyService.updateCryptocurrencyStatus(index, isChecked);
    this.observerRxJsCryptocurrencyService.toggleCryptocurrency(index, isChecked);
  }
}

