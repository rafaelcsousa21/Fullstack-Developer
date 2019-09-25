import { Injectable } from '@angular/core';
import {RestApiService} from './rest-api.service';
import { Order} from '../pedido/shared/order.model';

@Injectable()
export class OrderService {

  constructor(private restApiService: RestApiService) {
  }

  getOrders(pageNumber?: number) {
    return this.restApiService.getPageable<Order>('order', { page : pageNumber});
  }

  sendOrder(order: Order) {
    return this.restApiService.post<Order>('order', order);
  }
}
