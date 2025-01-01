import { Component, DestroyRef, inject } from '@angular/core';
import { Cryptocurrency } from '../../observer/observer.component';
import { ObserverRxJsCryptocurrencyService } from '../../services/service-observer-rxjs/observer-rxjs-cryptocurrency.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-observer-rxjs',
  standalone: true,
  providers: [],
  templateUrl: './observer-rxjs.component.html',
  styleUrl: './observer-rxjs.component.scss'
})
export class ObserverRxJsComponent {
  selectedCryptocurrencies: Cryptocurrency[] = [];
  destroyRef = inject(DestroyRef)
  observerRxJsCryptocurrencyService = inject(ObserverRxJsCryptocurrencyService)

  ngOnInit(): void {
    this.observerRxJsCryptocurrencyService.cryptocurrencies$.pipe(
      takeUntilDestroyed(this.destroyRef)).subscribe(
      (cryptos: Cryptocurrency[]) => {
        this.selectedCryptocurrencies = cryptos.filter((c: Cryptocurrency) => c.active)
      }
    );
  }
}
