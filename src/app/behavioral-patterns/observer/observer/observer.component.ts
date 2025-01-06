import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cryptocurrency, Observer, ObserverCryptocurrencyService } from '../services/service-observer/observer-cryptocurrency.service';
import { ObserverComponent } from '../components/observer/observer/observer.component';
import { cryptocurrencies } from '../services/data/data';
import { ObserverRxJsCryptocurrencyService } from '../services/service-observer-rxjs/observer-rxjs-cryptocurrency.service';
import { ObserverRxJsComponent } from '../components/observer/observer-rxjs/observer-rxjs.component';
 

@Component({
  selector: 'app-observer',
  standalone: true,
  imports: [FormsModule, ObserverComponent, ObserverRxJsComponent],
  providers: [ObserverCryptocurrencyService],
   templateUrl: './observer.component.html',
  styleUrl: './observer.component.scss'
})
export class DesignPatternsObserverComponent implements Observer {
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

