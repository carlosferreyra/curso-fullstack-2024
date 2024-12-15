import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  // Hardcoded product details for the product detail component
  product = {
    id: 1,
    name: 'Product 1',
    description: 'Detailed description of Product 1',
    price: 10.99
  };
}
