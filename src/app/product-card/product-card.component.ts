import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: Product = {} as Product;
  @Output() addToCartClicked = new EventEmitter<Product>(); // Emit a Product

  constructor(private cartService: CartService) {}

  onAddToCartClick() {
    this.addToCartClicked.emit(this.product);
  }
}
