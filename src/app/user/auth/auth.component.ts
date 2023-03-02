import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  name: string = '';
  login: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  authUser(){
    const user = {
      login: this.login,
      password: this.password,
    }

    if(user.login === ''){
      this.flashMessages.show('login not enter',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
      return;
    }
    if(user.password === ''){
      this.flashMessages.show('password not enter',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
      return;
    }

    this.authService
      .authviceUser(user)
      .subscribe((data)=>{
        if(!data.success){
          this.flashMessages.show('user not autorisation',{
            cssClass: 'alert-danger',
            timeout : 2000,
          })
      }else{
        this.flashMessages.show('user autorisation success!!!!',{
          cssClass: 'alert-success',
          timeout : 2000,
        })
        // this.router.navigate([{outlets: {outletUserAuth: 'dashboard'}}]);
        // this.authService.isLoggedIn().subscribe((res)=>{
        //   // res = true;
        // })
        this.router.navigate(['header/dashboard']);
      this.authService.storeUser(data.user, data.token);
      };
    })
    return

  }

  

}
