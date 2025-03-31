import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationalPatternsRoutingModule } from './creational-patterns-routing.module';
import { CreationalPatternsComponent } from './creational-patterns/creational-patterns.component';
import { BuilderModule } from './builder/builder.module';
import { SimpleFactoryModule } from './simple-factory/simple-factory.module';
import { PrototypeModule } from './prototype/prototype.module';


@NgModule({
  imports: [
    CommonModule,
    CreationalPatternsRoutingModule,
    CreationalPatternsComponent,
    BuilderModule,
    SimpleFactoryModule,
    PrototypeModule
  ]
})
export class CreationalPatternsModule {}
