import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignRespnsibilitiesRoutingModule } from './assign-respnsibilities-routing.module';
import {AssignRespnsibilitiesComponent} from './assign-respnsibilities.component'
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AssignRespnsibilitiesComponent,
  ],
  imports: [
    CommonModule,
    AssignRespnsibilitiesRoutingModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ]
})
export class AssignRespnsibilitiesModule { }
