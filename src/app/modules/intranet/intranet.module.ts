import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table1Component } from './views/table1/table1.component';
import { SharedModule } from 'src/app/shared/shared-module.module';
import { IntranetRoutingModule } from './intranet-routing.module';
import { MatHeaderCell, MatHeaderCellDef, MatTableModule } from '@angular/material/table';
import { PersonaService } from './services/persona.service';
import { MatSortModule } from '@angular/material/sort';
import { PersonComponent } from './views/person/person.component';
import { AsideDynamicComponent } from './base/layout/views/aside-dynamic/aside-dynamic.component';
import { LayoutComponent } from './base/layout.component';
import { HomeComponent } from './views/home/home.component';



@NgModule({
  declarations: [
    Table1Component,
    PersonComponent,
    AsideDynamicComponent,
    LayoutComponent,
    HomeComponent
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
