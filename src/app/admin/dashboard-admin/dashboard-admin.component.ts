import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AuthAdminService } from '../services/auth-admin.service';
import { DashboardAdminService } from '../services/dashboard-admin.service';
import { UserProductService } from '../services/user-product.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Operation } from '../models/operation.model';
import { OPERATION } from '../data/operation.data';


@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit, OnChanges {
  arrUserProduct: any;
  newTokenNotExpared: any;

  constructor(
    private router: Router,
    private dashboardAdminService: DashboardAdminService,
    private userProductService: UserProductService,
    public authAdminService : AuthAdminService,
  ) { }

  // @Input() arrUserProduct: any;
  // @Output() onDellProduct = new EventEmitter();
  // @Output() onDelUserWhisProduct = new EventEmitter();
  // @Output() onChoiseForName = new EventEmitter();

  ngOnInit(): void {
    this.getData();
    // console.log( localStorage.getItem('admin'));
    // this.newTokenNotExpared  = localStorage.getItem('admin');
    // this.authAdminService.curentObservableToken.subscribe((data)=>{
    //   // localStorage.getItem('admin');
    //   localStorage.setItem('admin', JSON.stringify(data));
    //   console.log(data);
    //   this.newTokenNotExpared = data;
    // });

    // this.dashboardAdminService.curentObservableExit.subscribe((data)=>{
    //   console.log(data);
    //   this.newTokenNotExpared = data;
    // })
  }

  ngOnChanges(){
    // this.parseJson();
  }

  getData(){
    forkJoin({
      arrUserProduct: this.userProductService.getUserProductDb(),
    }).subscribe(({arrUserProduct})=>{
      this.arrUserProduct = arrUserProduct;
      // console.log(this.arrUserProduct);
    })
  }

  delProduct(event: any, data: any, data_Id: any){
    console.log(event, data, data_Id);
    // this.onDellProduct.emit(data);
    if(data !== undefined){
      this.dashboardAdminService
      .onDellProduct(data)
    }
  }

  delUserWhisProduct(event: any, arr: any){
console.log(event, arr._id);
    // this.onDelUserWhisProduct.emit(arr._id)
    this.dashboardAdminService
      .delUserWhisProduct(arr._id)
      .subscribe((res)=>{
        console.log(res);
        this.arrUserProduct = this.arrUserProduct.filter((c: any)=> c._id !== res._id)
      })
  }

 
  exitControlPage(event: any){
    this.router.navigate(['control-page']);
    localStorage.removeItem('token1');
    localStorage.removeItem('admin');
    this.dashboardAdminService
      .exitControlPage(event)
  }

  chooseName: string = '';

  choiseForName(data: string){
    this.chooseName = data;
    // this.onChoiseForName.emit(data);
    this.dashboardAdminService
    .onChoiseForName(data)
    .subscribe((res)=>{
      console.log(res);
      this.arrUserProduct = res;
      this.parseJson();
    })
    this.chooseName = '';
   
  }

  element: any[] = [];
  result: any[] = [];
  parseJson(){
    // if(this.arrUserProduct !== undefined){
    //   const result = JSON.stringify(this.arrUserProduct)
    //   console.log(JSON.parse(result));
    // }
    for (let i = 0; i < this.arrUserProduct.length; i++) {
      const element = this.arrUserProduct[i].ArrUserWhithProduct;
      // element.shift();
      console.log(element);
      console.log(element.map((t: any) => t.sumPriceItem ? t.sumPriceItem : 0).reduce((acc: any, value: any) => acc + value, 0));
    this.result = [...this.result, element.map((t: any) => t.sumPriceItem ? t.sumPriceItem : 0).reduce((acc: any, value: any) => acc + value, 0)]
    }
    console.log(this.result);
  }


  // operations: Operation[]= OPERATION;
  // profileForm = new FormGroup({
  //   editedDescription: new FormControl('')
  // })

  // selectOperation(operation:any){
  //   this.operations.find((o: Operation)=>{
  //     if(o.selected === true){
  //       return (o.selected = false)
  //     }return (o.selected = false)
  //   });
  //   this.profileForm.setValue({
  //     editedDescription: operation.description
  //   });
  //   this.operations.find((o: Operation)=>{
  //     if(o.id === operation.id){
  //       return (operation.selected = true)
  //     }return (operation.selected = true)
  //   });
  // }

  // margeOperation(operation:Operation){
  //   operation.description = this.profileForm.get('editedDescription')?.value;
  //   delete operation.selected;
  // }

  profileForm = new FormGroup({
    editedDescription: new FormControl('')
  })

  selectOperation(operation:any){
    console.log(operation);
    
    this.arrUserProduct.find((o: any)=>{
      if(o.selected === true){
        return (o.selected = false)
      }return (o.selected = false)
    });
    this.profileForm.setValue({
      editedDescription: JSON.stringify(operation.ArrUserWhithProduct)
      // editedDescription: operation.ArrUserWhithProduct
    });
    this.arrUserProduct.find((o: any)=>{
      if(o.id === operation.id){
        return (operation.selected = true)
      }return (operation.selected = true)
    });
  }

  margeOperation(operation:any){
    operation.ArrUserWhithProduct = JSON.parse(this.profileForm.get('editedDescription')?.value);
    this.dashboardAdminService
      .margeOperation(operation._id, operation.ArrUserWhithProduct)
      .subscribe()
    delete operation.selected;
  }
    


}
