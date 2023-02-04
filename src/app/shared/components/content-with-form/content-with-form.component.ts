import { AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChild } from '@angular/core';
import { NgForm, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'content-with-form',
  templateUrl: './content-with-form.component.html'
})
export class ContentWithFormComponent implements OnInit, AfterViewInit {

  @ContentChildren(NgModel, { descendants: true }) private inputs: QueryList<NgModel>;
  @ViewChild('form') private form: NgForm;

  constructor() { }

  ngAfterViewInit() {
    this.inputs.toArray().forEach((model) => { 
      this.form.addControl(model);
     });

    // this.inputsOther.map((model) => this.form.addControl(model));
  }

  isValidateForm(): boolean {
    if (this.form.invalid) {
      this.form.control.markAllAsTouched();
    }
    return !this.form.invalid;
  }

  ngOnInit(): void {
  }

}
