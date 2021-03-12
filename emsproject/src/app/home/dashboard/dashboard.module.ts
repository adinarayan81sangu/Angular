import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
