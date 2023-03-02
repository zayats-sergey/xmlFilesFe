import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPageComponent } from './control-page/control-page.component';
import { UserProductDbComponent } from './user-product-db/user-product-db.component';
import { ProductDbComponent } from './product-db/product-db.component';
import { UserDbComponent } from './user-db/user-db.component';
import { UserProductService } from './services/user-product.service';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RegAdminComponent } from './reg-admin/reg-admin.component';
import { AuthAdminComponent } from './auth-admin/auth-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthAdminService } from './services/auth-admin.service';
import { RegAdminService } from './services/reg-admin.service';
import { DashboardAdminService } from './services/dashboard-admin.service';
import { IsLoggedInAdmin } from './isLoggedAdmin.guard';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    ControlPageComponent,
    UserProductDbComponent,
    ProductDbComponent,
    UserDbComponent,
    RegAdminComponent,
    AuthAdminComponent,
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    FlashMessagesModule.forRoot(),
    MatInputModule,
  ],
  providers: [
    UserProductService,
    AuthAdminService,
    UserProductService,
    RegAdminService,
    DashboardAdminService,
    IsLoggedInAdmin,
  ],
  exports: [
    ControlPageComponent,
  ]
})
export class AdminModule { }
