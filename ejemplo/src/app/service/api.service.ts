import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginInfo } from '../loginInfo';
import { Observable } from 'rxjs';
import { User } from '../User';
import { Nullable } from '../types';

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
    return this.http.get<User>(
      `http://localhost:9000/api/user/login?username=${username}&password=${password}`,
      {
        observe: 'response',
      }
    );
  }

  // createUser(user: User): Observable<HttpResponse<User>> {
  //   return this.http.post<User>(`http://localhost:9000/api/user/login?username=admi23&password=0`, user, {
  //     observe: 'response',
  //   });
  // }
}
