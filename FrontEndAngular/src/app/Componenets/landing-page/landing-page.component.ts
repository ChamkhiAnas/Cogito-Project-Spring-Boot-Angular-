import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

 


  constructor(){}
     
  ngOnInit() { 

    setInterval( () => {  
      this.tickTick()
    },5000);

    setInterval( () => {  
      this.ChTexte()
    },3000);



}
index = 0;
textIndex=0;




tickTick(){
    if(this.index >= 2){
      this.index=0
     }
     else {
       this.index=this.index+1
     }
    }

ChTexte(){

  if(this.textIndex >= 3){
    this.textIndex=0
   }
   else {
     this.textIndex=this.textIndex+1
   }

  }

  

}
