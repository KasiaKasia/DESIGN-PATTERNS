import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignPatternsObserverComponent } from './observer/observer.component';

const routes: Routes = [{
  path: '',
  component: DesignPatternsObserverComponent,
  data: { title: 'Observer' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObserverRoutingModule { }
