// import {HttpInterceptor} from '@angular/common/http';
// import {AuthService} from '../app/Services/auth.service' 
// import {Injectable,Injector} from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })
// export class TokenInterceptorService implements HttpInterceptor {

//   constructor(private AuthService:AuthService ,private injector:Injector) { }
  
//   intercept(req,next){
//     let authService = this.injector.get(AuthService)
//     let tokenizedReq=req.clone({
//           setHeaders:{
//             Authorization: `Bearer ${authService.getToken()}`  
//           }
//     })
//     return  next.handle(tokenizedReq)
//     }
    

// }
