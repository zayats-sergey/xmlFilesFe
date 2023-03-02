import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminComponent } from './admin/auth-admin/auth-admin.component';
import { ControlPageComponent } from './admin/control-page/control-page.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { RegAdminComponent } from './admin/reg-admin/reg-admin.component';
import { AuthComponent } from './user/auth/auth.component';
import { CartComponent } from './user/cart/cart.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
// import { FooterComponent } from './user/footer/footer.component';
import { HeaderComponent } from './user/header/header.component';
import { HomeComponent } from './user/home/home.component';
import { IsLoggedIn } from './user/isLogged.guard';
import { RegComponent } from './user/reg/reg.component';

import { IsLoggedInAdmin } from './admin/isLoggedAdmin.guard';
import { ExitAboutGuard } from './user/exitLogged.guard';
import { ComingSoonComponent } from './user/coming-soon/coming-soon.component';
import { AvailableComponent } from './user/available/available.component';
import { OrderComponent } from './user/order/order.component';

import { SELECTOPTION } from './user/data/selectOption.data';
import { SelectOption } from './user/models/selectOption.model';
import { PostAcommentComponent } from './user/post-acomment/post-acomment.component';
import { AdvertisingComponent } from './user/advertising/advertising.component';
import { ParalaxComponent } from './user/paralax/paralax.component';
import { DeepParallaxComponent } from './user/deep-parallax/deep-parallax.component';
import { ParallaxShowComponent } from './user/parallax-show/parallax-show.component';
import { SelectPageComponent } from './user/select-page/select-page.component';
import { VisitCardComponent } from './user/visit-card/visit-card.component';

optionSelect: SELECTOPTION;

const routes: Routes = [
  {
    path: 'header', 
    component: HeaderComponent, 
    children: [
      {path:'home', component: HomeComponent},
      {path: 'reg', component: RegComponent},
      {path: 'auth', component: AuthComponent},
      {path: 'dashboard', component: DashboardComponent, canActivate:[IsLoggedIn], canDeactivate: [ExitAboutGuard]},
      {path: 'cart', component: CartComponent},

      // {path: 'selectPage', component: SelectPageComponent},

      {path:'comingSoon', component: ComingSoonComponent},
      {path:'available', component: AvailableComponent},
      {path:'order', component: OrderComponent},
      {path:'postAcomment', component: PostAcommentComponent},
      {path:'advertising', component: AdvertisingComponent},
      {path:'paralaxeffect', component: ParalaxComponent},
      {path:'deepparallax', component: DeepParallaxComponent},
      {path:'parallaxShow', component: ParallaxShowComponent},
      {path:'visitCard', component: VisitCardComponent},
    ]
  },
  {path: '',  redirectTo: 'header', pathMatch: 'full'},
 


  // {path:'home', component: HomeComponent, outlet: "outletUserAuth"},
  // {path: 'reg', component: RegComponent, outlet: "outletUserAuth"},
  // {path: 'auth', component: AuthComponent, outlet: "outletUserAuth"},
  // {path: 'dashboard', component: DashboardComponent, outlet: "outletUserAuth", canActivate:[IsLoggedIn]},
  // {path: 'cart', component: CartComponent, outlet: "outletUserAuth"},

  
  // {path: 'control-page', component: ControlPageComponent, outlet: "outletAdmin" },
  {
    path: 'control-page',
    component: ControlPageComponent,
    children: [
      {path: 'regAdmin', component: RegAdminComponent},
      {path: 'authAdmin', component: AuthAdminComponent},
      {path: 'dashboardAdmin', component: DashboardAdminComponent, canActivate:[IsLoggedInAdmin]},
      // {path: 'dashboardAdmin', component: DashboardAdminComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
