import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {  FormsModule }  from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
 import { EmswellcomepageComponent } from './home/emswellcomepage/emswellcomepage.component';
//  import { DashboardpageComponent } from './home/dashboardpage/dashboardpage.component';
//  import { UserspageComponent } from './home/userspage/userspage.component';
//import { ManagerolesComponent } from './home/manageroles/manageroles.component';
//import { ManageprojectsComponent } from './home/manageprojects/manageprojects.component';
import {MatSelectModule} from '@angular/material/select';
//import { ManageModuleComponent } from './home/manage/manage-module.component';

import {MatSidenavModule} from '@angular/material/sidenav';
//import { ManageSubmoduleComponent } from './home/manage-submodule/manage-submodule.component';
//import { ManageSprintsComponent } from './home/manage-sprints/manage-sprints.component';
//import { ManageTasksComponent } from './home/manage-tasks/manage-tasks.component';
// import { AssignRespnsibilitiesComponent } from './home/assign-respnsibilities/assign-respnsibilities.component';
//import { DashboardComponent } from './home/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
     EmswellcomepageComponent,
    //  DashboardpageComponent,
    //  UserspageComponent,
     //ManagerolesComponent,
    // ManageprojectsComponent,
     //ManageModuleComponent,
     //ManageSubmoduleComponent,
     //ManageSprintsComponent,
    // ManageTasksComponent,
     //AssignRespnsibilitiesComponent,
    //  DashboardComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule ,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
