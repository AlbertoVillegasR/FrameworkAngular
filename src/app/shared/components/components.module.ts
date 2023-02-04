import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ContentWithFormComponent } from './content-with-form/content-with-form.component';
import { ContentWithTableComponent } from './content-with-table/table-content.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// import { IntranetPanelEmptyComponent } from './panel-empty/panel-empty.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgbTooltipModule
  ],
  declarations: [
    ContentWithTableComponent,
    ContentWithFormComponent
  ],
  exports: [
    ContentWithTableComponent,
    ContentWithFormComponent,
    FormsModule,
    MatTableModule,
  ],
})
export class ComponentsModule { }
