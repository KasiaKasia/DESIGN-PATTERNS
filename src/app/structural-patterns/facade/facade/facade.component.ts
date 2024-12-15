import { Component } from '@angular/core';
import { UserCategoryProductsFacadeService } from '../facade-service/user-category-products-facade.service';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-facade',
  standalone: true,
  imports: [AsyncPipe],
  template: ` 
    <p>Design Pattern Facade</p>

    @if (facadeService$ | async; as data) {
        <div>{{ data.user.name }}</div>
    <div>
        <h2>Select categories</h2>
        <select>
            @for(category of data.categories; track category) {
              <option [value]="category.id">
                  {{ category.name }}
              </option>
            }
        </select>

        <h2>Select Product</h2>
        <select>
            @for(product of data.products; track product) {
                <option [value]="product.id">
                    {{ product.name }}
                </option>
            }
        </select>
    </div>
    }`,
 // templateUrl: './facade.component.html',
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