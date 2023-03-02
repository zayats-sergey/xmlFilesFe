import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';
import { CartProductService } from '../services/cart-product.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  returnProductsArr: any[] = [];

  constructor(
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    public cartProductService: CartProductService,
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getTotalCostEachSumPriceItem();
    this.getStoreUser();
  }
 
  // Не Удалять Функцию
  // logoutUser(){
  //   this.authService.logout();
  //   this.flashMessages.show('Вы вышли из учетной записи',{
  //     cssClass: 'alert-warning',
  //     timeout : 2000,
  //   });
  //   this.router.navigate([{outlets: {outletUserAuth: 'auth'}}]);
  //   return false;
  // }

  user: any;
  data: any[] = [];
  getStoreUser(){
      const wert = localStorage.getItem('user');
      this.user = wert !== null ? JSON.parse(wert) : null;
      console.log(this.user);
      if(this.returnProductsArr === null){
        this.data = [this.user]
      }else{
        this.data = [this.user, ...this.returnProductsArr];
      }
      console.log(this.data);
  }

  logoutUser(){
    const selected = false;
    this.authService
      .logout(this.data, selected)
      .subscribe((res)=>{
        console.log(res);
      });
    this.flashMessages.show('Вы вышли из учетной записи, и отправили массив в базу данных',{
      cssClass: 'alert-warning',
      timeout : 2000,
    });

    // this.authService.isLoggedIn().subscribe((res)=>{
    //   res = true;
    //   console.log(res);
      
    // })
    // this.router.navigate([{outlets: {outletUserAuth: 'home'}}]);
    this.router.navigate(['header/home']);
    this.cartProductService.logoutUser();
    return false;
  }


  getProduct(){
    let newproductsArr = localStorage.getItem('product');
      this.returnProductsArr = newproductsArr !== null ? JSON.parse(newproductsArr) : null;
    console.log(this.returnProductsArr);
  }

  displayedColumns: string[] = ['number', 'nameProduct', 'priceOne', 'increment','numberItem', 'decrement','sumPriceItem','dellButton'];
 
  dellProduct(data: any){
    // console.log(data);
    this.cartProductService
    .dellProduct(data)
    .subscribe((res)=>{
      // console.log(res);
      this.returnProductsArr = res;
      this.getTotalCostEachSumPriceItem();
    })
  }


  getTotalCostEachSumPriceItem(){
    if(this.returnProductsArr !== null){
      this.returnProductsArr.forEach((el)=>{
        el.sumPriceItem = el.priceOne * el.numberItem;
        el.nameProduct = el.nameProduct.toUpperCase();
      })
    }
    // console.log(this.returnProductsArr);
    return this.returnProductsArr
  }

  getTotalCostAllSumPriceItem(){
    if(this.returnProductsArr !== null){
    return this.returnProductsArr.map(t => t.sumPriceItem).reduce((acc, value) => acc + value, 0);
  }
}

  increment(data: any){
    this.returnProductsArr = this.returnProductsArr.map((c)=> c.nameProduct === data ? {...c, numberItem : (c.numberItem + 1)}: c);
    localStorage.setItem('product', JSON.stringify(this.returnProductsArr));

    this.getTotalCostEachSumPriceItem();
    this.getTotalCostAllSumPriceItem();
    this.cartProductService
      .increment()
    // console.log( this.returnProductsArr);
  }

  decrement(data: any){
    this.returnProductsArr = this.returnProductsArr.map((c)=> c.nameProduct === data && c.numberItem > 0 ? {...c, numberItem : (c.numberItem - 1)}: c);
    localStorage.setItem('product', JSON.stringify(this.returnProductsArr));

    this.getTotalCostEachSumPriceItem();
    this.getTotalCostAllSumPriceItem();

    this.cartProductService
      .decrement()
    // console.log( this.returnProductsArr);
  }

  


}
