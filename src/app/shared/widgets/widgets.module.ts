import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetInputTextComponent } from './input-text/input-text.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { WidgetButtonComponent } from './button/button.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  declarations: [
    WidgetInputTextComponent,
    WidgetButtonComponent
  ],
  exports: [
    WidgetInputTextComponent,
    WidgetButtonComponent
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WidgetInputTextComponent),
      multi: true
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WidgetButtonComponent),
      multi: true
    },
  ]
})
export class WidgetsModule { }
