import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrototypeRoutingModule } from './prototype-routing.module';
import { PrototypeComponent } from './prototype/prototype.component';


@NgModule({
  imports: [
    CommonModule,
    PrototypeRoutingModule,
    PrototypeComponent
  ]
})
export class PrototypeModule {}
