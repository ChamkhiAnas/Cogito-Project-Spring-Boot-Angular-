import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './Componenets/sign-in/sign-in.component';
import { SignUpComponent } from './Componenets/sign-up/sign-up.component';
import { SurveyComponent } from './Componenets/survey/survey.component';
import { AuthGuard } from './auth.guard';
import { CheersComponent } from './Componenets/cheers/cheers.component';
import { LandingPageComponent } from './Componenets/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SurveyComponent,
    CheersComponent,
    LandingPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: ()=>{
              return localStorage.getItem("token");
        },
        whitelistedDomains: ["localhost:8015"]
      }
    })


  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
// ,{

//   provide: HTTP_INTERCEPTORS,
//   useClass:TokenInterceptorService,
//   multi:true
// }