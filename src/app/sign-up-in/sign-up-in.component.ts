import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-sign-up-in',
  templateUrl: './sign-up-in.component.html',
  styleUrls: ['./sign-up-in.component.css']
})
export class SignUpInComponent implements OnInit {

  eye = faEye;
  rHidden = true;
  eyeS = faEyeSlash
  hideR = true;
  hideL = true;
  fHide = true;
  signupForm : FormGroup;
  loginForm : FormGroup;
  resetForm: FormGroup;
  submitted = false;
  loginTry = false;
  loading = false;
  loginLoad = false;
  newUser: User = null;

  constructor(private fb: FormBuilder,  protected router:Router) { }

  ngOnInit(): void {
     this.createSignupForm();
     this.createLoginForm();
   
  }

  toggleR() {
    this.hideR = !this.hideR;
  }

  toggleL() {
    this.hideL = !this.hideL;
  }

  toggleF() {
    this.fHide = !this.fHide;
  }

  
  get scs() {
    return this.signupForm.controls;
  }

  get logInfo() {
    return this.loginForm.controls;
  }

  
  createSignupForm() {
    this.signupForm = this.fb.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      email: ['', Validators.required],
      lozinka: ['', Validators.required],
      adresa: ['', Validators.required],
      telefon: ['', Validators.required]
    })
 }

 
 createLoginForm() {
  this.loginForm = this.fb.group({
    email: ['', Validators.required],
    lozinka: ['', Validators.required]
  })
}


}
