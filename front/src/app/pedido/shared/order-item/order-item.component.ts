import {Component, EventEmitter, forwardRef, OnInit, Output} from '@angular/core';
import {OrderItem} from '../order-item.model';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OrderItemComponent),
      multi: true
    }
  ]
})
export class OrderItemComponent implements OnInit, ControlValueAccessor {

  orderItem: OrderItem;
  @Output()
  onRemove: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  onChangeValue: EventEmitter<void> = new EventEmitter<void>();
  onChange = (value: any) => {
  }
  constructor() { }

  ngOnInit() {
  }

  onClickRemove() {
    this.onRemove.emit();
    this.onChangeValue.emit();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode <= 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onChangeQty($event) {
    console.log($event)
    if(this.onChange) {
      this.onChange(this.orderItem);
    }
    this.onChangeValue.emit();
  }
  writeValue(obj: any): void {
    this.orderItem = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

}
