import { Component, Input } from '@angular/core';
import { Composite, HierarchicalStructure } from '../../model/model';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.scss'
})
export class TreeNodeComponent {
  @Input() node!: HierarchicalStructure;

  isComposite(node: HierarchicalStructure): node is Composite {
    return node.isComposite();
  }

  getChildren(node: HierarchicalStructure): HierarchicalStructure[] {
    return this.isComposite(node) ? node.getChildren() : [];
  }
}
