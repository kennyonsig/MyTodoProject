import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { matchPassword } from '../matchpassword.validator';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf]
})
export class SignUpComponent implements OnInit {

  loginForm: FormGroup;
  successReg = false;
  email: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
        email: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        repeatPassword: new FormControl(null)
      },
      {validators: matchPassword});
  }

  signUp() {
    const formData = this.loginForm.value;

    this.http.post('url', formData).subscribe({
      next: response => {
        this.successReg = true;
        this.email = formData.email;
        console.log(response);
      },
      error: error => {
        this.successReg = true; //Якобы успешная отправка данных на сервер
        console.log(error);
      }
    });
  }

}
