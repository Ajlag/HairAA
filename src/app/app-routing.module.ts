import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpInComponent} from './sign-up-in/sign-up-in.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MycartComponent } from './mycart/mycart.component';
import { CartColumnsComponent } from './cart-columns/cart-columns.component';
import { ProfileComponent } from './profile/profile.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { StaffComponent } from './staff/staff.component';
import { FriseurComponent } from './friseur/friseur.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { UslugaComponent } from './usluga/usluga.component';


const routes: Routes = [
    {path: 'sign-up-in', component: SignUpInComponent},
    {path: 'about', component: AboutComponent},
    {path: '', redirectTo: '/about', pathMatch: 'full'},
    {path: 'product-list', component: ProductListComponent},
    {path: 'mycart', component: MycartComponent},
    {path: 'cart-columns', component: CartColumnsComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'suppliers', component: SuppliersComponent},
    {path: 'supplies', component: SuppliesComponent},
    {path: 'staff', component: StaffComponent},
    {path: 'friseur', component: FriseurComponent},
    {path: 'product', component: ProductComponent},
    {path: 'usluga', component: UslugaComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }