import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Zahtev } from '../models/zahtev';
import { UserService } from '../services/user.service';
import { UslugeService } from '../services/usluge.service';

@Component({
  selector: 'app-moji-zahtevi',
  templateUrl: './moji-zahtevi.component.html',
  styleUrls: ['./moji-zahtevi.component.css']
})
export class MojiZahteviComponent implements OnInit {

  constructor(private us:UslugeService,private userS:UserService, protected router: Router, private fb:FormBuilder) { }
  user: User = null;
  zahtev: Zahtev;
  zahtevi: Zahtev[]=[];

  ngOnInit(): void {
    this.getZahtevi();
    this.getMe();
  }

  
  
  getZahtevi() {
    this.us.getOdobreneZahteve().subscribe((zah: Zahtev[]) => {
      this.zahtevi = zah})
  }

  
  getMe() {
    let token = sessionStorage.getItem('user');
   // let me = CryptoJS.AES.decrypt(token,'2608981412').toString(CryptoJS.enc.Utf8);
    this.userS.getMe(token).subscribe(user => {console.log(JSON.stringify(user)); 
       this.user = user;
    },err => {
      console.log(err);
      this.router.navigate(['/']);
    })
  }
}
