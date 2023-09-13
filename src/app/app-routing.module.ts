import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { isLoginGuard } from './shared/guards/is-login.guard';
import { AllTasksComponent } from './todo-pages/myTodo/components/all-tasks/all-tasks.component';
import { CompletedListComponent } from './todo-pages/myTodo/components/completed-list/completed-list.component';
import { authGuard } from './shared/guards/auth.guard';
import { AllListsComponent } from './todo-pages/myTodo/components/all-lists/all-lists.component';
import { MyTodoComponent } from './todo-pages/myTodo/my-todo.component';
import { MyTodoRoutingModule } from './todo-pages/myTodo/my-todo-routing.module';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [isLoginGuard]
  },
  {
    path: 'my-todo',
    canActivate: [authGuard],
    component: MyTodoComponent,
    children: [
      {path: 'all-lists', component: AllListsComponent},
      {path: 'all-tasks', component: AllTasksComponent},
      {path: 'completed-list', component: CompletedListComponent}
    ]
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '404',
    loadComponent: () => import('src/app/components/errors/not-found/not-found.component').then(component => component.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: '404'
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MyTodoRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
