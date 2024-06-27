import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompositeComponent } from './composite/composite.component';
import { HttpClientModule } from '@angular/common/http';
import { CompositeRoutingModule } from './composite-routing.module';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './common/employee/employee.component';



@NgModule({
  declarations: [CompositeComponent, EmployeeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CompositeRoutingModule
  ],
  exports: [CompositeComponent, EmployeeComponent]
})
export class CompositeModule { }
