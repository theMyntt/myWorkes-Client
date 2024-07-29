import {
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
} from '@angular/core';
import { IHomeResponse } from '../../home.component';

@Component({
  selector: 'action-table',
  templateUrl: './action-table.component.html',
  styleUrls: ['./action-table.component.scss'],
  outputs: ['openDialog'],
})
export class ActionTableComponent {
  @Input({ required: true })
  table!: WritableSignal<Array<IHomeResponse>>;

  @Output()
  openDialog = new EventEmitter<IHomeResponse>();

  trackById(index: number, item: IHomeResponse): string {
    return item.id;
  }

  onOpenDialog(item: IHomeResponse): void {
    this.openDialog.emit(item);
  }
}
