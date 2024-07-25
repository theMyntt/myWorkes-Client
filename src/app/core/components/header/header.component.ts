import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  name: string = '';

  constructor(private readonly auth: AuthService) {
    const { name } = auth.getUser();

    if (name) this.name = name;
  }
}
