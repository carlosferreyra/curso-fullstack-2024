import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product = {
    id: 1,
    name: 'Laptop',
    description: 'A high-performance laptop for all your needs.',
    price: 999.99
  };
}
