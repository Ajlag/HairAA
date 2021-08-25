import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faCart = faShoppingCart;

  constructor(protected router:Router) { }

  ngOnInit(): void {
  }

}
