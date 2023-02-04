import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../model/components/base-component.model';
import { WidgetBaseComponent } from '../../model/components/widget-base-component.model';

@Component({
  selector: 'widget-button',
  templateUrl: './button.component.html'
})
export class WidgetButtonComponent extends WidgetBaseComponent implements OnInit {

  @Input() iconFA: string;

  constructor() { super(); }

  ngOnInit(): void {
  }

}
