import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeRoutingModule } from './facade-routing.module';
import { FacadeComponent } from './facade/facade.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FacadeComponent,
    FacadeRoutingModule
  ]
})
export class FacadeModule { }
