import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageprojectsComponent } from './manageprojects.component';

const routes: Routes = [
  {path:"",component:ManageprojectsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageprojectsRoutingModule { }
