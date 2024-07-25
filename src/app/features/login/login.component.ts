import { Component, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  passwordType: WritableSignal<'text' | 'password'> = signal('password');
  i = 0;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    private readonly toastr: ToastrService,
    private readonly auth: AuthService
  ) {}

  submit() {
    if (this.loginForm.invalid) {
      if (this.loginForm.get('email')?.hasError('email')) {
        this.toastr.error('Insira um email válido.', 'Erro!');
        return;
      }

      if (this.loginForm.get('password')?.hasError('minlength')) {
        this.toastr.error(
          'A senha precisa ter no minimo 8 caracteres.',
          'Erro!'
        );
        return;
      }

      this.toastr.error('Todos os dados são obrigatórios.', 'Atenção');
      return;
    }

    const email = this.loginForm.get('email')?.value ?? '';
    const password = this.loginForm.get('password')?.value ?? '';

    this.auth.login(email, password);
  }

  changePasswordType() {
    this.i++;
    this.passwordType.set(this.i % 2 == 0 ? 'password' : 'text');
  }
}
