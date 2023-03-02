import { Injectable } from "@angular/core";
import { Router, CanActivate } from  '@angular/router';
import { AuthAdminService } from "./services/auth-admin.service";

@Injectable(
    {providedIn: 'root'}
)
 export class IsLoggedInAdmin implements CanActivate{
    constructor (
        private authAdminService: AuthAdminService,
        private router: Router
    ){}

     canActivate(){
        if(this.authAdminService.isLoggedIn()){
            return true;
        }else{
           this.router.navigate(['control-page/regAdmin']);
           return false;
        }
    }

 }