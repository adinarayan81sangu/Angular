import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerolesComponent } from './manageroles.component';

const routes: Routes = [
  {
    path:"",component:ManagerolesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerolesRoutingModule { }
