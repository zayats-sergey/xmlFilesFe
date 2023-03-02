import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AuthService } from './user/services/auth.service';
import { HeaderService } from './user/services/header.service';
import { filter, pairwise } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularApp';
  dataCode: any;
  constructor(
    public authService: AuthService,
    public headerService: HeaderService,
    public router: Router
  ){}
  
    // ВАЖНО!!!!
  // ngOnInit(): void {
  //   this.router.events
  //     .pipe(filter((e:any)=> e instanceof RoutesRecognized), pairwise())
  //     .subscribe((e: any)=>{
  //       console.log(e);
  //       this.dataCode = e[1].urlAfterRedirects;
  //       console.log(e[1].urlAfterRedirects);
  //       console.log(this.dataCode);
  //     })
  // }

  ngOnInit(): void {
    // this.getData1();
  }


//  getData1(){
//   this.headerService.curentObservable.subscribe((data)=>{
//     this.dataCode = data;
//     console.log(this.dataCode);
//    })
//   }

// myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
// myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";

// myThumbnail = "/assets/81Gok22YbYL._AC_UL1500_.jpg";
// myFullresImage = "/assets/81Gok22YbYL._AC_UL1500_.jpg";
 
}
