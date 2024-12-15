import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  // Hardcoded list of products for the catalog
  products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20.99 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 30.99 }
  ];
}
