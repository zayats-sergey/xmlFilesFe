import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthAdminService } from '../services/auth-admin.service';
import { RegAdminService } from '../services/reg-admin.service';

@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.css']
})
export class AuthAdminComponent implements OnInit {

  login: string = '';
  password: string = '';

  constructor(
    public regAdminService: RegAdminService,
    public authAdminService: AuthAdminService,
    public flashMessages: FlashMessagesService,
    public router: Router,

  ) { }

  ngOnInit(): void {
  }

  authAdmin(){
    const admin = {
      login : this.login,
      password: this.password
    }
    if(this.login === ''){
      this.flashMessages.show('login not enter',{
        cssClass: 'alert-danger',
        timeout : 2000,
      });
      return;
    }else if((this.password === '')){
      this.flashMessages.show('password not enter',{
        cssClass: 'alert-danger',
        timeout : 2000,
      });
      return;
    }
    this.authAdminService
      .authAdmin(admin)
      .subscribe((data)=>{
        if(!data.success){
          this.flashMessages.show('Admin не знайдено',{
            cssClass: 'alert-danger',
            timeout : 2000,
          });
        }else{
          this.flashMessages.show('Admin зареєстрований у BD успішно!!!!',{
            cssClass: 'alert-success',
            timeout : 2000,
          });
          this.router.navigate(['control-page/dashboardAdmin']);
          this.authAdminService.storeAdmin(data.token, data.admin);
          console.log(data.token, data.admin);
        }
      })
    return;  
  }




}
