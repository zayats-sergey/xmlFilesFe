import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { tokenNotExpired } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  constructor(
    public http: HttpClient,

  ) { }


  registerAdmin(admin: any): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      "http://localhost:3000/account/regAdmin",
      // "account/regAdmin",
      admin,
      {headers: headers}
    )
  }

  authAdmin(admin: any): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      "http://localhost:3000/account/authAdmin",
      // "account/authAdmin",
      admin,
      {headers: headers}
    )
  }

  token1: any;
  admin: any;
  storeAdmin(token: any, admin: any){
    localStorage.setItem('token1', token);
    localStorage.setItem('admin', JSON.stringify(admin));
    this.admin = admin;
    this.token1 = token;
    // this.isLoggedInAdmin();
  }
  

  
  isLoggedIn() {
    // console.log(tokenNotExpired('token1'));
    return tokenNotExpired('token1');
  }

  // public dataObservableToken = new BehaviorSubject('');
  // curentObservableToken = this.dataObservableToken.asObservable();

  // tokenNotExpired:string = '';
  // isLoggedInAdmin():Observable<any> {
  //   let adminData = localStorage.getItem('admin');
  //   console.log(adminData);
  //     this.tokenNotExpired = adminData !== null ? JSON.parse(adminData) : null;
  //     console.log(this.tokenNotExpired);
  //   this.dataObservableToken.next(this.tokenNotExpired);
  //   return of(this.tokenNotExpired);
  // }


  // logoutAdmin(data: any): Observable<any>{
  //   // console.log(data);
  //   this.token = null;
  //   this.admin = null;
  //   localStorage.clear();
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post<any>(
  //     "http://localhost:3000/account/!!!!",
  //     data,
  //     {headers: headers}
  //   )
  // }

}
