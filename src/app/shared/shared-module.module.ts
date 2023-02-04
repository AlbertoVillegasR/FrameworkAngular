import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWithTableComponent } from './components/content-with-table/table-content.component';
import { MatTableModule } from '@angular/material/table'
import { APISERVICE } from './service/API.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { WidgetsModule } from './widgets/widgets.module';
import { CoreModule } from './core/core.module';
import { ToolService } from './core/services/core.service';
// // import { MatSortHeader, MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    CoreModule,
    ComponentsModule,
    MatTableModule,
    FormsModule
    // MatSortModule,
    // MatTableModule, 
  ],
  providers:[
    APISERVICE,
  ],
  exports:[
    WidgetsModule,
    ComponentsModule,
    CoreModule,
    HttpClientModule,
    // MatSortModule,
  ]
})
export class SharedModule { }
