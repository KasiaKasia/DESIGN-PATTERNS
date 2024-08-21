import { TestBed } from '@angular/core/testing';

import { SlackDecoratorService } from './slack-decorator.service';

describe('SlackDecoratorService', () => {
  let service: SlackDecoratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlackDecoratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
