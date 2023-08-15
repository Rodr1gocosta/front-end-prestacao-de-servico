import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosRoutingModule } from './tecnicos-routing.module';
import { TecnicosComponent } from './tecnicos.component';
import { TecnicosCrudComponent } from './tecnicos-crud/tecnicos-crud.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TecnicosComponent,
    TecnicosCrudComponent,
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule

  ]
})
export class TecnicosModule { }
