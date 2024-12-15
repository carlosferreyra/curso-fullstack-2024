import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  name: string = '';
  address: string = '';
  cardNumber: string = '';

  onSubmit() {
    // Process the checkout form submission
    console.log('Checkout form submitted', {
      name: this.name,
      address: this.address,
      cardNumber: this.cardNumber
    });
  }
}
