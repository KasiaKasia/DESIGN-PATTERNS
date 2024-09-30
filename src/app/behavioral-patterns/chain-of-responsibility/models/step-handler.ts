export interface StepHandler {
    setNext(handler: StepHandler): StepHandler;
    handle(request: any): void;
}

export abstract class AbstractStepHandler implements StepHandler {
    private nextHandler: StepHandler | null = null;

    public setNext(handler: StepHandler): StepHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: any): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}