import { TestBed } from '@angular/core/testing';

import { FacebookDecoratorService } from './facebook-decorator.service';

describe('FacebookDecoratorService', () => {
  let service: FacebookDecoratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookDecoratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
