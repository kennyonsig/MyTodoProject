import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './components/main-content/todo-list/todo-list.component';
import { TaskButtonComponent } from './components/task-button/task-button.component';
import { TaskComponent } from './components/main-content/task/task.component';
import { ProfilePageComponent } from './components/main-content/profile-page/profile-page.component';
import { InputComponent } from './components/main-content/input/input.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './directives/autofocus.directive';
import { ListBtnComponent } from './components/list-btn/list-btn.component';
import { ListFilterComponent } from './components/main-content/list-filter/list-filter.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';


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
    AutofocusDirective,
    ListBtnComponent,
    ListFilterComponent,
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
