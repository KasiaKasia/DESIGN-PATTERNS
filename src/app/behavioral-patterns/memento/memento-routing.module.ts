import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MementoComponent } from './memento/memento.component';

const routes: Routes = [{
  path: '',
  component: MementoComponent,
  data: { title: 'Memento' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MementoRoutingModule { }
