import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../models/cart-item';
import { CartService } from '../services/cart.services';



@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  items: CartItem[] = [];
  ukupnoKorpa: number = 0;

  constructor(private cartService: CartService, protected router: Router) { }

  ngOnInit(): void {
    this.ukupnoKorpa = this.cartService.getTotal();
    this.getItems();
  }

  
  getTotalCart() {
    this.ukupnoKorpa = this.cartService.getTotal();
  }
  getItems() {
    this.items = this.cartService.getCartItems();
  }
  
  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item);
    this.getItems();
    this.getTotalCart();

  }

  emptyCart() {
    this.cartService.emptyCart();
    this.getItems();
    this.getTotalCart();

  }
}