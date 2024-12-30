import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverRoutingModule } from './observer-routing.module';
import { ObserverComponent } from './observer/observer.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ObserverComponent,
    ObserverRoutingModule
  ]
})
export class ObserverModule { }
