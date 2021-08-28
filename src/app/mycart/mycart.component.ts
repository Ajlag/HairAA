import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../models/cart-item';
import { AdminService } from '../services/admin.service';
import { CartService } from '../services/cart.services';
import { UserService } from '../services/user.service';
import { Order } from '../models/order';
import { OrderItem } from '../models/orderItem';



@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  items: CartItem[] = [];
  ukupnoKorpa: number = 0;

  constructor(private cartService: CartService, protected router: Router,private userService: UserService, private adm: AdminService) { }

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

  checkAuth() {
    return this.userService.checkAuth();
  }
  
  finishOrder() {
    // if(this.checkAuth()==false) {
    //   alert("Molimo Vas da se prijavite ili registrujte kako bi završili porudžbinu.")
    // }
    // else {
      let discount = 0;
      let IdPorudzbine = 1;
      let ukupnaCena = this.ukupnoKorpa;
      let user = this.userService.currentUser();
      let datumP = new Date().toLocaleString();

     let order = new Order(0,datumP,ukupnaCena,user);
     this.userService.makeOrder(order).subscribe(res => {
       console.log(res)
       IdPorudzbine = res.IdPorudzbine;
       this.items.forEach(item => {
         let oitem = new OrderItem(IdPorudzbine,item.IdProizvoda,item.dostupno,item.cena);
         this.userService.makeOrderItem(oitem).subscribe(res => console.log("success item"));
       }),
       setTimeout(() => {
        this.userService.getOrderInfo(IdPorudzbine,user).subscribe(res => console.log(res));
        this.emptyCart();
       },750)
       }
     );
     alert("Hvala Vam na kupovini.");
     this.router.navigate(['/about']);
    // }
  }
}