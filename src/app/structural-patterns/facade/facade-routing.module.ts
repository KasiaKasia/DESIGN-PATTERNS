import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacadeComponent } from './facade/facade.component';

const routes: Routes = [{
  path: '',
  component: FacadeComponent,
  data: { title: 'facade' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacadeRoutingModule { }
