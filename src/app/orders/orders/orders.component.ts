import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  displayedColumns = ['status', 'codigo', 'valorTotal', 'data'];
  dataSource = new MatTableDataSource<Orders>(ORDERS);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface Orders {
  status: String;
  codigo: String;
  valorTotal: Number;
  data: Date;
}

const ORDERS: Orders[] = [
  { status: 'Pendente', codigo: '002', valorTotal: 100.0, data: new Date() },
  { status: 'Concluido', codigo: '003', valorTotal: 100.0, data: new Date() },
  { status: 'Cancelado', codigo: '004', valorTotal: 100.0, data: new Date() },
  { status: 'Pendente', codigo: '005', valorTotal: 100.0, data: new Date() },
  { status: 'Pendente', codigo: '006', valorTotal: 100.0, data: new Date() },
];
