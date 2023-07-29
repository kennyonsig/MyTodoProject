import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { TaskButtonComponent } from './components/task-button/task-button.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextTransformPipe } from './pipes/text-transform.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TextTransformPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputComponent,
    TaskButtonComponent,
    TodoListComponent,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
