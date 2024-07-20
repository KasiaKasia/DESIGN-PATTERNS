import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralPatternsComponent } from './structural-patterns/structural-patterns.component';
import { StructuralPatternsRoutingModule } from './structural-patterns-routing.module';

@NgModule({
  declarations: [StructuralPatternsComponent],
  imports: [
    CommonModule,
    StructuralPatternsRoutingModule,
  ],
  exports: [StructuralPatternsComponent]
})
export class StructuralPatternsModule { }
