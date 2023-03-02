import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { tokenNotExpired,} from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  registerUser(user: any): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      "http://localhost:3000/account/reg",
      // "account/reg",
      user,
      {headers: headers}
    )
  }

  authviceUser(user: any): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      "http://localhost:3000/account/auth",
      // "account/auth",
      user,
      {headers: headers}
    )
  }

  token: any;
  user: any;
  storeUser(user: any, token: any){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.token = token;
  }

  // Не Удалять Функцию!
  // logout(){
  //   this.token = null;
  //   this.user = null;
  //   localStorage.clear();
  // }

  logout(ArrUserWhithProduct: any, selected: boolean): Observable<any>{
    const data  = {ArrUserWhithProduct,selected}
    console.log(data);
    this.token = null;
    this.user = null;
    localStorage.clear();
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      "http://localhost:3000/account/userproductBase",
      // "account/userproductBase",
      data,
      {headers: headers}
    )
  }

  isLoggedIn() {
    // console.log( tokenNotExpired());
    return tokenNotExpired();
  }

  // tokenNotExpired: boolean = false;
  // isLoggedIn():Observable<any> {
  //   if(this.tokenNotExpired === false){
  //     this.tokenNotExpired = true;
  //   }
  //   console.log( this.tokenNotExpired);
  //   return of(this.tokenNotExpired);
  // }

 
  
}
