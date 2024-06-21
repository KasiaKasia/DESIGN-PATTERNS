import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdapterRoutingModule } from './adapter-routing.module';
import { AdapterComponent } from './adapter/adapter.component';
import { DataService } from '../../common/service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { TypesPipe } from '../../common/pipe/types.pipe';
import { StatusPipe } from '../../common/pipe/status.pipe';
import { FormsModule } from '@angular/forms';
import { TableComponent } from '../../common/components/table/table.component';
import { RadioComponent } from '../../common/components/radio/radio.component';
import { SelectDropdownComponent } from '../../common/components/select-dropdown/select-dropdown.component';
import { StructuralPatternsModule } from "../structural-patterns.module";


@NgModule({
  declarations: [
    AdapterComponent,
    TableComponent,
    RadioComponent,
    SelectDropdownComponent,
    StatusPipe,
    TypesPipe
  ],
  providers: [
    DataService
  ],
  exports: [
    AdapterComponent,
    TableComponent,
    RadioComponent,
    SelectDropdownComponent
  ],
  imports: [
    CommonModule,
    AdapterRoutingModule,
    HttpClientModule,
    FormsModule,
    StructuralPatternsModule
  ]
})
export class AdapterModule {}
