import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { User } from '../models/user';
import { signupURL, loginURL,myProfileURL, updateMeURL } from '../config/api';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  myUser = null;
  auth:boolean = false;
  admin:number = 0;
  isAdmin:boolean=false;
  myAdmin: string = null;
  adminCode = 0;
  defaultCode = 818352;

  constructor(private http: HttpClient, private msg:MessageService, protected router: Router) { }

register(user: User):Observable<User>{
  return this.http.post<User>(signupURL,JSON.stringify(user)).pipe(
    tap(_=> this.log('signed up!')),
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


private log(message: string) {
  this.msg.add(`User service: ${message}`);
}

 handleError(error: HttpErrorResponse) {
 console.log("Error! Somtehing went wrong.",error);
 alert(JSON.stringify(error.error))
 return throwError("Something went wrong");
}

handleErrorLR() {
  console.log("Error! Somtehing went wrong. User does not exits");
  alert(JSON.stringify("Korisnik ne postoji"));
  try {
    sessionStorage.removeItem('user');
  }
  catch(e) {
    console.log(e);
  }
  return throwError("Something went wrong");
}


checkAuth() {
  try{
  let token = sessionStorage.getItem('user');
 // this.myUser = CryptoJS.AES.decrypt(token,'2608981412').toString(CryptoJS.enc.Utf8);
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
}

currentUser() {
  let token = sessionStorage.getItem('user');
  //let me = CryptoJS.AES.decrypt(token,'2608981412').toString(CryptoJS.enc.Utf8);
  return token;
}

}
