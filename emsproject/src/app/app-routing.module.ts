import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmswellcomepageComponent } from './home/emswellcomepage/emswellcomepage.component';
import { DashboardpageComponent } from './home/dashboardpage/dashboardpage.component';
import { UserspageComponent } from './home/userspage/userspage.component';
const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  //{path:'emswellcomepage',component:EmswellcomepageComponent},
  {path:'dashboardpage',
  loadChildren: ()=> import('../app/home/dashboardpage/dashboardpage.module').then(m=>m.DashboardpageModule)
},
  // {path:'userspage',component:UserspageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
