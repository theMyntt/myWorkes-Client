import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'custom-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input({ required: true })
  label!: string;

  activeDropdown = signal(false);

  updateDropdownState() {
    this.activeDropdown.update((value) => !value);
  }
}
