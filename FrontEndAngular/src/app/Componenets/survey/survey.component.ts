import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {NgForm} from '@angular/forms';
import { AuthService } from './../../Services/auth.service';
import { isString } from 'util';





@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

 
  prefVeggies=[];
  prefFruits=[];
  ingreds=[];
  tOfDiet=[];
  cuisinType=[];
  DishTyp=[];
  MealTyp=[];
  eatMeat=[];
  Ndisease=[];
  pActiv=[];
  exercisesPWeek=[];
  bodyF=[];
  addInfos=[];

  objfinal=[]

  bodyValue:number;
  numberOfIng:number;
  numberOfexercices:number;
  meatValue:boolean;
  pValue:boolean;



  prefVegies = new FormGroup({

    // carrots:new FormControl(),
    // greenBeans:new FormControl(),
    brocoli:new  FormControl(),
    zuchhini: new  FormControl(),
    cucumber:new FormControl(),
    carrots:new FormControl(),
    greenBeans:new FormControl(),    

  })

  
  prefFruit = new FormGroup({

    bananas:new FormControl(),
    apples:new FormControl(),
    kiwi:new FormControl(),
    orange:new FormControl(),
    peaches:new FormControl(),

  })

  ingred = new FormGroup({

    ing:new FormControl(),
 

  })

  prefDie = new FormGroup({
    highProtein:new FormControl(),
    highFiber:new FormControl(),
    lowFat:new FormControl(),
    lowCarb:new FormControl(),
    lowSodium:new FormControl(),


  })


  prefCuisineTyp = new FormGroup({
    french:new FormControl(),
    italian:new FormControl(),
    mexican:new FormControl(),
    nordic:new FormControl(),
    mediterranean:new FormControl(),
 
  })

  prefDishTyp = new FormGroup({

    bread:new FormControl(),
    soup:new FormControl(),
    drinks:new FormControl(),
    salad:new FormControl(),
    sandwiches:new FormControl(),

  })

  mainMealTyp = new FormGroup({
    meal:new FormControl(),


  })

  eatMea=new FormGroup({
    meat:new FormControl(),

  })

  disease=new FormGroup({

    alcohol:new FormControl(),
    diabets:new FormControl(),
    gluten:new FormControl(),
    kidney:new FormControl(),
    pork:new FormControl(),
    
  })

  physicallyActiv=new FormGroup({

    pActi:new FormControl(),

  })

  exercisesPeerWeekFre=new FormGroup({

    exercice:new FormControl(),
 

  })

  bodyFa=new FormGroup({

    bodyFat:new FormControl(),

  })

  additionalInfo=new FormGroup({

    age:new FormControl(),
    height:new FormControl(),
    weight:new FormControl(),
    Dweight:new FormControl(),

  })





  user=this.authService.user;
  indexOf:number=1;
  value:number=20;


  constructor(private authService:AuthService) { }

  ngOnInit() {
  }


  next(){

    this.indexOf=this.indexOf+1;
    if(this.indexOf >13){
      this.indexOf=1;
    }


  }

  previous(){

    this.indexOf=this.indexOf-1;
    if(this.indexOf<1){
      this.indexOf=1;
    }
  }

  Veggies(){
  
 this.prefVeggies=[];
 this.objfinal.splice(0,1);

console.log("hada tableau"+this.prefVeggies)
console.log("hada tableau dyal objetfinal"+this.objfinal)


  // console.log(this.prefVegies.value);
  this.prefVeggies.push(this.prefVegies.value)

  let keys = Object.keys(this.prefVeggies[0]);

  for(let i = 0 ;i <= keys.length;i++){
     if(this.prefVeggies[0][keys[i]] == null ||this.prefVeggies[0][keys[i]] == false){
       delete this.prefVeggies[0][keys[i]];
     } 
  }

  let keysF = Object.keys(this.prefVeggies[0]);

  console.log(this.prefVeggies)
  this.prefVeggies=keysF
  console.log(this.prefVeggies)
  // this.objfinal()
  // this.objfinal.push(this.prefVeggies)
  this.objfinal.splice(0, 0, this.prefVeggies);

  console.log("objet finale est :"+this.objfinal)
  console.log("tableau finale est :"+this.prefVeggies)



}


