import {OrderItem} from './order-item.model';
import {Costumer} from './customer.model';

export class Order {
  id: number;
  customer: Costumer;
  items: Array<OrderItem>;
  totalFreight:number;
}
