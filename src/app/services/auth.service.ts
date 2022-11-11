import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Employee } from "./../employee/model/employee";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public isLoggedIn = false;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>('');
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'   
  });
  const params = new HttpParams()
    .set('username', username)
    .set('password', password);
    return this.http.post<any>(`${environment.apiUrl}/authEmployee`, params, { headers: httpHeaders })
  }

  verifyToken(token:string) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' ,
      'x-access-token':token
  });

    return this.http.post<any>(`${environment.apiUrl}/verifyToken`,'' ,{ headers: httpHeaders })
  }

  getUserDetail(){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  });
    return this.http.get<any>(`${environment.apiUrl}/authEmployee`, { headers: httpHeaders })
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    this.currentUserSubject.next('');
    this.isLoggedIn = false;
  }

  register(value:any){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'     
  });
    const params = new HttpParams()
    .set('username', value.username)
    .set('password', value.password)
    .set('fullname', value.fullName)
    .set('role', value.role);
    return this.http.post<any>(`${environment.apiUrl}/registerEmployee`, params, { headers: httpHeaders })
  }



}
