import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { Usluge } from '../models/usluge';
import { MessageService } from './message.service';
import {of} from 'rxjs'
import {catchError,tap} from 'rxjs/operators'
import { izbrisiZahtevURL, newZahtevURL, odobriZahtevURL, uslugeURL, zahtevURL } from '../config/api';
import { Zahtev } from '../models/zahtev';

@Injectable({
  providedIn: 'root'
})
export class UslugeService {

  constructor(private http: HttpClient, private msg: MessageService) { }


  getUsluge() : Observable<Usluge[]> {
    return this.http.get<Usluge[]>(uslugeURL).pipe(
      tap(_=> this.log('fetched products')),
      catchError(this.handleError<Usluge[]>('getUsluge',[]))
    );
  }

  
  getZahtevi() : Observable<Zahtev[]> {
    return this.http.get<Zahtev[]>(zahtevURL).pipe(
      tap(_=> this.log('fetched products')),
      catchError(this.handleError<Zahtev[]>('getZahtevi',[]))
    );
  }
  
createZahtev(zahtev: Zahtev): Observable<Zahtev> {
  return this.http.post<Zahtev>(newZahtevURL,JSON.stringify(zahtev)).pipe(
   tap(_=> this.log('Zahtev dodat!')),
     catchError(this.handleErrorTwo))
}


odobriZahtev(zahtev: Zahtev) {
  return this.http.post<Zahtev>(odobriZahtevURL,JSON.stringify(zahtev)).pipe(
    tap(_=> this.log('Zahtev odobren!')),
      catchError(this.handleErrorTwo))
}


izbrisiZahtev(zahtev: Zahtev) {
  return this.http.post<Zahtev>(izbrisiZahtevURL,JSON.stringify(zahtev)).pipe(
    tap(_=> this.log('Zahtev odobren!')),
      catchError(this.handleErrorTwo))
}

  private log(message: string) {
    this.msg.add(`Product service: ${message}`);
  }

 private handleError<T>(operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
 
     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead
 
     // TODO: better job of transforming error for user consumption
     this.log(`${operation} failed: ${error.message}`);
 
     // Let the app keep running by returning an empty result.
     return of(result as T);
   };
 }

 handleErrorTwo(error: HttpErrorResponse) {
  console.log("Error! Somtehing went wrong.",error);
  alert(JSON.stringify(error.error))
  return throwError("Something went wrong");
 }

 
}
