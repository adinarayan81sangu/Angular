import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageSprintsComponent } from './manage-sprints.component';

const routes: Routes = [
  {path:"",component:ManageSprintsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageSprintsRoutingModule { }
