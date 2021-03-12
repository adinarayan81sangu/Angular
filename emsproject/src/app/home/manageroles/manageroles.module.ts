import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerolesRoutingModule } from './manageroles-routing.module';
import {ManagerolesComponent} from './manageroles.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagerolesComponent,
  ],
  imports: [
    CommonModule,
    ManagerolesRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule ,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
  ]
})
export class ManagerolesModule { }
