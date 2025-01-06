import { Component } from '@angular/core';
import { cryptocurrencies } from '../../../services/data/data';

@Component({
  selector: 'app-design-patterns-observer',
  standalone: true,
  templateUrl: './observer.component.html',
  styleUrl: './observer.component.scss'
})
export class ObserverComponent {
  observedCryptocurrencies = cryptocurrencies
}
