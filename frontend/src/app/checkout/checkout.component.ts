import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutItems = [
    { id: 1, name: 'Laptop', price: 999.99, quantity: 1 },
    { id: 2, name: 'Smartphone', price: 499.99, quantity: 2 },
    { id: 3, name: 'Headphones', price: 199.99, quantity: 1 }
  ];

  getTotalPrice(): number {
    return this.checkoutItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  placeOrder(): void {
    // Logic to place the order
    console.log('Order placed successfully!');
  }
}
