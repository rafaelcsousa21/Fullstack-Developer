import { Injectable } from '@angular/core';
import {RestApiService} from './rest-api.service';
import {Product} from '../pedido/shared/product.model';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private restApiService: RestApiService) {
  }

  getProducts() {
    return this.restApiService.getPageable<Product>('product').pipe(map(response => response.content));
  }
  getProductByName(text) {
    return this.restApiService.getPageable<Product>('product', { name: text}).pipe(map(response => response.content));
  }
}
