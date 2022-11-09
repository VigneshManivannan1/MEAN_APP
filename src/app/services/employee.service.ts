import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";

const baseUrl = `${environment.apiUrl}/employee`;

import { Employee } from "../employee/model/employee";


@Injectable({
  providedIn: 'root'
})
export class employeeService {

  constructor(private http: HttpClient) { }
  public listRecords: any;


  getAll() {
    return this.http.get<Employee[]>(`${environment.apiUrl}/employee`);
  }

  getById(id: string) {
    return this.http.get<Employee>(`${environment.apiUrl}/findemployee`);
  }

  create(params: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this.http.post<any>(`${environment.apiUrl}/createEmployee`, params, options);
  }

  update(params: any) {
    return this.http.put<any>(`${environment.apiUrl}/updateEmployee`, params);
  }

  delete(id: string) {
    return this.http.delete<any>(`${environment.apiUrl}/deleteEmployee`, { body: { "id": id } });
  }
}
