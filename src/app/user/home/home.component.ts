import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PRODUCT } from '../data/product.data';
import { SELECTOPTION } from '../data/selectOption.data';
import { Product } from '../models/product.model';
import { SelectOption } from '../models/selectOption.model';
import { CartProductService } from '../services/cart-product.service';
import { HomeProductService } from '../services/home-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // prodArr : Product[] = PRODUCT;
  
  prodArr : Product[] = [];
  optionSelect: SelectOption[]= SELECTOPTION;
  languageForm = new FormGroup({});

  constructor(
    private cartService: CartProductService,
    private homeProductServise: HomeProductService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getData();
    // this.sendToDb();
    this.languageForm = this.fb.group({
      option: [null]
    }); 
  }

  changeNameOption(){
    console.log(this.languageForm.value.option);
    this.languageForm.value.option
    if(this.languageForm.value.option === 'To order'){
      this.router.navigate(['header/order'])
    }
    if(this.languageForm.value.option === 'Coming soon'){
      this.router.navigate(['header/comingSoon'])
    }
    if(this.languageForm.value.option === 'Is available'){
      this.router.navigate(['header/available'])
    }
    if(this.languageForm.value.option === 'Post a comment'){
      this.router.navigate(['header/postAcomment'])
    }
    if(this.languageForm.value.option === 'Advertising'){
      this.router.navigate(['header/advertising'])
    }
    if(this.languageForm.value.option === 'ParalaxEffect'){
      this.router.navigate(['header/paralaxeffect'])
    }
    if(this.languageForm.value.option === 'DeepParallax'){
      this.router.navigate(['header/deepparallax'])
    }
    if(this.languageForm.value.option === 'ParallaxShow'){
      this.router.navigate(['header/parallaxShow'])
    }
  }

  getData(){
    forkJoin({
      prodArr: this.homeProductServise.getProduct(),
    }).subscribe(({prodArr})=>{
      console.log(prodArr);
      this.prodArr = prodArr;
      this.prodArrChetnoe();
    })
  }

  sendToDb(){
    console.log(this.prodArr);
    this.prodArr.forEach((data: any)=>{
      this.homeProductServise
      .postProductsArr(data)
      .subscribe((res)=>{
        console.log(res);
      })
    })
  }

  sendToCart(prod: any){
    this.cartService
      .addProduct(prod)
      .subscribe((res)=>{
        // console.log(res);
      })
  }

  arr1: any = [];
  arr2: any = [];
  prodArrChetnoe(){
    if(this.prodArr.length){
      for (let i = 0; i < this.prodArr.length; i++) {
        const element = this.prodArr[i];
        let resalt = this.prodArr.findIndex(elem=> i % 2 === 1);
        // console.log(resalt);
        if(resalt === 0){
        this.arr1.push(element)
        }else if (resalt === -1)
        this.arr2.push(element)
      }
    }
    // console.log(this.arr1, this.arr2);
  }

 


}
