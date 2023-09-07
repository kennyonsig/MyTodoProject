import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilePageComponent } from './components/main-content/profile-page/profile-page.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { isLoginGuard } from './guards/is-login.guard';
import { AllTasksComponent } from './components/main-content/all-tasks/all-tasks.component';
import { CompletedListComponent } from './components/main-content/completed-list/completed-list.component';
import { authGuard } from './guards/auth.guard';


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
    path: 'profile-page',
    redirectTo: 'profile-page/all-lists'
  },
  {
    path: 'profile-page/all-lists',
    component: ProfilePageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'profile-page/all-tasks',
    component: AllTasksComponent,
    canActivate: [authGuard]
  },
  {
    path: 'profile-page/completed-list',
    component: CompletedListComponent,
    canActivate: [authGuard]
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
