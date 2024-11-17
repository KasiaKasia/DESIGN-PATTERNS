import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { User, UserService } from '../services/user-service/user.service';
import { CategoriesService, Category } from '../services/categories-service/categories.service';
import { Product, ProductsService } from '../services/products-service/products.service';

export interface UserCategoryProduct {
  user: User;
  categories: Category[];
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class UserCategoryProductsFacadeService {

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private userService: UserService
  ) {}

  getProductCategoriesUser(): Observable<UserCategoryProduct> {
    return forkJoin({
      products: this.productsService.getProducts(),
      categories: this.categoriesService.getCategories(),
      user: this.userService.getCurrentUser()
    });
  }
}
