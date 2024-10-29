import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehavioralPatternsRoutingModule } from './behavioral-patterns-routing.module';
import { ChainOfResponsibilityModule } from './chain-of-responsibility/chain-of-responsibility.module';
import { MementoModule } from './memento/memento.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BehavioralPatternsRoutingModule,
    ChainOfResponsibilityModule,
    MementoModule
  ]
})
export class BehavioralPatternsModule { }
