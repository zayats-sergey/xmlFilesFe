import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartProductService } from '../services/cart-product.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  returnProductsArr: any[] = [];
  constructor(
    public authService: AuthService,
    public cartService: CartProductService,
    public router: Router,
    public headerService: HeaderService,

  ) { }

  ngOnInit(): void {
    this.getNumInCart();
  }
  
  numberItemSum: any = 0;
  getNumInCart(){
    this.cartService.curentObservableAdd.subscribe((data)=>{
      if(data !== null && data !== undefined ){
        console.log(data);
        this.numberItemSum = data.map(t => t.numberItem).reduce((acc, value) => acc + value, 0);
        };
      }); 
    }


    // dataCode : any;
    // searchData(data: any){
    //   console.log(data);
    //   if(data === '44'){
    //     this.dataCode = data;
    //     this.headerService
    //     .searchDataS(this.dataCode)
    //     .subscribe((res)=>{
    //       console.log(res);
    //     })
    //     // this.router.navigate([{outlets: {outletAdmin: 'control-page'}}]);
    //     // this.router.navigate(['control-page']);
    //   }
    //   this.dataCode = '';
    // }

    dataCode : any;
    adminLogin: string = '';
    searchData(data: any){
      this.dataCode = data;
        this.headerService
        .searchDataS(data)
        .subscribe((res)=>{
          console.log(res);
          if(res !== null){
            this.adminLogin = res.login;
          }
        })
    }

    searchDataNull(){
      this.dataCode = '';
      console.log(this.dataCode);
      
    }

    // getAdminBase(){
    //   this.headerService
    //     .getAdminBase()
    //     .subscribe((res)=>{
    //       console.log(res);
    //     })
    // }


  
}


 





