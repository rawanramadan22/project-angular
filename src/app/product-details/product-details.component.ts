import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    const productId = productIdParam !== null ? +productIdParam : 0;

    console.log('productId:', productId);

    this.productService.getProductById(productId).subscribe(
      (product) => {
        this.product = product;
        console.log('Fetched product:', product);
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }
}
