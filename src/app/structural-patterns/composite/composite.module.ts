import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompositeComponent } from './composite/composite.component';
import { HttpClientModule } from '@angular/common/http';
import { CompositeRoutingModule } from './composite-routing.module';
import { FormsModule } from '@angular/forms';
import { TreeNodeComponent } from './common/tree-node/tree-node.component';


@NgModule({
  declarations: [CompositeComponent, TreeNodeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CompositeRoutingModule,
  ],
  exports: [CompositeComponent, TreeNodeComponent]
})
export class CompositeModule { }
