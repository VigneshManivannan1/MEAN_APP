import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

const baseUrl = `${environment.apiUrl}/employee`;

import { Employee } from "../employee/model/employee";


@Injectable({
  providedIn: 'root'
})
export class employeeService {

  constructor(private http: HttpClient) {}
  public listRecords:any;

  getAll() {
    return this.http.get<Employee[]>(`${environment.apiUrl}/employee`);
  }

  getById(id: string) {
    return this.http.get<Employee>(`${environment.apiUrl}/findemployee`);
  }

  create(params: any) {
    return this.http.post<any>(`${environment.apiUrl}/createEmployee`, params);
  }

  update(id: string, params: any) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
