import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';
import { RegService } from '../services/reg.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  name: string = '';
  login: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private regService: RegService,
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  userRegisterClick(){
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password,
    }
    
    if(!this.regService.checkName(user.name)){
      this.flashMessages.show('name not enter',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
    }else if(!this.regService.checkLogin(user.login)){
      this.flashMessages.show('login not enter',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
    }else if(!this.regService.checkEmail(user.email)){
      this.flashMessages.show('email not enter',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
    }else if(!this.regService.checkPassword(user.password)){
      this.flashMessages.show('password not enter',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
    }

    this.authService
      .registerUser(user)
      .subscribe((data:any)=> {
        console.log(data, user);
        if(!data.success){
          this.flashMessages.show(data.msg,{
            cssClass: 'alert-danger',
            timeout : 2000,
          })
          // this.router.navigate([{outlets: {outletUserAuth: 'reg'}}]);
          this.router.navigate(['header/reg']);
        }else{
          this.flashMessages.show(data.msg,{
            cssClass: 'alert-success',
            timeout : 2000,
          })
          // this.router.navigate([{outlets: {outletUserAuth: 'auth'}}]);
          this.router.navigate(['header/auth']);
        }
      })
  }
  
  sendToAuth(){
    // this.router.navigate([{outlets: {outletAdmin: 'auth'}}]);
    this.router.navigate(['header/auth']);
  }

}

