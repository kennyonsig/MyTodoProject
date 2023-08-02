import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { InputComponent } from './components/input/input.component';
import { TaskButtonComponent } from './components/task-button/task-button.component';
import { TextTransformPipe } from './pipes/text-transform.pipe';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProfilePageComponent,
    InputComponent,
    TaskButtonComponent,
    TextTransformPipe,
    TodoListComponent,
    LoginComponent,
    HomePageComponent,

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
