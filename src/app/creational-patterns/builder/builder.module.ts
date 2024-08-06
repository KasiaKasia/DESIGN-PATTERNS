import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from './builder/builder.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    BuilderComponent    
  ]
})
export class BuilderModule { }
