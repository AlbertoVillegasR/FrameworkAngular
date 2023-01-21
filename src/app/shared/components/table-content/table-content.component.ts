import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import * as _ from 'lodash';
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "content-with-table",
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent<T> implements AfterContentInit, AfterViewInit {

  @Input() columns: string[] = [];
  @Input() dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();
  @ContentChild(MatSort) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<T>;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;
  @ContentChildren(MatHeaderRowDef) headerRowDefs: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<any>>;
  constructor() { }

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

}
