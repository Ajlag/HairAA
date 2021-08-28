import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Zahtev } from '../models/zahtev';
import { UslugeService } from '../services/usluge.service';

@Component({
  selector: 'app-moji-zahtevi',
  templateUrl: './moji-zahtevi.component.html',
  styleUrls: ['./moji-zahtevi.component.css']
})
export class MojiZahteviComponent implements OnInit {

  constructor(private us:UslugeService, protected router: Router, private fb:FormBuilder) { }

  zahtev: Zahtev;
  zahtevi: Zahtev[]=[];

  ngOnInit(): void {
    this.getZahtevi();
  }

  
  
  getZahtevi() {
    this.us.getOdobreneZahteve().subscribe((zah: Zahtev[]) => {
      this.zahtevi = zah})
  }

}
