import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegAdminService {

  constructor() { }

  checkLogin(login: any){
    if(login === ''){
      return false
    }else{
      return true
    }
  }

  checkPassword(password: any){
    if(password === ''){
      return false
    }else{
      return true
    }
  }

}
