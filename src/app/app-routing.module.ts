import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:productId', component: ProductItemComponent },
  { path: 'cart/submit', component: ConfirmationComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
