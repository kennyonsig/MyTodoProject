import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProfilePageComponent,
    FormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
