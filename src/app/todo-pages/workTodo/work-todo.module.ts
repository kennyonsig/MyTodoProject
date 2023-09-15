import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkTodoComponent } from './work-todo.component';
import { WorkTodoRoutingModule } from './work-todo-routing,module';


@NgModule({
  declarations: [
    WorkTodoComponent
  ],
  imports: [
    CommonModule,
    WorkTodoRoutingModule
  ]
})
export class WorkTodoModule { }
