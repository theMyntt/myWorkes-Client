import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DEVENV } from '../env/enviroment.dev';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly cookieService: CookieService,
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly toastr: ToastrService
  ) {}

  login(email: string, password: string) {
    this.http
      .post(`${DEVENV.API_URL}/api/employee/login`, {
        email,
        password,
      })
      .pipe(
        catchError((err) => {
          if (err.status == 404) {
            this.toastr.error('Usuário não encontrado', 'Erro!');
          }
          if (err.status == 500) {
            this.toastr.error(
              'Estamos com falha em nosso sistema, tente novamente mais tarde',
              'Erro!'
            );
          }

          throw new err();
        })
      )
      .subscribe((response: any) => {
        this.cookieService.set('mwk:name', response.name);
        this.cookieService.set('mwk:id', response.id);

        this.router.navigate(['/home']);
      });
  }

  logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }

  getUser() {
    return {
      id: this.cookieService.get('mwk:id'),
      name: this.cookieService.get('mwk:name'),
    };
  }
}
