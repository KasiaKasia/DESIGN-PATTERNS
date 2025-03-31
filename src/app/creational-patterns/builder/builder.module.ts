import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from './builder/builder.component';


@NgModule({
  imports: [
    CommonModule,
    BuilderRoutingModule,
    BuilderComponent    
  ]
})
export class BuilderModule { }
