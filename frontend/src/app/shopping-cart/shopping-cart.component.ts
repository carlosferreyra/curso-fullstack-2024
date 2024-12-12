import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems = [
    { id: 1, name: 'Laptop', price: 999.99, quantity: 1 },
    { id: 2, name: 'Smartphone', price: 499.99, quantity: 2 },
    { id: 3, name: 'Headphones', price: 199.99, quantity: 1 }
  ];

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }

  updateQuantity(itemId: number, quantity: number): void {
    const item = this.cartItems.find(item => item.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }
}
