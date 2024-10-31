/*
Klasa dla zapisywania stanu
*/
export class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }
    public save(text: string): Memento {
        this.state = text;
        return new ConcreteMemento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
    }
}
// Interfejs gdzie jest ustalany stan przechowywanego obiektu
export interface Memento {
    getState(): string;
    getValue(): string;
    getDate(): string;
}
/*
Klasa gdzie jest tworzony obiekt, który będzie przechowywany
*/
export class ConcreteMemento implements Memento {
    private state: string;
    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    public getState(): string {
        return this.state ?? '';
    }

    public getValue(): string {
        return `${this.date} / ${this.state}`;
    }

    public getDate(): string {
        return this.date;
    }
}
/*
Klasa która zarządza zapisem stanu , używana do przywracania wcześniejszego stanu .
*/
export class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(text: string): void {
        this.mementos.push(this.originator.save(text));
    }

    public undo(): Memento[] {
        if (!this.mementos.length) {
            return [];
        }

        const memento = this.mementos.pop();
        this.originator.restore(memento!);
        return this.mementos!
    }

    public showHistory(): Memento[] {
        return this.mementos
    }
}