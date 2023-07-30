import { IList } from '../model/IList';
import { taskList } from './taskList';

export const todoList: IList[] = [
  {
    listName: 'More valued',
    listNumber: 1,
    tasks: taskList,
  },
  {
    listName: 'test list',
    listNumber: 2,
    tasks: [],
  },
];
