import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthAdminService } from '../services/auth-admin.service';
import { RegAdminService } from '../services/reg-admin.service';

@Component({
  selector: 'app-reg-admin',
  templateUrl: './reg-admin.component.html',
  styleUrls: ['./reg-admin.component.css']
})
export class RegAdminComponent implements OnInit {

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

  adminRegisterClick(){
    const admin = {
      login : this.login,
      password: this.password
    }
      
    if(!this.regAdminService.checkLogin(admin.login)){
      this.flashMessages.show('login not enter',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
    }else if(!this.regAdminService.checkPassword(admin.password)){
      this.flashMessages.show('password not enter',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
    }

    this.authAdminService
      .registerAdmin(admin)
      .subscribe((data)=>{
        if(!data.success){
          this.flashMessages.show(data.msg, {
            cssClass: 'alert-danger',
            timeout : 2000,
          });
          this.router.navigate(['control-page/regAdmin']);
        }else{
          this.flashMessages.show(data.msg, {
            cssClass: 'alert-succes',
            timeout : 2000,
          });
          this.router.navigate(['control-page/authAdmin']);
        }
      })


  }


  sendToAuth(){
    this.router.navigate(['control-page/authAdmin']);
  }

}
