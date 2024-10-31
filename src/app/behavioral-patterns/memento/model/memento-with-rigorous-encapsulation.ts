export interface Originator {
    save(state: string): Memento;
    setState(state: string): void;
    getState?(): string
}

export interface Memento {
    restore(): void;
    getValue?(): string;
}

export class ConcreteOriginator implements Originator {
    private state: string;

    constructor(initialState: string) {
        this.state = initialState;
    }

    public save(state: string): Memento {
        this.setState(state);
        return new ConcreteMemento(this, this.state);
    }

    public setState(state: string): void {
        this.state = state;
    }

    public getState(): string {
        return this.state ?? '';
    }
}

// ConcreteMemento implementuje Memento
export class ConcreteMemento implements Memento {
    private originator: Originator;
    private state: string;

    constructor(originator: Originator, state: string) {
        this.originator = originator;
        this.state = state;
    }

    // Przywraca stan w Originator
    public restore(): void {
        this.originator.setState(this.state);
    }
    
    public getValue(): string {
        return this.state ?? '';
    }
}

// Klasa Caretaker do zarządzania zapisanymi stanami
export class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    // Tworzy backup poprzez zapisanie stanu
    public backup(state: string): void {
        this.mementos.push(this.originator.save(state));
    }

    // Cofnięcie do ostatniego stanu
    public undo(): Memento[] {
        if (!this.mementos.length) {
            return [];
        }

        const memento = this.mementos.pop();
        memento?.restore();
        return this.mementos!
    }

    // Wyświetlanie historii zapisanych stanów
    public showHistory(): Memento[] {
        return this.mementos
    }
}
