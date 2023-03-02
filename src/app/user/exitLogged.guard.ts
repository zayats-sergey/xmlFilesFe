import { Injectable } from "@angular/core";
import { Router, CanDeactivate } from  '@angular/router';
import { AuthService } from "./services/auth.service";
import {Observable} from "rxjs";
 
export interface ComponentCanDeactivate{
    canDeactivate: () => boolean | Observable<boolean>;
}
 
export class ExitAboutGuard implements CanDeactivate<ComponentCanDeactivate>{
    // constructor (
    //     private authService: AuthService,
    //     private router: Router
    // ){}

    canDeactivate(component: ComponentCanDeactivate) : Observable<boolean> | boolean{
        return component.canDeactivate ? component.canDeactivate() : true;
    }


    
}









