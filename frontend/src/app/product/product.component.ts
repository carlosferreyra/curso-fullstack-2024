import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // Hardcoded product details for the product component
  product = {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    price: 10.99
  };
}
