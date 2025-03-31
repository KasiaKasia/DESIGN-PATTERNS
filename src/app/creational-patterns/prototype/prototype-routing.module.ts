import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrototypeComponent } from './prototype/prototype.component';

const routes: Routes = [{
  path: '',
  component: PrototypeComponent,
  data: { title: 'prototype' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrototypeRoutingModule {}
