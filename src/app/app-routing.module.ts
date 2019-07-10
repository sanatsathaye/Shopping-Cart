import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductsComponent } from './products/products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';

const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },

  { path: 'check-out', component: CheckOutComponent, canActivate:[AuthGuardService] },
  { path: 'order-success', component: OrderSuccessComponent,canActivate:[AuthGuardService] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate:[AuthGuardService] },

  { path: 'admin/products', component: AdminProductsComponent,canActivate:[AuthGuardService, AdminAuthGuardService] },
  { path: 'admin/products/new', component: ProductFormComponent,canActivate:[AuthGuardService, AdminAuthGuardService] },
  { path: 'admin/orders', component: AdminOrdersComponent,canActivate:[AuthGuardService, AdminAuthGuardService ] }

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
