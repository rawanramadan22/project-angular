import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private productsUrl = './assets/products.json';
  private productsUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductById(id: number): Observable<Product | null> {
    const productUrl = `${this.productsUrl}/${id}`; 
    return this.http.get<Product>(productUrl).pipe(
      map((product: Product) => {
        console.log('Fetched product:', product);
        return product;
      })
    );
  }
}
