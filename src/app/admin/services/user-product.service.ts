import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProductService {

  constructor(
    private http: HttpClient,

  ) { }

  getUserProductDb(): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(
      "http://localhost:3000/account/admin/userproductdb",
      // "account/admin/userproductdb",
      {headers: headers}
    )
  }


}
