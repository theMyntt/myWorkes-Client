import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IHomeResponse, IUserResponse } from '../../home.component';
import { EEmployeer } from '../../../../types/employeer.type';

@Component({
  selector: 'action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.scss'],
})
export class ActionDialogComponent implements OnChanges {
  @Input({ required: true })
  info!: IUserResponse;

  @Output()
  closeDialog = new EventEmitter<IUserResponse>();

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    phone: new FormControl('', [Validators.required]),
    type: new FormControl<EEmployeer>(0, [Validators.required]),
    allowedSystems: new FormControl(<string[]>[], [Validators.required]),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['info'] && this.info) {
      this.userForm.patchValue({
        allowedSystems: this.info.allowedSystems,
        email: this.info.email,
        password: this.info.password,
        name: this.info.name,
        phone: this.info.phone,
        type: this.info.type,
      });
    }
  }

  close(): void {
    this.closeDialog.emit({
      allowedSystems: <string[]>[],
      createdAt: new Date(),
      email: '',
      id: '',
      name: '',
      password: '',
      phone: '',
      type: EEmployeer.employeer,
      updatedAt: new Date(),
    });
  }
}
