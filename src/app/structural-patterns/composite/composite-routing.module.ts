import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompositeComponent } from './composite/composite.component';

const routes: Routes = [{
    path: '',
    component: CompositeComponent,
    data: { title: 'composite' },
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompositeRoutingModule { }
