import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { SignUpComponent } from './shared/components/auth/sign-up/sign-up.component';
import { SignInComponent } from './shared/components/auth/sign-in/sign-in.component';
import { AutofocusDirective } from './shared/directives/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    SignInComponent,
    AutofocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
