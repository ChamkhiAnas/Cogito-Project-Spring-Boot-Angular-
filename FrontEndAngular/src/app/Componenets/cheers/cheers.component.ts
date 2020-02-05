import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheers',
  templateUrl: './cheers.component.html',
  styleUrls: ['./cheers.component.css']
})
export class CheersComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('token')
    this._router.navigate(['Survey'])
  }

  navigate(){

    this._router.navigate(['Survey'])

  }
}
