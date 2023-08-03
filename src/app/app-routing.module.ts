import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'homePage', pathMatch: 'full'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profilePage', component: ProfilePageComponent},
  {path: 'signUp', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
