import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskButtonComponent } from './components/task-button/task-button.component';
import { TaskComponent } from './components/task/task.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { InputComponent } from './components/input/input.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskButtonComponent,
    TaskComponent,
    ProfilePageComponent,
    InputComponent,
    HomePageComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
