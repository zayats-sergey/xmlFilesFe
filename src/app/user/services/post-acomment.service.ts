import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostAcommentService {

  constructor(
    private http: HttpClient,
  ) { }

  addPost(postArr: any): Observable<any>{
    console.log(postArr);
    const data = {postArr}
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      "http://localhost:3000/account/postAcomment",
      data,
      {headers: headers}
    )
  }

  getAllPosts(): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(
      "http://localhost:3000/account/postAcomment",
      {headers: headers}
    )
  }




}
