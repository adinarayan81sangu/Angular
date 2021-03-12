import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-emswellcomepage',
  templateUrl: './emswellcomepage.component.html',
  styleUrls: ['./emswellcomepage.component.css']
})
export class EmswellcomepageComponent implements OnInit {

  title = 'emsproject';
  hide=false;
  username="";
  password="";
  valid:boolean=false;
  value:string='emswellcomepage';
  
  constructor(public ref:Router) { 
    
  }
  login() {
    if(!this.username || !this.password)
    {
      this.valid=true;
    }
   else{
    //  this.value="dashboardpage";
    this.ref.navigate(['/dashboardpage']);
   }
  }
 

  ngOnInit(): void {
    
  }

}
