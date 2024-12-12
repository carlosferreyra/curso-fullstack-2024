import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  shippingInfo: any = {};
  billingInfo: any = {};
  paymentOption: string = '';
  orderConfirmation: any = {};

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.collectUserInformation();
  }

  collectUserInformation(): void {
    // Logic to collect user shipping and billing information
  }

  handlePaymentOption(option: string): void {
    this.paymentOption = option;
    // Logic to handle multiple payment options
  }

  processOrder(): void {
    this.checkoutService.processOrder(this.shippingInfo, this.billingInfo, this.paymentOption).subscribe((confirmation: any) => {
      this.orderConfirmation = confirmation;
      this.sendOrderConfirmationEmail();
    });
  }

  sendOrderConfirmationEmail(): void {
    this.checkoutService.sendOrderConfirmationEmail(this.orderConfirmation).subscribe(() => {
      // Logic to handle email confirmation
    });
  }
}
