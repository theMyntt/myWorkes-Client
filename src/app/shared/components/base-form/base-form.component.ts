import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-form',
  templateUrl: './base-form.component.html',
  styleUrl: './base-form.component.scss',
})
export class BaseFormComponent {
  @Input({ required: true })
  onSubmit!: () => void;

  @Input()
  title: string = '';

  @Input()
  description: string = '';

  @Input()
  btnText: string = '';
}
