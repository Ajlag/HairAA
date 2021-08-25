import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
//import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SignUpInComponent } from './sign-up-in/sign-up-in.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { MycartComponent } from './mycart/mycart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartColumnsComponent } from './cart-columns/cart-columns.component';
import { ProfileComponent } from './profile/profile.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { FriseurComponent } from './friseur/friseur.component';
import { ProductComponent } from './product/product.component';
import { StaffComponent } from './staff/staff.component';
import { faFontAwesomeLogoFull } from '@fortawesome/free-solid-svg-icons';
import { UslugaComponent } from './usluga/usluga.component';
import { UslugeAdminComponent } from './usluge-admin/usluge-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    SignUpInComponent,
    ProductListComponent,
    ProductItemComponent,
    MycartComponent,
    CartItemComponent,
    CartColumnsComponent,
    ProfileComponent,
    SuppliersComponent,
    SuppliesComponent,
    FriseurComponent,
    ProductComponent,
    StaffComponent,
    UslugaComponent,
    UslugeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  //  NgModule,
    // FontAwesomeModule,
   HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
