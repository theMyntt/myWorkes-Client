import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly cookieService: CookieService) {}

  getUser() {
    return {
      id: this.cookieService.get('mwk:id'),
      name: this.cookieService.get('mwk:name'),
    };
  }
}
