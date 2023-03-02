import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCT } from '../data/product.data';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HomeProductService {
   products : Product[] = PRODUCT;

   constructor(
    private http: HttpClient,
  ) { }

  //   getProduct(): Observable<any>{
  //   return of (this.products);
  // }


    postProductsArr(data: any): Observable<any>{
      console.log(data);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      'http://localhost:3000/account/home',
      data,
      {headers: headers},
    )
  }

  getProduct(): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(
      'http://localhost:3000/account/home',
      {headers: headers}
    )
  }

}
