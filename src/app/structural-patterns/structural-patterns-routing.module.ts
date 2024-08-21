import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuralPatternsComponent } from './structural-patterns/structural-patterns.component';
 
const routes: Routes = [{
  path: '',
  component: StructuralPatternsComponent,
  data: { title: 'Structural Patterns' },
  }, {
    path: 'adapter',  
    loadChildren: () => import('./adapter/adapter.module').then(a => a.AdapterModule)
  }, {
    path: 'composite', 
    loadChildren: () => import('./composite/composite.module').then(c => c.CompositeModule)
  }, {
    path: 'proxy',    
    loadChildren: () => import('./proxy/proxy.module').then(p => p.ProxyModule)
  }, {
    path: 'decorator',    
    loadChildren: () => import('./decorator/decorator.module').then(p => p.DecoratorModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralPatternsRoutingModule { }
