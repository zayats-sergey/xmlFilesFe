import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardAdminService {

  constructor(
    public http: HttpClient,
  ) { }

  public dataObservableExit = new BehaviorSubject(false);
  curentObservableExit = this.dataObservableExit.asObservable();

  exitControlPage(event: any){
    console.log(event);
    if(event){
      let data = false;
      this.dataObservableExit.next(data)
    }else if(!event){
      let data = true;
      console.log(data);
      
      this.dataObservableExit.next(data)
    }
  }

  // onDellProduct(data: any): Observable<any>{
  //   console.log(data);
  //   const item = data._id;
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.put<any>(
  //     "http://localhost:3000/account/control-page/" + item, data,
  //     {headers: headers}
  //   )
  // }

  onDellProduct(data: any): Observable<any>{
    console.log(data);
    const item = data._id;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<any>(
      "http://localhost:3000/account/control-page/" + item,
      {headers: headers}
    )
  }

  delUserWhisProduct(data_id: string): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<any>(
      "http://localhost:3000/account/control-page/" + data_id,
      {headers: headers}
    )
  }

  onChoiseForName(data: string): Observable<any>{
    console.log(data);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      "http://localhost:3000/account/control-page/dashboardAdmin", 
      {data},
      {headers: headers}
    )
  }

  margeOperation(item: any, data: any): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<any>(
      "http://localhost:3000/account/control-page/dashboardAdmin/" + item,
      // "account/admin/userproductdb",
      data,
      {headers: headers}
    )
  }

}
