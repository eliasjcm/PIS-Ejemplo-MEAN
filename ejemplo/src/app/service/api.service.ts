import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginInfo } from '../loginInfo';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // getLoginInfo(): Observable<HttpResponse<LoginInfo>> {
  //   return this.http.get<LoginInfo>('http://localhost:8080/api/login', {
  //     observe: 'response',
  //   });
  // }
  getUser(username: string, password: string): Observable<HttpResponse<User>> {
    return this.http.get<User>(`./assets/data/user.json`, {
      observe: 'response',
    });
  }
}
