import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const matchPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  let password = control.get('password');
  let repeatPassword = control.get('repeatPassword');


  return password && repeatPassword && password?.value !== repeatPassword?.value
    ? {passwordMatchError: true}
    : null;

};

