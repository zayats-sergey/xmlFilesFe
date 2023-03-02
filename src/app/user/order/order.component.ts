import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PRODUCT } from '../data/product.data';
import { Product, ProductTypeCode } from '../models/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

 productType: ProductTypeCode = true ;
 products : Product[] = PRODUCT;

  constructor() { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    editedDescription: new FormControl('')
  })

  selectedProductType(product: any){
    // console.log(product);
    this.products.find((p)=>{
      if(p.isSelected === true){
        return p.isSelected = false
      }return p.isSelected = false
    });
    this.profileForm.setValue({
      editedDescription: product.nameProduct
    });
    this.products.find((p)=>{
      // console.log(p);
      if(p.nameProduct === product.nameProduct){
        return (product.isSelected = true)
      }return product.isSelected = true
    });
  }

  mergeProduct(product: any){
    product.nameProduct = this.profileForm.get('editedDescription')?.value
    console.log(product.nameProduct );
    delete product.isSelected
  }


}
