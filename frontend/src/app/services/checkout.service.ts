import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private apiUrl = 'http://localhost:3000/api/checkout';

  constructor(private http: HttpClient) { }

  collectUserInformation(shippingInfo: any, billingInfo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user-info`, { shippingInfo, billingInfo });
  }

  processOrder(shippingInfo: any, billingInfo: any, paymentOption: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/process-order`, { shippingInfo, billingInfo, paymentOption });
  }

  handlePaymentOptions(paymentOption: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/payment-options`, { paymentOption });
  }

  sendOrderConfirmationEmail(orderConfirmation: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/send-confirmation-email`, { orderConfirmation });
  }
}
