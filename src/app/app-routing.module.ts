import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilePageComponent } from './components/main-content/profile-page/profile-page.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { authGuard } from './guards/auth.guard';
import { isLoginGuard } from './guards/is-login.guard';


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
    component: ProfilePageComponent,
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
