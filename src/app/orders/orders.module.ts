import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders/orders.component';

import { AppMaterialModule } from './../app-material/app-material.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    AppMaterialModule
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule { }
