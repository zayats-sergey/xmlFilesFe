import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
// import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';
// import { IsLoggedIn } from './user/isLogged.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { ParallaxDirective } from './parallax.directive';
import { NgxImageZoomModule } from 'ngx-image-zoom';
// import { AuthService } from './user/services/auth.service';
// import { IsLoggedInAdmin } from './admin/isLoggedAdmin.guard';


@NgModule({
  declarations: [
    AppComponent,
    // ParallaxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminModule,

    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: () => {
    //       return localStorage.getItem('access_token');
    //     },
    //   }
    // }),

    // NgxImageZoomModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
