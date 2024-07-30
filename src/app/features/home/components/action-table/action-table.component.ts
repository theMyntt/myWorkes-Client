import {
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
} from '@angular/core';
import { IHomeResponse, IUserResponse } from '../../home.component';

@Component({
  selector: 'action-table',
  templateUrl: './action-table.component.html',
  styleUrls: ['./action-table.component.scss'],
  outputs: ['openDialog'],
})
export class ActionTableComponent {
  @Input({ required: true })
  table!: WritableSignal<IHomeResponse>;

  @Output()
  openDialog = new EventEmitter<IUserResponse>();

  trackById(index: number, item: IUserResponse): string {
    return item.id;
  }

  onOpenDialog(item: IUserResponse): void {
    this.openDialog.emit(item);
  }
}
