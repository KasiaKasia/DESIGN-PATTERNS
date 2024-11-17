import { Component } from '@angular/core';
import { UserCategoryProductsFacadeService } from '../facade-service/user-category-products-facade.service';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-facade',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './facade.component.html',
  styleUrl: './facade.component.scss'
})
export class FacadeComponent {
  facadeService$ = this.productCategoriesUserFacadeService.getProductCategoriesUser().pipe(
    map(value => ({
      user: value.user,
      categories: value.categories,
      products: value.products
    }))
  );

  constructor(private productCategoriesUserFacadeService: UserCategoryProductsFacadeService) { }
} 