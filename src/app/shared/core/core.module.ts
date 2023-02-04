import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRequiredDirective } from './directives/input-required.directive';
import { DecimalFormatPipe } from './pipes/decimal-format.pipe';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { NumberFormatPipe } from './pipes/number.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { ToolService } from './services/core.service';
import { SweetAlertService } from './services/sweet-alert.service';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    NumberFormatPipe,
    FirstLetterPipe,
    SafePipe,
    DecimalFormatPipe,
    InputRequiredDirective
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers:[
    ToolService,
    SweetAlertService,
  ],
  exports:[
    NumberFormatPipe,
    FirstLetterPipe,
    SafePipe,
    DecimalFormatPipe,
    InputRequiredDirective
  ]
})
export class CoreModule { }
