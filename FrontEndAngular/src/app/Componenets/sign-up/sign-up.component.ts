import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  SingUp = new FormGroup({

    userName:new FormControl("",[Validators.required,Validators.minLength(3)]),
    password:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    cPassword:new FormControl("",Validators.required),

  })

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  
  
  onSubmit(){
    
    this.authService.postSignUp(this.SingUp.value)
      .subscribe(response=>{
        console.log(response)
      })
      this.router.navigate(['login'])

  }

 





  }




