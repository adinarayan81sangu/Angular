import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignRespnsibilitiesComponent } from './assign-respnsibilities.component';


const routes: Routes = [
{path:"",component:AssignRespnsibilitiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignRespnsibilitiesRoutingModule { }
