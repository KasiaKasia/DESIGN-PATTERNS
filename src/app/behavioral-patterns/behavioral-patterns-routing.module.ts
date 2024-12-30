import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehavioralPatternsComponent } from './behavioral-patterns/behavioral-patterns.component';

const routes: Routes = [{
  path: '',
  component: BehavioralPatternsComponent,
  data: { title: 'Behavioral Patterns' },
}, {
  path: 'chain-of-responsibility',
  loadChildren: () => import('./chain-of-responsibility/chain-of-responsibility.module').then(c => c.ChainOfResponsibilityModule)
}, {
  path: 'memento',
  loadChildren: () => import('./memento/memento.module').then(m => m.MementoModule)
}, {
  path: 'iterator',
  loadChildren: () => import('./iterator/iterator.module').then(i => i.IteratorModule)
}, {
  path: 'observer',
  loadChildren: () => import('./observer/observer.module').then(o => o.ObserverModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BehavioralPatternsRoutingModule {}
