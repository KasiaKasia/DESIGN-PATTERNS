import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProxyRoutingModule } from './proxy-routing.module';
import { ProxyComponent } from './proxy/proxy.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProxyComponent],
  imports: [
    CommonModule,
    ProxyRoutingModule,
    HttpClientModule,
  ],
  exports:[ProxyComponent]
})
export class ProxyModule { }
