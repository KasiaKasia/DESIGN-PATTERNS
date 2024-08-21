import { TestBed } from '@angular/core/testing';

import { BaseDecoratorService } from './base-decorator.service';

describe('BaseDecoratorService', () => {
  let service: BaseDecoratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDecoratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
