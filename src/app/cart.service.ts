import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { product: Product; quantity: number }[] = [];

  addToCart(product: Product) {
    const existingItem = this.cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ product: product, quantity: 1 });
    }
  }

  decreaseQuantity(product: Product) {
    const existingItem = this.cart.find((item) => item.product.id === product.id);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity--;
    }
  }

  removeProductFromCart(product: Product) {
    const index = this.cart.findIndex((item) => item.product.id === product.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getCartItems() {
    return this.cart;
  }

  getTotalPrice() {
    return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }


}
