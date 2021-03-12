import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTasksComponent } from './manage-tasks.component';

const routes: Routes = [
  {path:"",component:ManageTasksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageTasksRoutingModule { }
