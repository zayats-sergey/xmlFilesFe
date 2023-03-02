import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
    private http: HttpClient,
  ) { }

  // public dataObservable = new BehaviorSubject('');
  // curentObservable = this.dataObservable.asObservable();

  // dataCode: any;
  // searchDataS(data: any):Observable<any>{
  //     this.dataCode = data;
  //     console.log(data);
      
  //     this.dataObservable.next(this.dataCode);
  //     return of(this.dataCode)
  // }

  // public dataObservable = new BehaviorSubject('');
  // curentObservable = this.dataObservable.asObservable();

  // dataCode: any;
  // searchDataS(data: any):Observable<any>{
  //     this.dataCode = data;
  //     console.log(data);
      
  //     this.dataObservable.next(this.dataCode);
  //     return of(this.dataCode)
  // }

  searchDataS(data: any): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(
      "http://localhost:3000/account/header/" + data,
      // data,
      {headers: headers}
    )
  }

}
