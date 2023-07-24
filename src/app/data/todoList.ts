import { IList } from '../model/IList';
import { taskList } from './taskList';

export const todoList: IList[] = [
  {
    listNumber: 1,
    tasks: taskList,
  },
  {
    listNumber: 2,
    tasks: [],
  },
];
