import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleFactoryComponent } from './simple-factory/simple-factory.component';

const routes: Routes = [{
  path: '',
  component: SimpleFactoryComponent,
  data: { title: 'simple factory' },
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleFactoryRoutingModule { }
