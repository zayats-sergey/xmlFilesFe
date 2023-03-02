import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegService } from './services/reg.service';
import { AuthService } from './services/auth.service';
import { DashboardService } from './services/dashboard.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IsLoggedIn } from './isLogged.guard';

import {MatButtonModule} from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
import { CartProductService } from './services/cart-product.service';
import {MatTableModule} from '@angular/material/table';
import { HomeProductService } from './services/home-product.service';
import {MatInputModule} from '@angular/material/input';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ExitAboutGuard } from './exitLogged.guard';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { OrderComponent } from './order/order.component';
import { AvailableComponent } from './available/available.component';
import { PostAcommentComponent } from './post-acomment/post-acomment.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { ParalaxComponent } from './paralax/paralax.component';
import { DeepParallaxComponent } from './deep-parallax/deep-parallax.component';
import { ParallaxShowComponent } from './parallax-show/parallax-show.component';
import { ParallaxDirective } from '../parallax.directive';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { SelectPageComponent } from './select-page/select-page.component';
import { VisitCardComponent } from './visit-card/visit-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegComponent,
    AuthComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ComingSoonComponent,
    OrderComponent,
    AvailableComponent,
    PostAcommentComponent,
    AdvertisingComponent,
    ParalaxComponent,
    DeepParallaxComponent,
    ParallaxShowComponent,

    ParallaxDirective,
   
    SelectPageComponent,
    VisitCardComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    // BrowserAnimationsModule,
    
    MatButtonModule,
    MatTableModule,
    MatInputModule,

    NgxImageZoomModule,
    
  ],
  exports: [
    // HomeComponent,
    HeaderComponent,
    FooterComponent,
    SelectPageComponent,
    
    // ParallaxDirective
  ],
  providers: [
    RegService,
    AuthService,
    DashboardService,
    IsLoggedIn,
    CartProductService,
    HomeProductService,
    ExitAboutGuard,
    ParallaxDirective
  ]
})
export class UserModule { }
