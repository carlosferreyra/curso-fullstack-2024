import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchKeyword: string = '';
  sortOption: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  filterProducts(category: string): void {
    this.filteredProducts = this.products.filter(product => product.category === category);
  }

  sortProducts(option: string): void {
    this.sortOption = option;
    if (option === 'price-asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (option === 'price-desc') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  searchProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }
}