Fruits(){

  this.prefFruits=[];
  this.objfinal.splice(1,1);


  console.log(this.prefFruit.value);
  this.prefFruits.push(this.prefFruit.value)


  let keys = Object.keys(this.prefFruits[0]);

  for(let i = 0 ;i <= keys.length;i++){
     if(this.prefFruits[0][keys[i]] == null ||this.prefFruits[0][keys[i]] == false){
       delete this.prefFruits[0][keys[i]];
     } 
  }
  let keysF = Object.keys(this.prefFruits[0]);
  this.prefFruits=keysF
  console.log(this.prefFruits)
  // this.objfinal.push(this.prefFruits)
  this.objfinal.splice(1, 0, this.prefFruits);

  console.log("objet finale est :"+this.objfinal)


}





Ningreds(){

  this.ingreds=[];
  this.objfinal.splice(2,1);


  console.log(this.ingred.value);
  this.ingreds.push(this.ingred.value)


  let keys = Object.keys(this.ingreds[0]);

  for(let i = 0 ;i <= keys.length;i++){
     if(this.ingreds[0][keys[i]] == null ||this.ingreds[0][keys[i]] == false ){
       delete this.ingreds[0][keys[i]];
     } 
  }
  let keysF = Object.values(this.ingreds[0]);
  this.ingreds=keysF
  console.log(this.ingreds)
  this.numberOfIng=parseInt(this.ingreds[0])
  console.log(this.numberOfIng)
  this.objfinal.splice(3, 0, this.numberOfIng);

  console.log("objet finale est :"+this.objfinal)

  

}

Diet(){

  this.tOfDiet=[];
  this.objfinal.splice(3,1);


  console.log(this.prefDie.value);
  this.tOfDiet.push(this.prefDie.value)
  let keys = Object.keys(this.tOfDiet[0]);

  for(let i = 0 ;i <= keys.length;i++){
     if(this.tOfDiet[0][keys[i]] == null ||this.tOfDiet[0][keys[i]] == false  ){
       delete this.tOfDiet[0][keys[i]];
     } 
  }
  let keysF = Object.keys(this.tOfDiet[0]);
  this.tOfDiet=keysF
  console.log(this.tOfDiet)
  // this.objfinal.push(this.tOfDiet)

  this.objfinal.splice(4, 0, this.tOfDiet);

  console.log("objet finale est :"+this.objfinal)

}



cuisineType(){

  this.cuisinType=[];
  this.objfinal.splice(4,1);


  console.log(this.prefCuisineTyp.value);
  this.cuisinType.push(this.prefCuisineTyp.value)
  let keys = Object.keys(this.cuisinType[0]);

  for(let i = 0 ;i <= keys.length;i++){
     if(this.cuisinType[0][keys[i]] == null  ||this.cuisinType[0][keys[i]] == false ){
       delete this.cuisinType[0][keys[i]];
     } 
  }
  let keysF = Object.keys(this.cuisinType[0]);
  this.cuisinType=keysF
  console.log(this.cuisinType)
  // this.objfinal.push(this.cuisinType)
  this.objfinal.splice(5, 0, this.cuisinType);

  console.log("objet finale est :"+this.objfinal)
  
}

DishType(){

  this.DishTyp=[];
  this.objfinal.splice(5,1);


  console.log(this.prefDishTyp.value)
  
  this.DishTyp.push(this.prefDishTyp.value)
  let keys = Object.keys(this.DishTyp[0]);

  for(let i = 0 ;i <= keys.length;i++){
     if(this.DishTyp[0][keys[i]] == null  ||this.DishTyp[0][keys[i]] == false ){
       delete this.DishTyp[0][keys[i]];
     } 
  }
  let keysF = Object.keys(this.DishTyp[0]);
  this.DishTyp=keysF
  console.log(this.DishTyp)

  this.objfinal.splice(6, 0, this.DishTyp);

  console.log("objet finale est :"+this.objfinal)

}



MealType(){

  this.MealTyp=[];
  this.objfinal.splice(6,1);


  console.log(this.mainMealTyp.value)   

  this.MealTyp.push(this.mainMealTyp.value)
  let keys = Object.keys(this.MealTyp[0]);

  for(let i = 0 ;i <= keys.length;i++){
     if(this.MealTyp[0][keys[i]] == null ||this.MealTyp[0][keys[i]] == false ){
       delete this.MealTyp[0][keys[i]];
     } 
  }
  let keysF = Object.values(this.MealTyp[0]);
  this.MealTyp=keysF
  console.log(this.MealTyp)
  // this.objfinal.push(this.MealTyp)

  this.objfinal.splice(7, 0, this.MealTyp);

  console.log("objet finale est :"+this.objfinal)

}


