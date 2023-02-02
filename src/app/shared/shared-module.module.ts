import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableContentComponent } from './components/table-content/table-content.component';
import { MatTableModule } from '@angular/material/table'
import { APISERVICE } from './service/API.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// // import { MatSortHeader, MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    TableContentComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule
    // MatSortModule,
    // MatTableModule, 
  ],
  providers:[
    APISERVICE
  ],
  exports:[
    TableContentComponent,
    MatTableModule,
    HttpClientModule,
    // MatSortModule,
  ]
})
export class SharedModule { }
