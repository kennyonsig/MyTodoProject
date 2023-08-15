import { ITask } from './ITask';

export interface IList {
  listDate: Date;
  listName: string;
  listNumber: number;
  tasksArr: ITask[];
  listEdit: boolean;
  listExpand: boolean;
}
