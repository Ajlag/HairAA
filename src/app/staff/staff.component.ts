import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Zahtev } from '../models/zahtev';
import { UslugeService } from '../services/usluge.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  currentTutorial = null;

  constructor(private us:UslugeService, protected router: Router, private fb:FormBuilder) { }

  zahtev: Zahtev;
  zahtevi: Zahtev[]=[];

  ngOnInit(): void {
    this.getZahtevi();
  }

  
  
  getZahtevi() {
    this.us.getZahtevi().subscribe((zah: Zahtev[]) => {
      this.zahtevi = zah})
  }

}
