 
 export class Originator {

    private state: string;
  
    constructor(state: string) {
      this.state = state;
    }
  
    public doSomething(): void {
      console.log(`Originator: and my state has changed to: ${this.state}`);
    }
  
    public save(text: string): Memento {
      this.state = text;
      return new ConcreteMemento(this.state);
    }
  
    public restore(memento: Memento): void {
      this.state = memento.getState();
    }
  }
  
  export interface Memento {
    getState(): string;
  
    getName(): string;
  
    getDate(): string;
  }
  
  export class ConcreteMemento implements Memento {
    private state: string;
  
    private date: string;
  
    constructor(state: string) {
      this.state = state;
      this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
  
    public getState(): string {
      return this.state;
    }
  
    public getName(): string {
      return `${this.date} / (${this.state.substr(0, 9)}...)`;
    }
  
    public getDate(): string {
      return this.date;
    }
  }
  
  export class Caretaker {
    private mementos: Memento[] = [];
  
    private originator: Originator;
  
    constructor(originator: Originator) {
      this.originator = originator;
    }
  
    public backup(text: string): void {
      this.mementos.push(this.originator.save(text));
    }
  
    public undo(): Memento | null {
      if (!this.mementos.length) {
        return null;
      }
  
      const memento = this.mementos.pop();
      this.originator.restore(memento!);
      return memento!
    }
  
    public showHistory(): void {
      for (const memento of this.mementos) {
        console.log(memento.getName());
      }
    }
  }