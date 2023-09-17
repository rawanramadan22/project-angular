import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  private searchUrl = 'https://dummyjson.com/products/search';

  constructor(private http: HttpClient) {}

  searchProducts(keyword: string): Observable<Product[]> {
    const url = `${this.searchUrl}?q=${keyword}`;
    return this.http.get<Product[]>(url);
  }
}
