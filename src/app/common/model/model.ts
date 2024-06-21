export interface Tasks {
  readonly id: number;
  readonly name: string;
  readonly status: StatusKey;
  readonly type: TypesKey;
  readonly description: string;
}

export const Status: Record<number, string> = {
  1: 'done',
  2: 'during',
  3: 'not performed',
};

export type StatusKey = keyof typeof Status;

export type TaskTypes = {
  [key: number]: string;
};

export const Types: TaskTypes = {
  1: 'Urgent',
  2: 'Important',
  3: 'Routine',
  4: 'Extra',
  5: 'Training',
};

export type TypesKey = keyof typeof Types;

export enum FilterColumn {
  status = 'status',
  type = 'type',
}