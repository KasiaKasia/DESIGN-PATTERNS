import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdapterComponent } from './adapter/adapter.component';

const routes: Routes = [{
    path: '',
    component: AdapterComponent,
    data: { title: 'adapter' },
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdapterRoutingModule { }
