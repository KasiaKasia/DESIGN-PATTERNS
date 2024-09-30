import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChainOfResponsibilityRoutingModule } from './chain-of-responsibility-routing.module';
import { ChainOfResponsibilityComponent } from './chain-of-responsibility/chain-of-responsibility.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChainOfResponsibilityRoutingModule,
    ChainOfResponsibilityComponent
  ],
  exports:[ChainOfResponsibilityComponent]
})
export class ChainOfResponsibilityModule { }
