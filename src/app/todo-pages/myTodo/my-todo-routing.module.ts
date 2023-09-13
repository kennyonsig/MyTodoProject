import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTodoComponent } from './my-todo.component';
import { AllListsComponent } from './components/all-lists/all-lists.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { CompletedListComponent } from './components/completed-list/completed-list.component';

const routes: Routes = [
  {
    path: '',
    component: MyTodoComponent,
    children: [
      {path: 'all-lists', component: AllListsComponent},
      {path: 'all-tasks', component: AllTasksComponent},
      {path: 'completed-list', component: CompletedListComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTodoRoutingModule {
}
