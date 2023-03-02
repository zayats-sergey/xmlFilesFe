import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AuthAdminService } from '../services/auth-admin.service';
import { DashboardAdminService } from '../services/dashboard-admin.service';
import { UserProductService } from '../services/user-product.service';

@Component({
  selector: 'app-control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.css']
})
export class ControlPageComponent implements OnInit {

  arrUserProduct: any;
  newTokenNotExpared: any;

  constructor(
    private userProductService: UserProductService,
    public authAdminService : AuthAdminService,
    public dashboardAdminService: DashboardAdminService,
  ) { }

  ngOnInit(): void {
    // this.getData();
    // this.authAdminService.curentObservableToken.subscribe((data)=>{
    //   console.log(data);
    //     this.newTokenNotExpared = data;

    // });

    // this.dashboardAdminService.curentObservableExit.subscribe((data)=>{
    //   console.log(data);
    //   this.newTokenNotExpared = data;
    // })

  
  }

  // getData(){
  //   forkJoin({
  //     arrUserProduct: this.userProductService.getUserProductDb(),
  //   }).subscribe(({arrUserProduct})=>{
  //     this.arrUserProduct = arrUserProduct;
  //     console.log(this.arrUserProduct);
  //   })
  // }
  
}
