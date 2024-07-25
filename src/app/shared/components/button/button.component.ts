import { Component, Input } from '@angular/core';

type TButton = 'button' | 'submit';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  type: TButton = 'button';

  @Input()
  text: string = '';
}
