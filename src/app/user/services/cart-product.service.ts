import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {

  constructor() { }

  productsArr: any[] = [];
  parseOldArr: any[] = [];
  returnProductsArr:any[] = [];

  getProduct(){
    let Arr1 = localStorage.getItem('product');
    this.returnProductsArr = Arr1 !== null ? JSON.parse(Arr1) : null;
    // console.log(this.returnProductsArr);
    return this.returnProductsArr;
  }

  public dataObservableAdd = new BehaviorSubject(this.getProduct());
  curentObservableAdd = this.dataObservableAdd.asObservable();

  addProduct(prod: any): Observable<any>{
    console.log(prod);
    let oldArr = localStorage.getItem('product'); 
    if(oldArr === null){
      this.productsArr = [ prod];
    }else{
      this.parseOldArr = oldArr !== null ? JSON.parse(oldArr) : null;
    }
   
    // this.productsArr = [ prod];
    console.log(this.parseOldArr);
    console.log(this.productsArr);
    if(this.parseOldArr.length === 0){
      this.productsArr = [...this.parseOldArr, prod];
      console.log(1);
    }
    else if(this.parseOldArr.find((c: any)=> c.nameProduct.toUpperCase() === prod.nameProduct.toUpperCase())){
      this.productsArr = this.parseOldArr.map((c)=> c.nameProduct.toUpperCase() === prod.nameProduct.toUpperCase() ? {...c, numberItem : c.numberItem + 1} : c);
      console.log(2);
    }
    else if(this.parseOldArr.find((c: any)=> c.nameProduct !== prod.nameProduct)){
      this.productsArr = [...this.parseOldArr, prod];
      console.log(3);
    }
    console.log(this.productsArr);
    
    localStorage.setItem('product', JSON.stringify(this.productsArr));
    let newproductsArr = localStorage.getItem('product');
    this.returnProductsArr = newproductsArr !== null ? JSON.parse(newproductsArr) : null;
    console.log(this.returnProductsArr);

    this.dataObservableAdd.next(this.returnProductsArr);
    return of (this.returnProductsArr);
  }

  dellProduct(data: any):Observable<any>{
    let oldArr = localStorage.getItem('product'); 
    this.parseOldArr = oldArr !== null ? JSON.parse(oldArr) : null;
    this.returnProductsArr = this.parseOldArr.filter((c)=> c.nameProduct.toUpperCase() !== data)
    // console.log(this.returnProductsArr);
    
    localStorage.setItem('product', JSON.stringify(this.returnProductsArr));
    let newproductsArr = localStorage.getItem('product');
    this.returnProductsArr = newproductsArr !== null ? JSON.parse(newproductsArr) : null;
    console.log(this.returnProductsArr);

    this.dataObservableAdd.next(this.returnProductsArr);
  return of (this.returnProductsArr);
  }


  increment(){
    let oldArr = localStorage.getItem('product'); 
    this.returnProductsArr = oldArr !== null ? JSON.parse(oldArr) : null;
    // console.log(this.returnProductsArr);
    this.dataObservableAdd.next(this.returnProductsArr);
  }

  decrement(){
    let oldArr = localStorage.getItem('product'); 
    this.returnProductsArr = oldArr !== null ? JSON.parse(oldArr) : null;
    // console.log(this.returnProductsArr);
    this.dataObservableAdd.next(this.returnProductsArr);
  }

  logoutUser(){
    let oldArr = localStorage.getItem('product'); 
    this.returnProductsArr = oldArr !== null ? JSON.parse(oldArr) : null;
    this.returnProductsArr = [];
    console.log(this.returnProductsArr);
    this.dataObservableAdd.next(this.returnProductsArr);
  }






}
