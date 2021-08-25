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
  
  
  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
    this.getTotalCart();

 }

 decreaseQty(item: CartItem) {
   this.cartService.decreaseQty(item);
   this.getItems();
   this.getTotalCart();
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

  
  // finishOrder() {
  //   if(this.checkAuth()==false) {
  //     alert("Molimo Vas da se prijavite ili registrujte kako bi završili porudžbinu.")
  //   }
  //   else {
  //     let discount = 0;
  //     let orderId = 1;
  //     let finalPrice = this.grand;
  //     let cond = 0;
  //     let user = this.userService.currentUser();
  //     let dateNow = new Date().toLocaleString();
  //     let ccode = this.code;
  //     let coupon = this.coupons.find(c => c.codeCoupon == ccode);
  //     if(coupon!==undefined) {
  //       discount = coupon.discount;
  //       cond = coupon.cond;
  //       if(this.totalCart>=cond)  {
  //       finalPrice = finalPrice - (this.totalCart*(discount/100));
  //       }
  //       else 
  //       finalPrice = this.grand;
  //     }
  //     else {
  //       finalPrice = this.grand;
  //     }
  //    let order = new Order(0,dateNow,finalPrice,user,ccode);
  //    this.userService.makeOrder(order).subscribe(res => {
  //      console.log(res)
  //      orderId = res.idOrder;
  //      this.items.forEach(item => {
  //        let oitem = new OrderItem(orderId,item.productId,item.qty,item.totalItem);
  //        this.userService.makeOrderItem(oitem).subscribe(res => console.log("success item"));
  //      }),
  //      setTimeout(() => {
  //       this.userService.getOrderInfo(orderId,user).subscribe(res => console.log(res));
  //       this.emptyCart();
  //      },750)
  //     // this.userService.getOrderInfo(orderId,user).subscribe(res => console.log(res));
  //      //this.emptyCart();
  //      }
  //    );
  //    alert("Hvala Vam na kupovini. Uskoro ćemo Vas kontaktirati putem mejla.");
  //    this.router.navigate(['/profile']);

  //   }
  // }
}