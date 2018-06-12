import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  displayedColumns = ['status', 'codigo', 'valorTotal', 'data'];
  dataSource = ORDERS;

  constructor() { }

  ngOnInit() {
  }

}

export interface Orders {
  status: String;
  codigo: String;
  valorTotal: Number;
  data: Date;
}

const ORDERS: Orders[] = [
  { status: 'Pendente', codigo: '002', valorTotal: 100.00, data: new Date() },
  { status: 'Pendente', codigo: '003', valorTotal: 100.00, data: new Date() },
  { status: 'Pendente', codigo: '004', valorTotal: 100.00, data: new Date() },
  { status: 'Pendente', codigo: '005', valorTotal: 100.00, data: new Date() },
  { status: 'Pendente', codigo: '006', valorTotal: 100.00, data: new Date() }
];
