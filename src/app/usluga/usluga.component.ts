import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { odobriZahtevURL, zahtevURL } from '../config/api';
import { Usluge } from '../models/usluge';
import { Zahtev } from '../models/zahtev';
import { UslugeService } from '../services/usluge.service';

@Component({
  selector: 'app-usluga',
  templateUrl: './usluga.component.html',
  styleUrls: ['./usluga.component.css']
})
export class UslugaComponent implements OnInit {

  usluga: Usluge;
  usluge: Usluge[]=[];

  zahtev: Zahtev;
  zahtevi: Zahtev[]=[];
  createForm: FormGroup;
  editForm: FormGroup;
  selectedOne: Usluge = null;

  createLoad:boolean = false;
  subC =  false;

  constructor(private us: UslugeService, protected router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getUsluge();
    this.initCreateForm();
    this.initEditForm();
  }

  getUsluge() {
    this.us.getUsluge().subscribe((usl: Usluge[]) => {
      this.usluge = usl})
  }

  
  getZahtevi() {
    this.us.getZahtevi().subscribe((zah: Zahtev[]) => {
      this.zahtevi = zah})
  }
initCreateForm() {
  this.createForm = this.fb.group({
     vrstaE: ['', Validators.required],
     cenaE: ['', Validators.required],
     vremeE:['',Validators.required]
  })
}


initEditForm() {
  this.editForm = this.fb.group({
    idUslugeE: ['', Validators.required],
    vrstaE: ['', Validators.required],
    cenaE: ['', Validators.required]
  })
}



selectOne(usluga: Usluge) {
  this.selectedOne = usluga;
  this.editForm.patchValue({
    idUsluge: this.selectedOne.idUsluge,
    vrstaE: this.selectedOne.vrsta,
    cenaE: this.selectedOne.cena
  })
}


get newsP() {
  return this.createForm.controls;
}

get editsP() {
  return this.editForm.controls;
}


onCreate() {
  
      this.subC = true;
      this.createLoad = true;
      if(this.createForm.invalid) {
        alert("Nevalidna forma.");
        this.createLoad = false;
        return;
      }
  let zahtev = new Zahtev(0, this.newsP.vrsta.value,this.newsP.datum.value, this.newsP.vreme.value, this.newsP.status.value);
    console.log(zahtev);

    this.us.createZahtev(zahtev).subscribe(response => {alert(JSON.stringify("Zahtev poslat!"))
    console.log(response)
    this.getZahtevi();
  }, err => console.log(err)
    );
    this.createLoad=false;
}

}
