import { Component, signal, WritableSignal } from '@angular/core';
import { HomeService } from '../../apis/home.service';
import { EEmployeer } from '../../types/employeer.type';

export interface IUserResponse {
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

export interface IHomeResponse {
  users: Array<IUserResponse>;
  page: number;
  pages: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  table: WritableSignal<IHomeResponse> = signal({
    users: [],
    page: 0,
    pages: 0,
  });

  tableData: Array<IUserResponse> = this.table().users;
  selectedItem: IUserResponse | null = null;

  constructor(private readonly service: HomeService) {
    const data$ = service.getAllEmployees(1);
    data$.subscribe((response: IHomeResponse) => this.table.set(response));
  }

  handleOpenDialog(item: IUserResponse): void {
    this.selectedItem = item;
  }

  closeDialog(item: IUserResponse): void {
    this.selectedItem = null;
  }
}
