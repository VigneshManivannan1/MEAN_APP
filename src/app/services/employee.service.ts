import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

const baseUrl = `${environment.apiUrl}/users`;

import { Employee } from "../employee/model/employee";


@Injectable({
  providedIn: 'root'
})
export class employeeService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Employee[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  update(id: string, params: any) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
