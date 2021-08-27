import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { User } from '../models/user';
import {makeOrderURL, orderItemURL, orderInfoURL, myProfileURL, myOrdersURL, updateMeURL, signupURL,loginURL} from 'src/app/config/api'
import { MessageService } from './message.service';
import { Customer } from '../models/customer';
import { Order } from '../models/order';
import { OrderItem } from '../models/orderItem';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  myUser = null;
  auth:boolean = false;
 // auth1:boolean = false;
  admin:number = 0;
 // frizer:number = 0;
  isAdmin:boolean=false;
 // isOsoblje:boolean=false;
  myAdmin: string = null;
 // myOsoblje: string = null;
  adminCode = 0;
 // frizerCode = 2;
  defaultCode = 1;

  constructor(private http: HttpClient, private msg:MessageService, protected router: Router) { }

register(user: User):Observable<User>{
  return this.http.post<User>(signupURL,JSON.stringify(user)).pipe(
    tap(_=> this.log('signed up!')),
      catchError(this.handleError))
}

login(customer: Customer):Observable<any> {
  return this.http.post<Customer>(loginURL,JSON.stringify(customer)).pipe(
   tap(_=> this.log('login success!')),
     catchError(this.handleError))
}

getMe(email: string) :Observable<User>{
    return this.http.get<any>(`${myProfileURL}?email=${email}`).pipe(
      tap(_=> this.log('me success!')),
      catchError(this.handleErrorLR)
    )
}

editMe(data) {
  return this.http.post(updateMeURL, JSON.stringify(data)).pipe(
    tap(_=> this.log('my update success!')),
    catchError(this.handleError)
  )
}

makeOrder(order: Order) : Observable<Order> {
  return this.http.post<Order>(makeOrderURL, JSON.stringify(order)).pipe(
    tap(_=> this.log('order success!')),
    catchError(this.handleError)
  )
}

makeOrderItem(oitem: OrderItem) {
  return this.http.post<OrderItem>(orderItemURL, JSON.stringify(oitem)).pipe(
    tap(_=> this.log('order item success!')),
    catchError(this.handleError)
  )
}

getOrderInfo(IdPorudzbine: number, email: string) {
  return this.http.get(`${orderInfoURL}?id=${IdPorudzbine}&email=${email}`).pipe(
   tap(_=> this.log('mail success!')),
   catchError(this.handleError)
  )
}

private log(message: string) {
  this.msg.add(`User service: ${message}`);
}

 handleError(error: HttpErrorResponse) {
 //console.log("Error! Somtehing went wrong.",error);
 alert(JSON.stringify(error.error))
 return throwError("Something went wrong");
}

handleErrorLR() {
  console.log("Error! Somtehing went wrong. User does not exits");
  alert(JSON.stringify("Korisnik ne postoji"));
  try {
    sessionStorage.removeItem('user');
  //  sessionStorage.removeItem('frizer');
  }
  catch(e) {
    console.log(e);
  }
  return throwError("Something went wrong");
}


checkAuth() {
  try{
  let token = sessionStorage.getItem('user');
 this.myUser = token;
  }
  catch(e) {
    this.myUser = null;
  }
  if(this.myUser!==null) {
    this.auth = true;
  }
  else {
    this.auth=false;
  }
  return this.auth;
}

// checkAuthF(){
//   try{
//   let token1 = sessionStorage.getItem('frizer');
//   this.myOsoblje =token1;
//    }
//    catch(e) {
//      this.myOsoblje = null;
//    }
//    if(this.myOsoblje!==null) {
//      this.auth1 = false;
//    }
//    else {
//      this.auth1 = true;
//    }
//    return this.auth1;
// }

// checkOsoblje(){
//   try{
//   let token1 = sessionStorage.getItem('frizer');
//   this.frizerCode = JSON.parse(sessionStorage.getItem('codeB'));
//   this.myOsoblje = token1;
//   }
//   catch(e) {
//     this.myOsoblje =null;
//   }
//   // todo GetAdmins metoda PHP da lista sve admine //
//  if(this.frizerCode == this.defaultCode){
//     this.isOsoblje = false;
//   }
//   else{
//   this.isOsoblje = true;
//   }
//   return this.isOsoblje;
// }

checkAdmin() {
  try{
  let token = sessionStorage.getItem('user'); 
  this.adminCode = JSON.parse(sessionStorage.getItem('codeA'));
 // this.myAdmin = CryptoJS.AES.decrypt(token,'2608981412').toString(CryptoJS.enc.Utf8);
 this.myAdmin = token;
 
  }
  catch(e) {
    this.myAdmin = null;
  }
  // todo GetAdmins metoda PHP da lista sve admine //
  if(this.adminCode == this.defaultCode) {
  this.isAdmin=true;
  }
  else{
  this.isAdmin=false;
  }
  return this.isAdmin;
}

logout() {
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('codeA');
//  sessionStorage.removeItem('codeB');
}

currentUser() {
  let token = sessionStorage.getItem('user');
 // let token1 = sessionStorage.getItem('frizer');
  //let me = CryptoJS.AES.decrypt(token,'2608981412').toString(CryptoJS.enc.Utf8);
  return token;
 // return token1;
}

}
