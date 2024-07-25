import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // passwordType: 'text' | 'password' = 'password';
  passwordType: WritableSignal<'text' | 'password'> = signal('password');
  i = 0;

  submit() {
    console.log('hi');
  }

  changePasswordType() {
    this.i++;
    this.passwordType.set(this.i % 2 == 0 ? 'password' : 'text');
  }
}
