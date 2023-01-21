import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table1Component } from './table1/table1.component';
import { SharedModule } from 'src/app/shared/shared-module.module';
import { IntranetRoutingModule } from './intranet-routing.module';
import { MatHeaderCell, MatHeaderCellDef, MatTableModule } from '@angular/material/table';
import { PersonaService } from './services/persona.service';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    Table1Component
  ],
  providers:[
    PersonaService
  ],
  imports: [
    CommonModule,
    SharedModule,
    IntranetRoutingModule,
    MatSortModule
    // MatTableModule,
    // MatHeaderCell,
  ]
})
export class IntranetModule { }
