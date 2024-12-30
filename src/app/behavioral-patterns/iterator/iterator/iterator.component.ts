import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

interface Iterator<T> {
  current(): T;
  next(): T; 
  valid(): boolean; 
}
interface Aggregator { 
  getIterator(): Iterator<TreeNode> 
}

class TreeNode {
  value: string;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: string, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree implements Aggregator {
  private root: TreeNode | null;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  public getRoot(): TreeNode | null {
    return this.root;
  }

  public getSize(): number {
    return this.size;
  }

  public add(value: string): void {
    const newNode = new TreeNode(value); 
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    this.size++;
  }

  private insertNode(node: TreeNode, newNode: TreeNode): void {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  public getIterator(): Iterator<TreeNode> {
    if (!this.root) {
      throw new Error("Tree is empty");
    }
    return new TreeIterator(this.root);
  }
}

class TreeIterator implements Iterator<TreeNode> {
  private stack: TreeNode[];

  constructor(root: TreeNode) {
    this.stack = [];
    this.traverseLeft(root);
  }

  private traverseLeft(node: TreeNode | null): void {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }

  public current(): TreeNode {
    if (!this.valid()) {
      throw new Error("No current element");
    }
    return this.stack[this.stack.length - 1];
  }

  public next(): TreeNode {
    if (!this.valid()) {
      throw new Error("No next element");
    }
    const node = this.stack.pop()!;
    if (node.right) {
      this.traverseLeft(node.right);
    }
    return node;
  }

  public valid(): boolean {
    return this.stack.length > 0;
  }

}



@Component({
  selector: 'app-iterator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './iterator.component.html',
  styleUrl: './iterator.component.scss'
})
export class IteratorComponent {

  tree = new Tree();
  newNodeValue: string = '';
  traversalResult: string[] = [];
 
  addNode(): void {
    if (this.newNodeValue.trim()) {
      this.tree.add(this.newNodeValue);
      this.newNodeValue = '';
      this.updateTraversal();
    }
  }

  updateTraversal(): void {
    const iterator = this.tree.getIterator();
    const result: string[] = [];
    while (iterator.valid()) {
      result.push(iterator.current().value); 
      iterator.next();
    }
    this.traversalResult = result;
  }
}
