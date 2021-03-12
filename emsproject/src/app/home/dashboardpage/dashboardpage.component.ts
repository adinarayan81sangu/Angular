import { Component, OnInit } from '@angular/core';
import { SharedataService } from 'src/app/sharedata.service';

@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.css']
})
export class DashboardpageComponent implements OnInit {
    
userapage="";
isShowing: boolean=true;

toggleSidenav() {
  if(this.isShowing)
   this.isShowing = false;
   else if(!this.isShowing)
   this.isShowing = true;
}
onclick(){
  this.userapage="/userspage"
}

  constructor(private share:SharedataService) {
    alert(this.share.navigateMessage)
  
   }


  ngOnInit(): void {
  }

}
