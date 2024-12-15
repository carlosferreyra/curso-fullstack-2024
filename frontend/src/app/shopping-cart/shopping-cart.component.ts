import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  items = [
    { name: 'Product 1', price: 10.99, quantity: 1 },
    { name: 'Product 2', price: 5.99, quantity: 2 },
    { name: 'Product 3', price: 20.99, quantity: 1 }
  ];

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
