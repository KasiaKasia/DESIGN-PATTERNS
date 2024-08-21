import { TestBed } from '@angular/core/testing';

import { NotifierDecoratorService } from './notifier-decorator.service';

describe('NotifierDecoratorService', () => {
  let service: NotifierDecoratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifierDecoratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
