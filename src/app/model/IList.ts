import { ITask } from './ITask';

export interface IList {
  listDate: string;
  listName: string;
  listNumber: number;
  tasks: ITask[];
}
