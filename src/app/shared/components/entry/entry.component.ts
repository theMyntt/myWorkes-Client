import { Component, Input } from '@angular/core';
import { TokenUtil } from '../../utils/token.util';
import { FormControl } from '@angular/forms';

type TEntry = 'text' | 'password';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class EntryComponent {
  @Input({ required: true })
  type: TEntry = 'text';

  @Input()
  label: string = '';

  @Input()
  placeholder: string = '';

  @Input({ required: true })
  control!: FormControl;

  id: string;

  constructor(private readonly token: TokenUtil) {
    this.id = token.generate();
  }
}
