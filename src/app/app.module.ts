import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './components/main-content/list-content/todo-list/todo-list.component';
import {
  TaskButtonComponent
} from './components/main-content/list-manipulation-content/task-button/task-button.component';
import { TaskComponent } from './components/main-content/list-content/task/task.component';
import { ProfilePageComponent } from './components/main-content/profile-page/profile-page.component';
import { InputTaskComponent } from './components/main-content/list-content/input-task/input-task.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './directives/autofocus.directive';
import { ListBtnComponent } from './components/main-content/list-manipulation-content/list-btn/list-btn.component';
import {
  ListFilterComponent
} from './components/main-content/list-manipulation-content/list-filter/list-filter.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CompletedListComponent } from './components/main-content/completed-list/completed-list.component';
import {
  ListPageBtnComponent
} from './components/main-content/list-manipulation-content/list-page-btn/list-page-btn.component';
import { AllTaskComponent } from './components/main-content/all-task/all-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskButtonComponent,
    TaskComponent,
    ProfilePageComponent,
    InputTaskComponent,
    HomePageComponent,
    SignUpComponent,
    SignInComponent,
    AutofocusDirective,
    ListBtnComponent,
    ListFilterComponent,
    AllTaskComponent,
    CompletedListComponent,
    ListPageBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    CommonModule,
    CdkDropList,
    CdkDrag,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
