import { Routes } from '@angular/router';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  { path: 'catalogs', component: CatalogsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', redirectTo: '/catalogs', pathMatch: 'full' },
  { path: '**', redirectTo: '/catalogs' }
];
