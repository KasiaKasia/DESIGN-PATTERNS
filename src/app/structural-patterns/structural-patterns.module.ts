import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralPatternsRoutingModule } from './structural-patterns-routing.module';
import { StructuralPatternsComponent } from './structural-patterns/structural-patterns.component';

@NgModule({
  declarations: [StructuralPatternsComponent,],
  imports: [
    CommonModule,
    StructuralPatternsRoutingModule,
  ],
  exports: [StructuralPatternsComponent,]
})
export class StructuralPatternsModule {}
