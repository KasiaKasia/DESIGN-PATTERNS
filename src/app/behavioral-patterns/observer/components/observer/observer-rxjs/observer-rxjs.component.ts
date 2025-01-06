import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ObserverRxJsCryptocurrencyService } from '../../../services/service-observer-rxjs/observer-rxjs-cryptocurrency.service';
import { Cryptocurrency } from '../../../services/service-observer/observer-cryptocurrency.service';

@Component({
  selector: 'app-design-patterns-observer-rxjs',
  standalone: true,
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
