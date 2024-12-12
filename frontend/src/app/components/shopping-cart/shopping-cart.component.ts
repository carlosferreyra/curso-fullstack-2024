import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;
  taxes: number = 0;
  shippingCost: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.fetchCartItems();
  }

  fetchCartItems(): void {
    this.cartService.getCartItems().subscribe((data: any[]) => {
      this.cartItems = data;
      this.calculateTotalPrice();
    });
  }

  addItem(product: any): void {
    this.cartService.addItem(product).subscribe(() => {
      this.fetchCartItems();
    });
  }

  removeItem(productId: string): void {
    this.cartService.removeItem(productId).subscribe(() => {
      this.fetchCartItems();
    });
  }

  modifyQuantity(productId: string, quantity: number): void {
    this.cartService.modifyQuantity(productId, quantity).subscribe(() => {
      this.fetchCartItems();
    });
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    this.calculateTaxes();
    this.calculateShippingCost();
  }

  calculateTaxes(): void {
    this.taxes = this.totalPrice * 0.1; // Example tax rate
  }

  calculateShippingCost(): void {
    this.shippingCost = this.cartItems.length > 0 ? 5 : 0; // Example shipping cost
  }
}
