import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './builder/builder/builder.component';
import { CreationalPatternsComponent } from './creational-patterns/creational-patterns.component';

const routes: Routes = [{
  path: '',
  component: CreationalPatternsComponent,
  data: { title: 'Creational Patterns' },
  }, {
    path: 'builder',  
    loadChildren: () => import('./builder/builder.module').then(b => b.BuilderModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationalPatternsRoutingModule { }
