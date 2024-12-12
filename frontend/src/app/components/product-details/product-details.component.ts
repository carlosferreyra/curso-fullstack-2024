import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  reviews: any[] = [];
  relatedItems: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.fetchProductDetails();
  }

  fetchProductDetails(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductDetails(productId).subscribe((data: any) => {
      this.product = data;
      this.reviews = data.reviews;
      this.relatedItems = data.relatedItems;
    });
  }

  displayReviews(): void {
    // Logic to display reviews
  }

  displayRelatedItems(): void {
    // Logic to display related items
  }
}
