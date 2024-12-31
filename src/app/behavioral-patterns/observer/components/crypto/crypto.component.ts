import { Component } from '@angular/core';
import { ObserverCryptocurrencyService } from '../../server-observer/observer-cryptocurrency.service';

@Component({
  selector: 'app-crypto',
  standalone: true, 
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.scss'
})
export class CryptoComponent {
  observedCryptocurrencies = this.observerCryptocurrencyService.cryptocurrencies
  constructor(private observerCryptocurrencyService: ObserverCryptocurrencyService) {}
}
