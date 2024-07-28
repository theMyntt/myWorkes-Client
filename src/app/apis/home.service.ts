import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DEVENV } from '../core/env/enviroment.dev';
import { IHomeResponse } from '../features/home/home.component';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private readonly http: HttpClient) {}

  getAllEmployees(page: number) {
    return this.http.get<Array<IHomeResponse>>(
      `${DEVENV.API_URL}/api/employee/get?limit=10&page=${page}`
    );
  }
}
