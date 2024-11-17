import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { UserService } from '../services/user-service/user.service';
import { CategoriesService } from '../services/categories-service/categories.service';
import { ProductsService } from '../services/products-service/products.service';

@Injectable({
  providedIn: 'root'
})
export class UserCategoryProductsFacadeService {

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private userService: UserService
  ) {}

  getProductCategoriesUser(): Observable<any> {
    return forkJoin({
      products: this.productsService.getProducts(),
      categories: this.categoriesService.getCategories(),
      user: this.userService.getCurrentUser()
    });
  }
}
