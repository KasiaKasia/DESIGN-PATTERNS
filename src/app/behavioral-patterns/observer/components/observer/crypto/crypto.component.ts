import { Component } from '@angular/core';
import { cryptocurrencies } from '../../../services/data/data';

@Component({
  selector: 'app-crypto',
  standalone: true,
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.scss'
})
export class CryptoComponent {
  observedCryptocurrencies = cryptocurrencies
}
