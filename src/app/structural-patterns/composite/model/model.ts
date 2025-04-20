export abstract class HierarchicalStructure {
  protected parent!: HierarchicalStructure | null;

  public setParent(parent: HierarchicalStructure | null) {
    this.parent = parent;
  }

  public getParent(): HierarchicalStructure | null {
    return this.parent;
  }

  public add(component: HierarchicalStructure): void { }

  public remove(component: HierarchicalStructure): void { }

  public isComposite(): boolean {
    return false;
  }

  public abstract getName(): string;
}

export class Employee extends HierarchicalStructure {
  private name: string;

  constructor(name: string) {
    super()
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public override isComposite(): boolean {
    return false;
  }
}

export class Composite extends HierarchicalStructure {
  protected children: HierarchicalStructure[] = [];
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public override add(component: HierarchicalStructure): void {
    this.children.push(component);
    component.setParent(this);
  }

  public override remove(component: HierarchicalStructure): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  public override isComposite(): boolean {
    return true;
  }

  public getChildren(): HierarchicalStructure[] {
    return this.children;
  }

  public getName(): string {
    return this.name;
  }
}