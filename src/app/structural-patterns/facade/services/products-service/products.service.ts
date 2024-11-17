import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

export interface Product {
  id: number;
  name: string;
  categoryId: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    { id: 1, name: 'Product 1', categoryId: 1, price: 100 },
    { id: 2, name: 'Product 2', categoryId: 2, price: 150 },
    { id: 3, name: 'Product 3', categoryId: 1, price: 200 },
    { id: 4, name: 'Product 4', categoryId: 3, price: 250 }
  ];
 
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
