import { TestBed } from '@angular/core/testing';

import { UserCategoryProductsFacadeService } from './user-category-products-facade.service';

describe('UserCategoryProductsFacadeService', () => {
  let service: UserCategoryProductsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCategoryProductsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
