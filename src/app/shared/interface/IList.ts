import { ITask } from './ITask';

export interface IList {
  listDate: Date;
  listDeadLine: Date;
  listName: string;
  listNumber: number;
  tasksArr: ITask[];
  isListEdit: boolean;
  isListExpand: boolean;
  isListSelected: boolean;
  isFavoriteList: boolean;
}
