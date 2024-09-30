import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehavioralPatternsRoutingModule } from './behavioral-patterns-routing.module';
import { ChainOfResponsibilityModule } from './chain-of-responsibility/chain-of-responsibility.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BehavioralPatternsRoutingModule,
    ChainOfResponsibilityModule
  ]
})
export class BehavioralPatternsModule { }
