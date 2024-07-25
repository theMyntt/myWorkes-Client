import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly cookieService: CookieService,
    private readonly router: Router
  ) {}

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
