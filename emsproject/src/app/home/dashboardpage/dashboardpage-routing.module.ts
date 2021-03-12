import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageModuleModule } from '../manage-module/manage-module.module';
import { DashboardpageComponent } from './dashboardpage.component';

const routes: Routes = [
  {
    path: "", component: DashboardpageComponent,
    children: [
    
     {
       path:"dashboard",
       loadChildren: () => import('.././dashboard/dashboard.module').then(m =>m.DashboardModule)
   },
    {
        path: 'userspage',
        loadChildren: () => import('.././userspage/userspage.module').then(m => m.UserspageModule)
      },
      {
        path: 'manageroles',
        loadChildren: () => import('.././manageroles/manageroles.module').then(m =>m.ManagerolesModule)
    },
    {
      path:"project",
      loadChildren: () => import('.././manageprojects/manageprojects.module').then(m => m.ManageprojectsModule)
    },
    {
      path:"module",
      loadChildren: () => import('.././manage-module/manage-module.module').then(m => m.ManageModuleModule)
    },
    {
      path:"submodule",
      loadChildren: () => import('.././manage-submodule/manage-submodule.module').then(m => m.ManageSubmoduleModule)
    },
    {
   path:"sprints",
   loadChildren: () => import('.././manage-sprints/manage-sprints.module').then( m =>m.ManageSprintsModule)
    },
    {
      path:"taskspage",
      loadChildren: () => import('.././manage-tasks/manage-tasks.module').then(m =>m.ManageTasksModule)
    },
    {
      path:"respnsibilities",
      loadChildren: () => import('.././assign-respnsibilities/assign-respnsibilities.module').then(m => m.AssignRespnsibilitiesModule)
    },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardpageRoutingModule { }
