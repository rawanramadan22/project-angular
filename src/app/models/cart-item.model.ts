// cart-item.model.ts
import { Product } from './product.model';

export interface CartItem {
  product: Product;
  quantity: number;
  stock: number;
}
