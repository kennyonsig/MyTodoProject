import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkTodoComponent } from './work-todo.component';

const routes: Routes = [
  {
    path: '',
    component: WorkTodoComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkTodoRoutingModule {
}
