import { Component, OnInit } from '@angular/core';
import {OrderService} from '../shared/order.service';
import { Order} from '../pedido/shared/order.model';
import {Page, Pageable} from '../shared/rest-api.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {

  listOrder: Page<Order>;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.findOrders(0);
  }

  findOrders(pageNumber: number) {
    this.orderService.getOrders(pageNumber).subscribe(list => {
      this.listOrder = list;
    });
  }
  changePage(pageNumber) {
    if (isNaN(pageNumber)) {
      return;
    }
    this.findOrders(pageNumber - 1);
  }
  getTotalItens(order: Order) {
    return order.items.map(v => Number(v.qty)).reduce((a, b) => a + b, 0);
  }
  getTotalOrder(order: Order) {
    return order.items.map(v => Number(v.qty * v.product.unitPrice)).reduce((a, b) => a + b, 0) + order.totalFreight;
  }
}
