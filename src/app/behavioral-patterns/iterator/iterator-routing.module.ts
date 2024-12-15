import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IteratorComponent } from './iterator/iterator.component';

 const routes: Routes = [{
  path: '',
  component: IteratorComponent,
  data: { title: 'Iterator' },
}]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IteratorRoutingModule { }
