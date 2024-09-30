import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChainOfResponsibilityComponent } from './chain-of-responsibility/chain-of-responsibility.component';

const routes: Routes = [{
  path: '',
  component: ChainOfResponsibilityComponent,
  data: { title: 'Chain of Responsibility' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChainOfResponsibilityRoutingModule { }
