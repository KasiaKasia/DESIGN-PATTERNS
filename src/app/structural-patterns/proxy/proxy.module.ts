import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProxyRoutingModule } from './proxy-routing.module';
import { ProxyComponent } from './proxy/proxy.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './ngrx/services/user.service';



@NgModule({
  declarations: [ProxyComponent],
  imports: [
    CommonModule,
    ProxyRoutingModule
  ],
  exports: [ProxyComponent],
  providers: [UserService]
})
export class ProxyModule { }
