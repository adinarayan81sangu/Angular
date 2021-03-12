import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageSubmoduleComponent } from './manage-submodule.component';

const routes: Routes = [
  {path:"",component:ManageSubmoduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageSubmoduleRoutingModule { }
