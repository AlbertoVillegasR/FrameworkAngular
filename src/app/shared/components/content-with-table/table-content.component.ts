import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import * as _ from 'lodash';
import * as objectPath from 'object-path';
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { ConfigComponent } from '../../model/components/config-component.model';
import { SelectionModel } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Constants } from '../../model/enums';

@Component({
  selector: "content-with-table",
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss'],
  animations: [
    trigger('detailExpand', [
        state('collapsed', style({ height: '0px', minHeight: '0' })),
        state('expanded', style({ height: '*' })),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
],
})
export class ContentWithTableComponent<T> implements AfterContentInit, AfterViewInit {

  // @Input() columns: string[] = [];
  // @Input() filterColumns: string[] = [];
  loading = false;
  selection = new SelectionModel<T>(true, []);
  multipleRemove: boolean = true;
  @Input() withPaginator: boolean = true;
  @Input() configComponent: ConfigComponent = new ConfigComponent();
  @Input() dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();
  @ContentChild(MatSort) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<T>;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;
  @ContentChildren(MatHeaderRowDef) headerRowDefs: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<any>>;
  filterText: string = null;
  // keyUp: EventEmitter<string> = new EventEmitter<string>();
  constructor() {  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngAfterContentInit() {
    // Para insertar las columnas del ng-select
    this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
    this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
    this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
  }

  setDataSource(_data: T[]) {
    // this.clearSelected();
    this.dataSource = new MatTableDataSource(_data);
    this.dataSource.sortingDataAccessor = _.get;
    this.dataSource.sort = this.sort;
  }

  setFilterToSearch() {
    this.dataSource.filter = this.filterText;
  }

//   async deleteSelected() {
//     if (this.multipleDeletePromise) {
//         let selected = this.getSelected().map(s => s["IdCatalog"]);

//         if (selected.length > 0) {
//             let { isConfirmed } = (this.messageAlertMultipleDelete) ?
//                 await this.toolsService.sweetAlert.confirmation2(`¿Está seguro de eliminar los <b>${selected.length} item(s)</b> seleccionados?`, this.messageAlertMultipleDelete) :
//                 await this.toolsService.sweetAlert.confirmation(`¿Está seguro de eliminar los <b>${selected.length} item(s)</b> seleccionados?`);

//             if (isConfirmed) {
//                 this.toolsService.splash.show();
//                 let { status, message, validate } = await this.multipleDeletePromise(selected);
//                 this.toolsService.splash.hide();

//                 if (status == Constants.STATUS.Success) {
//                     this.list.emit();
//                 }

//                 this.toolsService.sweetAlert.show(status, message);
//             }
//         }
//     } else {
//         this.deleteSelectedFunction.emit();
//     }
// }


}
