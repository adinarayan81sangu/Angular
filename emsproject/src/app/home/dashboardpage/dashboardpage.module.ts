import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardpageRoutingModule } from './dashboardpage-routing.module';
import { DashboardpageComponent } from './dashboardpage.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    DashboardpageComponent
  ],
  imports: [
    CommonModule,
    DashboardpageRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    // DashboardpageRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardpageModule { }
