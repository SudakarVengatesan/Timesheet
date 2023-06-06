import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

signin(username: string, password: string) {
const headers= new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(`https://localhost:44396/Login?Username=${username}&Password=${password}`,headers).pipe(map((resp: any) => resp.json()),
    catchError(error => this.throwError(error))
  )
;
  }
  throwError(error: any): any {
    throw new Error('Method not implemented.');
  }
}
