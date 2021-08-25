import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItem
  @Output() removeFromCart: EventEmitter<CartItem> = new EventEmitter();
  faTrash=faTrash;
  constructor() { }

  ngOnInit(): void {
  }

  
  onRemove(item) {
    this.removeFromCart.emit(item);
  }

}
