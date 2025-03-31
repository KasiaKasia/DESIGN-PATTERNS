import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFactoryRoutingModule } from './simple-factory-routing.module';
import { SimpleFactoryComponent } from './simple-factory/simple-factory.component';


@NgModule({
  imports: [
    CommonModule,
    SimpleFactoryRoutingModule,
    SimpleFactoryComponent
  ]
})
export class SimpleFactoryModule {}
