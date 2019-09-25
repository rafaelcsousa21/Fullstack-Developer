import { Injectable } from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {RestApiService} from './rest-api.service';
import {Costumer} from '../pedido/shared/customer.model';

@Injectable()
export class CustomerService {

  constructor(private restApiService: RestApiService) {
  }

  getCustomers() {
    return this.restApiService.getPageable<Costumer>('customer').pipe(map(response => response.content));
  }
  getCustomersByName(text) {
    return this.restApiService.getPageable<Costumer>('customer', { name: text}).pipe(map(response => response.content));
  }
}
