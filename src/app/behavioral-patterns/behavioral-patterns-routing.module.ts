import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehavioralPatternsComponent } from './behavioral-patterns/behavioral-patterns.component';
  
const routes: Routes = [{
  path: '',
  component: BehavioralPatternsComponent,
  data: { title: 'Behavioral Patterns' },
  }, {
    path: 'chain-of-responsibility',  
    loadChildren: () => import('./chain-of-responsibility/chain-of-responsibility.module').then(a => a.ChainOfResponsibilityModule)
  }, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BehavioralPatternsRoutingModule { }
