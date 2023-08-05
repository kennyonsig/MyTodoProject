import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { matchPassword } from '../matchpassword.validator';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf]
})
export class SignUpComponent implements OnInit {

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
        email: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        repeatPassword: new FormControl(null)
      },
      {validators: matchPassword});
  }

  signUp() {
    console.log(this.loginForm.value);

  }


}


