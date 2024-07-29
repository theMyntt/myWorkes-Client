import { Component, signal, WritableSignal } from '@angular/core';
import { HomeService } from '../../apis/home.service';
import { EEmployeer } from '../../types/employeer.type';

export interface IHomeResponse {
  name: string;
  email: string;
  phone: string;
  password: string;
  type: EEmployeer;
  allowedSystems: Array<string>;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  table: WritableSignal<Array<IHomeResponse>> = signal([]);

  tableData: IHomeResponse[] = this.table();
  selectedItem: IHomeResponse | null = null;

  constructor(private readonly service: HomeService) {
    const data$ = service.getAllEmployees(1);
    data$.subscribe((response: Array<IHomeResponse>) =>
      this.table.set(response)
    );
  }

  handleOpenDialog(item: IHomeResponse): void {
    this.selectedItem = item;
  }

  closeDialog(item: IHomeResponse): void {
    this.selectedItem = null;
  }
}
