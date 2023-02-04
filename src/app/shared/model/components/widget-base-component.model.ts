import { Component, Input, ViewChild, DoCheck, SimpleChanges } from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';
import { CustomValidators } from '../../core/validators/ngmodel.validator';

@Component({
    template: ''
})
export abstract class WidgetBaseComponent {

    @Input() required: boolean = true;
    @Input() validations: string[] = [];
    @Input() disabled: boolean = false;
    @Input() label: string = 'label';
    @Input() name: string = 'name';
    @Input() wclass: string = '';

    @ViewChild("inputNgModel") inputNgModel: NgModel;

    constructor() {
    }

    ngOnChangesBase(ngControl: NgControl, changes: SimpleChanges) {
        ngControl.control.setValidators(CustomValidators.createListValidators(this.required, this.validations));
        setTimeout(() => { ngControl.control.updateValueAndValidity(); });
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }

    onChange: any = () => { }
    onTouch: any = () => { }

    // abstract setData(data: T): T;

    // abstract getData(): Promise<T>;
}