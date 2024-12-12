import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() { }

  getCartItems(): any[] {
    return this.cartItems;
  }

  addItem(product: any): void {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  removeItem(productId: string): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }

  modifyQuantity(productId: string, quantity: number): void {
    const item = this.cartItems.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  calculateTaxes(): number {
    return this.calculateTotalPrice() * 0.1; // Example tax rate
  }

  calculateShippingCost(): number {
    return this.cartItems.length > 0 ? 5 : 0; // Example shipping cost
  }
}
