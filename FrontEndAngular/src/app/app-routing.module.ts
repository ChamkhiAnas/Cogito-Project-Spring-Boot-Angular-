import { LandingPageComponent } from './Componenets/landing-page/landing-page.component';
import { AuthGuard } from './auth.guard';
import { SurveyComponent } from './Componenets/survey/survey.component';
import { SignUpComponent } from './Componenets/sign-up/sign-up.component';
import { SignInComponent } from '../app/Componenets/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheersComponent } from './Componenets/cheers/cheers.component';


const routes: Routes = [

  {
      path: '',
      redirectTo: '/landing',
      pathMatch:'full'
  },
  {
    path: 'login',
    component:SignInComponent,
  },
  {
    path: 'signUp',
    component:SignUpComponent,
  },
  {
    path: 'cheers',
    component:CheersComponent,
  },
  
  {

    path:'landing',
    component:LandingPageComponent

  },
  {
    path: 'Survey',
    component:SurveyComponent,
    canActivate:[AuthGuard]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
