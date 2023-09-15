import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { SignInComponent } from './shared/components/auth/sign-in/sign-in.component';
import { isLoginGuard } from './shared/guards/is-login.guard';
import { authGuard } from './shared/guards/auth.guard';
import { SignUpComponent } from './shared/components/auth/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [isLoginGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [isLoginGuard]
  },
  {
    path: 'my-todo',
    canActivate: [authGuard],
    loadChildren: () => import('./todo-pages/myTodo/my-todo.module').then(module => module.MyTodoModule)
  },
  {
    path: 'work-todo',
    canActivate: [authGuard],
    loadChildren: () => import('./todo-pages/workTodo/work-todo.module').then(module => module.WorkTodoModule)
  },
  {
    path: '404',
    loadComponent: () => import('src/app/shared/components/errors/not-found/not-found.component').then(component => component.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: '404'
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