Meat(){

  this.eatMeat=[];      
 this.objfinal.splice(7,1);


  console.log(this.eatMea.value)
  // eatMeat
  
  this.eatMeat.push(this.eatMea.value)
  let keys = Object.keys(this.eatMeat[0]);

  for(let i = 0 ;i <= keys.length;i++){
     if(this.eatMeat[0][keys[i]] == null ||this.eatMeat[0][keys[i]] == false ){
       delete this.eatMeat[0][keys[i]];
     } 
  }
  let keysF = Object.values(this.eatMeat[0]);
  this.eatMeat=keysF
  console.log(this.eatMeat)
  console.log( this.meatValue = (/true/i).test(  this.eatMeat[0]  )) //returns true
  // this.objfinal.push(this.meatValue)

  this.objfinal.splice(8, 0, this.meatValue);

  console.log("objet finale est :"+this.objfinal)


}


Ndiseases(){

  this.Ndisease=[];
  this.objfinal.splice(8,1);



  console.log(this.disease.value)
  this.Ndisease.push(this.disease.value)
  let keys = Object.keys(this.Ndisease[0]);

  for(let i = 0 ;i <= keys.length;i++){
     if(this.Ndisease[0][keys[i]] == null  ||this.Ndisease[0][keys[i]] == false ){
       delete this.Ndisease[0][keys[i]];
     } 
  }
  let keysF = Object.keys(this.Ndisease[0]);
  this.Ndisease=keysF
  console.log(this.Ndisease)
  // this.objfinal.push(this.Ndisease)
  this.objfinal.splice(8, 0, this.Ndisease);

  console.log("objet finale est :"+this.objfinal)

}


pActive(){

  this.pActiv=[];
  this.objfinal.splice(9,1);


  console.log(this.physicallyActiv.value)
  // pActiv
  this.pActiv.push(this.physicallyActiv.value)
  let keys = Object.keys(this.pActiv[0]);

  for(let i = 0 ;i <= keys.length;i++){
     if(this.pActiv[0][keys[i]] == null ||this.pActiv[0][keys[i]] == false ){
       delete this.pActiv[0][keys[i]];
     } 
  }
  let keysF = Object.values(this.pActiv[0]);
  this.pActiv=keysF
  console.log(this.pActiv)
  console.log( this.pValue = (/true/i).test(  this.pActiv[0]  )) //returns true
  // this.objfinal.push(this.pValue)
  this.objfinal.splice(9, 0, this.pValue);

  console.log("objet finale est :"+this.objfinal  )
}

exercisesPeerWeek(){

  this.exercisesPWeek=[];
  this.objfinal.splice(10,1);



  console.log(this.exercisesPeerWeekFre.value)
  // exercisesPWeek
  this.exercisesPWeek.push(this.exercisesPeerWeekFre.value)
  let keys = Object.keys(this.exercisesPWeek[0]);

  for(let i = 0 ;i <= keys.length;i++){
     if(this.exercisesPWeek[0][keys[i]] == null ||this.exercisesPWeek[0][keys[i]] == false ){
       delete this.exercisesPWeek[0][keys[i]];
     } 
  }
  let keysF = Object.values(this.exercisesPWeek[0]);
  this.exercisesPWeek=keysF
  console.log(this.exercisesPWeek)
  this.numberOfexercices=parseInt(this.exercisesPWeek[0])
  // this.objfinal.push(this.numberOfexercices)
  this.objfinal.splice(10, 0, this.numberOfexercices);

  console.log("objet finale est :"+this.objfinal)

}

bodyFatt(){

  this.bodyF=[];
  this.objfinal.splice(11,1);


  console.log(this.bodyFa.value)
  this.bodyF=this.bodyFa.value

  this.bodyF=Object.values(this.bodyFa.value);
  console.log(this.bodyF);
  // this.objfinal.push(this.bodyF)
  this.objfinal.splice(11, 0, this.bodyF);

  console.log("objet finale est :" +this.objfinal)

}


Infos(){

  this.addInfos=[];
  // this.objfinal.splice(12,);

  console.log(this.additionalInfo.value)
  this.addInfos=Object.values(this.additionalInfo.value);
  console.log(this.addInfos)
  this.objfinal.push(this.addInfos);
  console.log("objet finale est :" +this.objfinal)
  
}

FinalSubmit(){
  this.authService.PostSurvey(this.objfinal)
  .subscribe(
    res=>{
    console.log(res)
  }
  );

}




}
