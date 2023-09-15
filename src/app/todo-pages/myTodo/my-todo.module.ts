import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkDrag, CdkDragHandle, CdkDropList } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyTodoRoutingModule } from './my-todo-routing.module';

//components
import { AllListsComponent } from './components/all-lists/all-lists.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { CompletedListComponent } from './components/completed-list/completed-list.component';
import { ListPageLinkComponent } from './components/list-page-link/list-page-link.component';
import { InputTaskComponent } from './components/listContent/input-task/input-task.component';
import { TaskComponent } from './components/listContent/task/task.component';
import { TodoListComponent } from './components/listContent/todo-list/todo-list.component';
import { ListFilterComponent } from './components/listManipulationContent/list-filter/list-filter.component';
import { ListBtnComponent } from './components/listManipulationContent/list-btn/list-btn.component';
import { ListLeftBtnComponent } from './components/listManipulationContent/list-left-btn/list-left-btn.component';
import { MyTodoComponent } from './my-todo.component';
import { MyTodoStatisticsComponent } from './components/my-todo-statistics/my-todo-statistics.component';


@NgModule({
  declarations: [
    MyTodoComponent,
    AllListsComponent,
    AllTasksComponent,
    CompletedListComponent,
    ListPageLinkComponent,
    InputTaskComponent,
    TaskComponent,
    TodoListComponent,
    ListFilterComponent,
    ListLeftBtnComponent,
    ListBtnComponent,
    MyTodoStatisticsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
    FontAwesomeModule,
    ReactiveFormsModule,
    MyTodoRoutingModule
  ]
})
export class MyTodoModule { }
