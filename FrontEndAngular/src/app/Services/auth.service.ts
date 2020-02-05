import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private _router:Router) { }

  user:string;


  postSignIn(data){


    return this.http.post<any>("http://localhost:8015/authenticate",data);

  }

  loggedIn(){
    return !!localStorage.getItem('token')

  }

  getToken(){

    return localStorage.getItem('token')
    
    }

   postSignUp(data){
      data["role"] = {"id" : 2 , "label":"client"};
      return this.http.post("http://localhost:8015/signUp",data);
  
    }

    PostSurvey(data){
      return this.http.post("http://localhost:5000/Survey",data);

    }







}
