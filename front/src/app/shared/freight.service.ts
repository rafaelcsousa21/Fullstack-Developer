import { Injectable } from '@angular/core';
import {RestApiService} from './rest-api.service';

@Injectable()
export class FreightService {


  constructor(private restApiService: RestApiService) {
  }

  processTaxFreight(totalItens) {
    return this.restApiService.get<Freight>('freight', { totalItens});
  }
}
