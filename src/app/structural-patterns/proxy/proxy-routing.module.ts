import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProxyComponent } from './proxy/proxy.component';

const routes: Routes = [{
  path: '',
  component: ProxyComponent,
  data: { title: 'proxy' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProxyRoutingModule { }
