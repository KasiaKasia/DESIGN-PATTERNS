import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoratorComponent } from './decorator/decorator.component';


const routes: Routes = [{
  path: '',
  component: DecoratorComponent,
  data: { title: 'decorator' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratorRoutingModule { }
