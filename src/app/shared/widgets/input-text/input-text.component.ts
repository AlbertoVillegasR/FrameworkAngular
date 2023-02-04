import { Component, DoCheck, Input, OnChanges, OnInit, Optional, Self, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { CustomValidators } from '../../core/validators/ngmodel.validator';
import { WidgetBaseComponent } from '../../model/components/widget-base-component.model';

@Component({
  selector: 'widget-input-text',
  templateUrl: './input-text.component.html'
})
export class WidgetInputTextComponent extends WidgetBaseComponent implements ControlValueAccessor, OnInit, OnChanges, DoCheck {

  private _value: string = "";

  constructor(
    @Optional() @Self() public ngControl: NgControl
  ) {
    super();
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {    
    this.ngControl.control.setValidators(CustomValidators.createListValidators(this.required, this.validations));
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChangesBase(this.ngControl, changes);
}

  ngDoCheck() {
    if (this.ngControl.touched) {
      this.inputNgModel.control.markAsTouched();
    }
  }

  get value() {
    return this._value;
  }

  set value(newValue: string) {
    if (newValue != this._value) {
      this._value = newValue;
      this.onChange(newValue);
      this.onTouch(newValue);
    }
  }
  
  writeValue(value: string) {
    this._value = value;
  }

}
