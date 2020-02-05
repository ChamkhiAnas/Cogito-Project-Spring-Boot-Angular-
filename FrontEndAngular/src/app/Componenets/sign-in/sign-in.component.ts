import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  check:boolean=false;
  user:string;


  SingIn = new FormGroup({

    username:new FormControl("",[Validators.required,Validators.minLength(3)]),
    password:new FormControl("",Validators.required),
    // cPassword:new FormControl("",Validators.required),
  })


  constructor(private authService:AuthService,private _router:Router) { }

  ngOnInit() {
  }

  onSubmit(){

    console.log(this.SingIn.value)
    this.authService.postSignIn(this.SingIn.value)
    .subscribe(
      res=>{
      console.log(res)
      console.log(res.jwt)
      localStorage.setItem('token',res.jwt)






      this._router.navigate(['Survey'])
      this.user=(this.SingIn.value).username
      console.log(this.user)
      this.authService.user=this.user;
      
    }
    );
    }

  
  



}
