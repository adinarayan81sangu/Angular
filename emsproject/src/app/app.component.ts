import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emsproject';
  username="";
  password="";
  valid:boolean=false;
  value:string="log";
  logout:boolean=false;
  hide=true;
  constructor(public ref:Router) { 
    
  }
  login() {
    if(!this.username || !this.password)
    {
      this.valid=true;
    }else{
      this.logout=true;
     // this.value="dashboardpage"
      this.ref.navigate(['/dashboardpage']);
      

    }
  }
}
