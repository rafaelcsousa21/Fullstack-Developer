import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/internal/operators';
import {CustomerService} from '../shared/customer.service';
import {Costumer} from './shared/customer.model';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from './shared/product.model';
import {Order} from './shared/order.model';
import {OrderItem} from './shared/order-item.model';
import {NgbTypeaheadSelectItemEvent} from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead';
import {FreightService} from '../shared/freight.service';
import {OrderService} from '../shared/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  customer: Costumer;
  orderForm: FormGroup;
  product: any;

  freight: Freight = {totalFreight: 0};

  constructor(private freightService: FreightService,
              private produtoService: ProductService,
              private clienteService: CustomerService,
              private orderService: OrderService,
              private router: Router) {
    this.orderForm = new FormGroup({
      customer: new FormControl(null, [
        Validators.required,
        Validators.nullValidator,
      ]),
      items: new FormArray([]),
      totalFreight: new FormControl(0.0, [
        Validators.required,
        Validators.nullValidator,
      ]),
    });
  }

  ngOnInit() {
  }

  processFreightTax() {
    this.freightService.processTaxFreight(this.totalItens).subscribe(freight => {
      this.freight = freight;
      this.orderForm.get('totalFreight').setValue(this.freight.totalFreight);
    });
  }
  searchProduct = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => term.length < 1 ? []
        : this.produtoService.getProductByName(term).pipe(map(response => {
          return response;
        }))))

  searchCustomer = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => term.length < 1 ? []
        : this.clienteService.getCustomersByName(term).pipe(map(response => {
          return response;
        }))))

  onSelectProduct(event) {
    this.product = {};
    this.addItem(event.item);
  }

  private addItem(item: Product) {
    const itensForm: FormArray = this.orderItens;
    const orderItemControl = new FormGroup({
      product: new FormControl(item, []),
      qty: new FormControl(1, [Validators.required, Validators.min(1)])
    });
    itensForm.setControl(itensForm.length, orderItemControl);
    itensForm.updateValueAndValidity();
    console.log(this.orderForm);
    this.orderForm.get('items').updateValueAndValidity({emitEvent: true});
    this.processFreightTax();
  }

  private onRemoveItem(i: number) {
    const itensForm: FormArray = this.orderItens;
    itensForm.controls.splice(i, 1);
  }

  private onCleanOrder() {
    this.orderItens.controls = [];
    this.orderForm.get('totalFreight').setValue(0);
    this.freight = {totalFreight: 0};
  }

  submit() {
    console.log(this.orderForm);
    this.orderForm.markAllAsTouched();
    if( this.orderForm.valid) {
      this.orderService.sendOrder(this.orderForm.value).subscribe(value => {
        console.log(value);
        this.router.navigate(['/orders']);
      });
    }

  }

  formatter = (x: any) => {
    return x.name;
  }

  get totalItens() {
    return this.orderItens.controls.map(v => v.value).map(v => Number(v.qty)).reduce((a, b) => a + b, 0);
  }

  get orderTotal() {
    return this.orderItens.controls.map(v => v.value).map(v => v.product.unitPrice * v.qty).reduce((a, b) => a + b, 0);
  }

  get orderItens() {
    return this.orderForm.controls.items as FormArray;
  }

}
