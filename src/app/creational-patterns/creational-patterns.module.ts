import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationalPatternsRoutingModule } from './creational-patterns-routing.module';
import { CreationalPatternsComponent } from './creational-patterns/creational-patterns.component';
import { BuilderModule } from './builder/builder.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreationalPatternsRoutingModule,
    CreationalPatternsComponent,
    BuilderModule,
  ]
})
export class CreationalPatternsModule { }
