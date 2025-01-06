import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverRoutingModule } from './observer-routing.module';
 import { ObserverRxJsCryptocurrencyService } from './services/service-observer-rxjs/observer-rxjs-cryptocurrency.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ObserverRoutingModule
  ],
  providers:[ObserverRxJsCryptocurrencyService]
})
export class ObserverModule { }
