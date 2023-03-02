import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProductService } from '../services/cart-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  returnProductsArr: any[] = [];
  constructor(
    public cartProductService: CartProductService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getTotalCostEachSumPriceItem();
  }

  getProduct(){
    let newproductsArr = localStorage.getItem('product');
      this.returnProductsArr = newproductsArr !== null ? JSON.parse(newproductsArr) : null;
    console.log(this.returnProductsArr);
  }

  displayedColumns: string[] = ['number', 'nameProduct', 'priceOne', 'increment','numberItem', 'decrement','sumPriceItem','dellButton'];
 
  dellProduct(data: any){
    console.log(data);
    this.cartProductService
    .dellProduct(data)
    .subscribe((res)=>{
      console.log(res);
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

  sendToDashBoard(){
    this.router.navigate(['header/auth']);
  }

}
